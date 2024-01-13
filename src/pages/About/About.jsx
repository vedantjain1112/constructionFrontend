import React, { useEffect, useState } from "react";
import "./About.css";
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
        <div
          className="aboutLoad"
          style={{
            marginTop: "20px",
          }}
        >
          Hang on tight..
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
