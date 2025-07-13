import React from "react";
import "./Contact.css";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="follow-us-section pt-5 pb-5" id="followUsSection">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="follow-us-section-heading">Connect With Us</h1>
            </div>
            <div className="col-12">
              <div className="d-flex flex-row justify-content-center">
                <div className="follow-us-icon-container">
                  <a
                    href="https://www.linkedin.com/company/deccterous-nie/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="icon" />
                  </a>
                </div>
                <div className="follow-us-icon-container">
                  <a
                    href="https://www.instagram.com/deccterous.ic_design_club"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="icon" />
                  </a>
                </div>
                <div className="follow-us-icon-container">
                  <a
                    href="https://chat.whatsapp.com/COuZtWweSi512iV4u4tw9u"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="icon" />
                  </a>
                </div>
                <div className="follow-us-icon-container">
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <img
                src="/images/icdc_logo.jpg"
                className="icdesign-club-logo1"
                alt="IC Design Club Logo"
              />
              <h1 className="footer-section-mail-id">icdesignclub@nie.ac.in</h1>
              <a
                className="footer-section-address"
                href="https://maps.app.goo.gl/B79Z4uut8Hf2mS91A"
                target="_blank"
                rel="noopener noreferrer"
              >
                The National Institute Of Engineering Mysuru, Karnataka 570008
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
