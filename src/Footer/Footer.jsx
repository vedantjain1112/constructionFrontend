import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";

const baseUrl = "https://construction-server-gj1b.onrender.com";

const Footer = () => {
  const [socialLinks, setSocialLinks] = useState({});

  useEffect(() => {
    fetch(`${baseUrl}/footer`)
      .then((response) => response.json())
      .then((data) => setSocialLinks(data))
      .catch((error) =>
        console.error("Error fetching social media links:", error)
      );
  }, []);
  return (
    <>
      <section className="footer">
        <div className="social">
          <Link to={socialLinks.instagram}>
            <FaInstagram />
          </Link>{" "}
          <Link to={socialLinks.linkedin}>
            <FaLinkedin />
          </Link>
          <Link to={socialLinks.facebook}>
            <FaFacebookF />
          </Link>
          <Link to={socialLinks.whatsapp}>
            <FaWhatsapp />
          </Link>
        </div>

        <ul className="list">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              style={{
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              style={{
                fontFamily: "Poppins, sans-serif",
              }}
            >
              About us
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="servicePart"
              smooth={true}
              duration={500}
              style={{
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Services
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              style={{
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Contact us
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="gallery"
              smooth={true}
              duration={500}
              style={{
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Gallery
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="direction"
              smooth={true}
              duration={500}
              style={{
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Direction
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="testimonial"
              smooth={true}
              duration={500}
              style={{
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Testimonial
            </ScrollLink>
          </li>
        </ul>
        <p
          className="copyright"
          style={{
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Gururaj Construction @ 2024
        </p>
      </section>
    </>
  );
};

export default Footer;
