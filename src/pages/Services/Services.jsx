import React, { useState, useEffect } from "react";
import "./Services.scss";
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
          <div
            className="serviceLoad"
            style={{
              marginTop: "20px",
            }}
          >
            Loading...
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
