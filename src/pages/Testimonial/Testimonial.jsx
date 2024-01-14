import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../pages/CommonStyles.scss";
import "./Testimonial.scss";
const baseUrl = "https://construction-server-gj1b.onrender.com";

function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(`${baseUrl}/testimonials`);
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  return (
    <div>
      <div className="wrapperTest">
        {loading ? (
          <div class="containerLoading">
            <svg
              class="loader"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 340 340"
            >
              <circle
                cx="170"
                cy="170"
                r="160"
                stroke="#E2007C"
                className="circleLoading"
              />
              <circle
                cx="170"
                cy="170"
                r="135"
                stroke="#404041"
                className="circleLoading"
              />
              <circle
                cx="170"
                cy="170"
                r="110"
                stroke="#E2007C"
                className="circleLoading"
              />
              <circle
                cx="170"
                cy="170"
                r="85"
                stroke="#404041"
                className="circleLoading"
              />
            </svg>
          </div>
        ) : (
          testimonials.map((testimonial) => (
            <div className="review-card" key={testimonial._id}>
              <div className="header-content">
                <div className="img-area">
                  {console.log(
                    "Image URL:",
                    `${baseUrl}/uploads/${testimonial.image}`
                  )}
                  <img
                    alt={testimonial.name}
                    src={`${baseUrl}/uploads/${testimonial.image}`}
                  />
                </div>
                <div className="info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
              <div className="single-review">
                <p>{testimonial.review}</p>
              </div>
              <div className="review-footer">
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <span key={index} className="active">
                      ★
                    </span>
                  ))}
                </div>

                <p>Reviewed on {formatDate(testimonial.reviewDate)}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Testimonial;
