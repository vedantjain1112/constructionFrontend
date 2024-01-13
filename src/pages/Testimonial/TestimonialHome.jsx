import React from "react";
import Testimonial from "./Testimonial.jsx";
import "./TestimonialHome.scss";
function TestimonialHome() {
  return (
    <div>
      <h1 id="testimonial" className="testiminioal">
        Testimonials
      </h1>
      <hr className="testHorizontal" />

      <div>
        <Testimonial />
      </div>
    </div>
  );
}

export default TestimonialHome;
