import React, { useState, useEffect } from "react";

const HomePage = () => {
  const images = ["Image/1.png", "Image/3.png", "Image/4.png"];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous slide
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
    // }, [images.length],);
  }, [currentIndex]);
  return (
    <>
      <div className="slider-container">
        <div className="slider-wrapper">
          {images.map((image, index) => (
            <>
              <div
                key={image}
                className={`slider-item ${
                  index === currentIndex ? "active" : ""
                }`}
                style={{ display: index === currentIndex ? "block" : "none" }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/" + image}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </>
          ))}
        </div>
        <button onClick={goToPrevious} className="slider-button">
          <img src="Image/left_arrow.png" alt="prev" />
        </button>
        <button onClick={goToNext} className="slider-button">
          <img src="Image/right_arrow.png" alt="next" />
        </button>
      </div>

      <div className="background-banner">
        <div className="container container-banner">
          <div className="row infos">
            <div
              className="col-sm-12 text-center"
              style={{ backgroundColor: "black", padding: "30px" }}
            >
              <h1>Welcome to Dk Hr Solution</h1>
              <p>
                Founded by Mrs. BDhiraj Kumar Dk Hr Solution is a global
                provider of HR solutions with presence in over six locations in
                India and has partners in 21 countries serving the clients
                across the globe. We are conscious that our business impacts
                millions of people each day and hence we view our business each
                day with an innovative and strategic approach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
