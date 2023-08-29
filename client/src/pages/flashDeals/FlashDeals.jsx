import React from "react";
import "./ContentSection.css"; // Import CSS file for styling
// ====================================== images ========================================
import image1 from "./images/img4.jpg";
import image2 from "./images/img3.jpg";
import image3 from "./images/img2.jpg";
import image4 from "./images/img1.jpg";

const ContentSection = () => {
  // Sample image data
  const images = [
    {
      src: image1,
      name: "OUTDOOR TILES",
      shopUrl: "https://example.com/shop/item1",
    },
    {
      src: image2,
      name: "OUTDOOR TILES",
      shopUrl: "https://imantiles.com/shop/item2",
    },
    {
      src: image3,
      name: "OUTDOOR TILES",
      shopUrl: "https://imantiles.com/shop/item2",
    },
    {
      src: image4,
      name: "OUTDOOR TILES",
      shopUrl: "https://imantiles.com/shop/item2",
    },
    // Add more image data as needed
  ];

  return (
    <div className='content-section'>
      {images.map((image, index) => (
        <div className='image-wrapper' key={index}>
          <img src={image.src} alt={`Item ${index + 1}`} className='image' />
          <div className='item-details'>
            <span className='item-name'>{image.name}</span>
            <a href={image.shopUrl} className='shop-button'>
             
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentSection;
