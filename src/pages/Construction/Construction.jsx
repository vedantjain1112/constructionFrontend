import React, { useEffect, useState } from "react";
import Image from "../../../src/gururaj.jpg";
import axios from "axios";
import "./Construction.css";
import "../../pages/CommonStyles.scss";
const baseUrl = "https://construction-server-gj1b.onrender.com";
const Construction = () => {
  const [constructionData, setConstructionData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/construction`);
        setConstructionData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching construction content:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
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
    );
  }

  return (
    <>
      <h1 id="home">Home</h1>
      <hr className="hRule" />
      <section className="hero">
        <div className="containeeeer">
          <div className="hero-content">
            <h2>
              {constructionData && constructionData.title1} <br />
              <span className="spnTag">
                {constructionData && constructionData.spanTagContent}
              </span>
            </h2>
            <h2 id="tg2">{constructionData && constructionData.title2}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: constructionData && constructionData.paragraph,
              }}
            ></p>
          </div>
          <div className="hero-image">
            <img src={Image} alt="Gururaj Construction" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Construction;
