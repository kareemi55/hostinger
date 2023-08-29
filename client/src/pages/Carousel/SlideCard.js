/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
// import Sdata from "./Sdata";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
// images

import image1 from "./images/page.jpg";
import image2 from "./images/slider-2.jpg";
import image3 from "./images/stair.jpg";

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFadeIn, setIsFadeIn] = useState(false);
  const images = [image1, image2, image3];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFadeIn(false); // Start fade-out animation
      setTimeout(() => {
        setCurrentImage((prevImage) =>
          prevImage === images.length - 1 ? 0 : prevImage + 1
        );
      }, 500); // Wait for fade-out animation to complete (adjust duration as needed)
    }, 30000);

    return () => clearInterval(timer);
  }, [images.length]);

  const previousImage = () => {
    setIsFadeIn(false);
    setTimeout(() => {
      setCurrentImage((prevImage) =>
        prevImage === 0 ? images.length - 1 : prevImage - 1
      );
    }, 500); // Wait for fade-out animation to complete (adjust duration as needed)
  };

  const nextImage = () => {
    setIsFadeIn(false);
    setTimeout(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, 500); // Wait for fade-out animation to complete (adjust duration as needed)
  };

  useEffect(() => {
    setIsFadeIn(true); // Trigger fade-in animation on image change
  }, [currentImage]);

  return (
    <div className='carousel'>
      <button className='carousel-button prev' onClick={previousImage}>
        <FaChevronLeft />
      </button>
      <div className={`carousel-image-container ${isFadeIn ? "fade-in" : ""}`}>
        <img
          className='img-carso'
          src={images[currentImage]}
          alt={`Image ${currentImage + 1}`}
        />
      </div>
      <button className='carousel-button next' onClick={nextImage}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
