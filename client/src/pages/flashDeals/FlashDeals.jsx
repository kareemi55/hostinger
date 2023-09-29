import React from "react";
import "./ContentSection.css"; // Import CSS file for styling
// ====================================== images ========================================
import image1 from "./images/img4.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/img2.jpg";
import image4 from "./images/img1.jpeg";
import image5 from "./images/floor-tiles.jpg";
import image6 from "./images/kitchen.jpg";

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
      name: "INDOOR TILES",
      shopUrl: "https://imantiles.com/shop/item2",
    },
    {
      src: image3,
      name: "WALL TILES",
      shopUrl: "https://imantiles.com/shop/item2",
    },
    {
      src: image4,
      name: "TERRACOTTA TILES",
      shopUrl: "https://imantiles.com/shop/item2",
    },
    {
      src: image5,
      name: "Bathroom TILES",
      shopUrl: "https://imantiles.com/shop/item2",
    },
    {
      src: image6,
      name: "KITCHEN TILES",
      shopUrl: "https://imantiles.com/shop/item2",
    },
    // Add more image data as needed
  ];

  return (
    <>
    <div className='content-section'>
      {images.map((image, index) => (
        <div className='image-wrapper' key={index}>
          <img src={image.src} alt={`Item ${index + 1}`} className='image' />
          <div className='item-details'>
            <span className='item-name'>{image.name}</span>
            {/* <a href={image.shopUrl} className='shop-button'>
              Shop Now
            </a> */}
          </div>
        </div>
      ))}

      {/* Add the button like the one in the image here */}
      
    </div>
    <button className="shop-button-fullwidth">View all</button>
    </>
  );
};

export default ContentSection;
