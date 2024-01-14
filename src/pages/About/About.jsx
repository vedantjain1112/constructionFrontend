import React, { useEffect, useState } from "react";
import "./About.css";
import "../../pages/CommonStyles.scss";
import axios from "axios";
const baseUrl = "https://construction-server-gj1b.onrender.com";

function About() {
  const [aboutData, setAboutData] = useState({ content: "", imagePath: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/about`);
        console.log("API Response:", response.data);
        setAboutData(response.data || { content: "", imagePath: "" });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 id="about" className="aboutUs">
        About us
      </h1>
      <hr className="horiZ" />
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
        <div className="containerrrr">
          <div className="circle">
            {aboutData.imagePath && (
              <img
                src={`${baseUrl}/uploads/${aboutData.imagePath}`}
                alt="Gururaj Construction"
              />
            )}
          </div>

          <div
            className="content"
            style={{
              fontFamily: "Lato, sans-serif",
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: aboutData.content }} />
          </div>
        </div>
      )}
    </>
  );
}

export default About;
