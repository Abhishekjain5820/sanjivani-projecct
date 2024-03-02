import { useState, useEffect } from "react";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextSlide = () => {
    const nextIndex = activeIndex === 2 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const handlePrevSlide = () => {
    const prevIndex = activeIndex === 0 ? 2 : activeIndex - 1;
    setActiveIndex(prevIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000); // Adjust interval as needed

    return () => clearInterval(interval);
  }, [activeIndex]);

  const slides = [
    {
      src: "assets/img/inogration.jpg",
      alt: "First slide",
    },
    {
      src: "assets/img/women_empowerment.jpg",
      alt: "Second slide",
    },
    {
      src: "assets/img/navy.jpg",
      alt: "Third slide",
    },
    {
      src: "assets/img/summit.jpg",
      alt: "Third slide",
    },
    {
      src: "assets/img/val_lit_fest.jpg",
      alt: "Third slide",
    },
  ];

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide "
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        {slides.map((slide, index) => (
          <li
            key={index}
            data-target="#carouselExampleIndicators"
            data-slide-to={index}
            className={activeIndex === index ? "active" : ""}
          ></li>
        ))}
      </ol>
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${activeIndex === index ? "active" : ""}`}
          >
            <img
              className="d-block w-100"
              src={slide.src}
              alt={slide.alt}
              style={{ width: "1170px", height: "380px" }}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-slide="prev"
        onClick={handlePrevSlide}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-slide="next"
        onClick={handleNextSlide}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default HeroSection;
