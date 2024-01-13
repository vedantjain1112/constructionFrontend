import React, { useEffect, useState } from "react";
import Image from "../../../src/gururaj.jpg";
import axios from "axios";
import "./Construction.css";
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
      <div
        className="load"
        style={{
          marginTop: "20px",
        }}
      >
        Hang on tight..
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
