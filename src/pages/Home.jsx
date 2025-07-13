import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="media-wrapper">
        <img
          src="/images/logo.jpg"
          alt="Club Logo"
          className="home-logo"
        />
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
      <div className="main-wrapper">
        <h1><strong>NEWSLETTER</strong></h1>
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
      <div className="learning-material-container">
  <h2 className="section-heading">LEARNING MATERIAL - BASIC ELECTRONICS</h2>
 <p className="learning-material-text">
  Access study materials here:{' '}
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
    <img
      src="/images/basic_qr.jpg"
      alt="QR Code"
      className="qr-image"
    />
  </div>
</div>

    </section>
  );
};

export default Home;
