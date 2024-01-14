import React, { useState, useEffect } from "react";
import "./Services.scss";
import "../../pages/CommonStyles.scss";
const baseUrl = "https://construction-server-gj1b.onrender.com";

function Service() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseUrl}/services`)
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetching services:", error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <div className="mainS">
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
          <ul className="cardContainer">
            {services.map((service) => (
              <li key={service._id} className="cardItemS">
                <div className="cardservICE">
                  <img
                    className="card-image"
                    src={`${baseUrl}/uploads/${service.image}`}
                    alt={service.title}
                  />
                </div>
                <div className="card-onhover">
                  <div className="card-video"></div>
                  <div className="card-info">
                    <div
                      className="card-title"
                      dangerouslySetInnerHTML={{ __html: service.title }}
                    ></div>
                    <p
                      className="card-text"
                      dangerouslySetInnerHTML={{ __html: service.text }}
                    ></p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default Service;
