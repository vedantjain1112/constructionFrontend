import { BrowserRouter } from "react-router-dom";
import Navbar from "./header/Navbar.jsx";
import Construction from "./pages/Construction/Construction.jsx";
import About from "./pages/About/About.jsx";
import ServicesHome from "./pages/Services/ServicesHome.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import TestimonialHome from "./pages/Testimonial/TestimonialHome.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Construction />
        <About />
        <ServicesHome />
        <Gallery />
        <TestimonialHome />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
