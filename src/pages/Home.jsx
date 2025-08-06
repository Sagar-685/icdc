import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Home.css";

const Home = () => {
  const images = [
    "/images/image5.jpg",
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
  ];

  return (
    <section id="home" className="home-section">
      <div className="media-wrapper">
        <img src="/images/logo.jpg" alt="Club Logo" className="home-logo" />
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/f0NLyi_xWMM?rel=0&modestbranding=1"
            title="Club Promo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Anniversary Poster + Video Section */}
      <div className="anniversary-section">
        <h2 className="anniversary-heading">Club Anniversary</h2>

        <div className="anniversary-card">
          <img
            src="/images/anniversary.jpg"
            alt="Anniversary Poster"
            className="anniversary-poster"
          />
          <div className="anniversary-video">
            <video controls className="anniversary-video-element">
              <source src="/images/anniversary.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Separated Carousel Section */}
      <div className="carousel-section">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          className="anniversary-swiper"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Slide ${index + 1}`} className="carousel-image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Newsletter */}
      <div className="main-wrapper">
        <h1>
          <strong>NEWSLETTER</strong>
        </h1>
        <p>
          <a
            href="https://drive.google.com/drive/folders/1eo9Oms2SLSV92eKvl3_2GCitkE3tqDft"
            className="click-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here
          </a>
        </p>
      </div>

      {/* Club Members */}
      <div className="club-members-section-new">
        <h2 className="club-members-heading">CLUB MEMBERS</h2>
        <a
          href="https://drive.google.com/drive/folders/1Kwl7U7WitqvnEod90gFPwszbwYjZBVW1?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="club-members-button"
        >
          Click here
        </a>
      </div>

      {/* Learning Material */}
      <div className="learning-material-container">
        <h2 className="section-heading">LEARNING MATERIAL - BASIC ELECTRONICS</h2>
        <p className="learning-material-text">
          Access study materials here:{" "}
          <a
            href="https://drive.google.com/drive/folders/1CmpZXj5JuL7_rN4fd0hITb-DOLm-mWyB?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="learning-material-link"
          >
            Click Here
          </a>
        </p>
        <div className="learning-material-qr">
          <img src="/images/basic_qr.jpg" alt="QR Code" className="qr-image" />
        </div>
      </div>
    </section>
  );
};

export default Home;
