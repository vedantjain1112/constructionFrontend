import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Image from "../../src/logo_gururaj.png";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container py-2">
          <Link
            className="navbar-brand"
            style={{
              fontFamily: "Poppins, sans-serif",
            }}
            to="/"
          >
            <img
              src={Image}
              alt="Gururaj Construction"
              style={{
                width: "70px",
                height: "60px",
              }}
            />{" "}
            Gururaj{" "}
            <span
              style={{
                fontFamily: "Poppins, sans-serif",
              }}
              id="tex"
            >
              Construction
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse align-middle" id="navbarNav">
            <ul className="navbar-nav ms-auto nav_ul align-items-center">
              <li className="nav-item">
                <ScrollLink
                  className="nav-link"
                  to="home"
                  smooth={true}
                  duration={800}
                >
                  Home
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  className="nav-link"
                  to="about"
                  smooth={true}
                  duration={800}
                >
                  About us
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  className="nav-link"
                  to="servicePart"
                  smooth={true}
                  duration={800}
                >
                  Services
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  className="nav-link"
                  to="contact"
                  smooth={true}
                  duration={800}
                >
                  Contact Us
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  className="nav-link"
                  to="gallery"
                  smooth={true}
                  duration={800}
                >
                  Gallery
                </ScrollLink>
              </li>

              <li className="nav-item">
                <ScrollLink
                  className="nav-link"
                  to="testimonial"
                  smooth={true}
                  duration={800}
                >
                  Testimonial
                </ScrollLink>
              </li>
              <li className="nav-item" id="direction">
                <select
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "black",
                  }}
                  className="nav-link direct"
                  defaultValue="0"
                  onChange={(e) => (window.location.href = e.target.value)}
                >
                  <option value="0" disabled hidden>
                    Direction
                  </option>
                  <option
                    style={{
                      fontFamily: "Poppins, sans-serif",
                    }}
                    value="https://www.google.com/maps/place/Gururaj+Construction/@23.0067768,55.0668297,5z/data=!4m10!1m2!2m1!1sGururaj+Contruction+!3m6!1s0x39613f2e6ed5bfb3:0x50f6bc0ccab56bb5!8m2!3d23.0067768!4d74.5785485!15sChRHdXJ1cmFqIENvbnN0cnVjdGlvbpIBI2NvbnN0cnVjdGlvbl9tYWNoaW5lX3JlbnRhbF9zZXJ2aWNl4AEA!16s%2Fg%2F11vk4r2t49?entry=ttu"
                  >
                    Gururaj Construction
                  </option>
                  <option
                    style={{
                      fontFamily: "Poppins, sans-serif",
                    }}
                    value="https://www.google.com/maps/place/Gururaj+Crane+Service+Jaora/@23.634929,75.1201821,17z/data=!3m1!4b1!4m6!3m5!1s0xe6d85622e883d03:0x54974fc8aa0986d3!8m2!3d23.634929!4d75.122757!16s%2Fg%2F11vpl17779?entry=ttu"
                  >
                    Gururaj Crane Service
                  </option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
