import React from "react";
import { Carousel } from "react-bootstrap";
export default function Carousel1() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            id="carouselimg"
            className="d-block w-100"
            src="https://burst.shopify.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page/download"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Development</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="carouselimg"
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q="
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Passion</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="carouselimg"
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/image-of-open-antique-book-on-wooden-table-with-glitter-overlay-picture-id1354441996?b=1&k=20&m=1354441996&s=170667a&w=0&h=O4JDagXhIh1N13PNN6G4_L5KB5QPZryin7FOrZnzYvc="
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Discovery</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
