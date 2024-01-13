import React, { useState, useEffect } from "react";
import axios from "axios";
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
          <div
            className="testimonialLoad"
            style={{
              marginTop: "20px",
            }}
          >
            Loading...
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
