import "./Gallery.scss";
import Image1 from "../../crane/IMG-20240108-WA0150.jpg";
import Image2 from "../../crane/IMG-20240108-WA0153.jpg";
import Image3 from "../../crane/IMG-20240108-WA0152.jpg";
import Image4 from "../../crane/IMG-20240108-WA0153.jpg";
import Image5 from "../../crane/IMG-20240108-WA0155.jpg";
import Image6 from "../../crane/IMG-20240108-WA0156.jpg";
import Image7 from "../../crane/IMG-20240108-WA0157.jpg";
import Image8 from "../../crane/IMG-20240108-WA0159.jpg";
import Image9 from "../../crane/IMG-20240108-WA0160.jpg";
import Image10 from "../../crane/last.jpg";
import Image11 from "../../crane/IMG-20240108-WA0162.jpg";

function Gallery() {
  return (
    <>
      <h1 id="gallery" className="headingImgGallery">
        Gallery
      </h1>
      <hr id="imageHRule" />
      <div class="containerImage">
        <a
          href="./IMG-20240108-WA0150.jpg"
          data-lightbox="homePortfolio"
          class="big"
        >
          <img src={Image1} alt="image_hydra" />
        </a>

        <a
          href="./IMG-20240108-WA0153.jpg"
          data-lightbox="homePortfolio"
          class="vertical"
        >
          <img src={Image2} alt="image_crane" />
        </a>

        <a
          href="./IMG-20240108-WA0152.jpg"
          data-lightbox="homePortfolio"
          class="big"
        >
          <img src={Image3} alt="image_working_hydra" />
        </a>

        <a
          href="./IMG-20240108-WA0153.jpg"
          data-lightbox="homePortfolio"
          class="vertical"
        >
          <img src={Image4} alt="image_crane_working" />
        </a>

        <a
          href="./IMG-20240108-WA0155.jpg"
          data-lightbox="homePortfolio"
          class="big"
        >
          <img src={Image5} alt="image_crane" />
        </a>

        <a
          href="./IMG-20240108-WA0156.jpg"
          data-lightbox="homePortfolio"
          class="big"
        >
          <img src={Image6} alt="image_working_hydra" />
        </a>

        <a
          href="./IMG-20240108-WA0157.jpg"
          data-lightbox="homePortfolio"
          class="vertical"
        >
          <img src={Image7} alt="crane" />
        </a>

        <a
          href="./IMG-20240108-WA0159.jpg"
          data-lightbox="homePortfolio"
          class="big"
        >
          <img src={Image8} alt="hydra_crane" />
        </a>

        <a
          href="./IMG-20240108-WA0160.jpg"
          data-lightbox="homePortfolio"
          class="horizontal"
        >
          <img src={Image9} alt="crane_hydra" />
        </a>

        <a href="./last.jpg" data-lightbox="homePortfolio" class="big">
          <img src={Image10} alt="working_in_the_site" />
        </a>

        <a
          href="./IMG-20240108-WA0162.jpg"
          data-lightbox="homePortfolio"
          class="vertical big"
        >
          <img src={Image11} alt="hydra_working" />
        </a>
      </div>
    </>
  );
}

export default Gallery;
