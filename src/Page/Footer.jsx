import React, { useEffect } from "react";
import "../styles/footer.css";

import AOS from "aos";
import "aos/dist/aos.css";
function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true // whether animation should happen only once
    });
  }, []);

  return (
    <div className="footer">
      <div className="footerWrapper">
        <div className="f-logoWrapper">
          <h2 data-aos="fade-up">Econest</h2>
          <p data-aos="fade-up">
            Exploring the inersection of design, technology, and sustainability
            for forward-thinking creatives and tech enthusiasts.
          </p>
        </div>
        <div className="footerLinksWrapper">
          <div className="link1Wrapper" data-aos="fade-up">
            <h3>Navigation</h3>
            <button type="button" className="footerLink">
              Home
            </button>
            <button type="button" className="footerLink">
              About
            </button>
            <button type="button" className="footerLink">
              Features
            </button>
            <button type="button" className="footerLink">
              Article
            </button>
          </div>
          <div className="link1Wrapper" data-aos="fade-up">
            <h3>Legal</h3>
            <button type="button" className="footerLink">
              Privacy Policy
            </button>
            <button type="button" className="footerLink">
              Term Of Service
            </button>
            <button type="button" className="footerLink">
              Cookie Policy
            </button>
            <button type="button" className="footerLink">
              Help Center
            </button>
          </div>
        </div>
      </div>
      <p className="copyright" data-aos="fade-up">
        &copy; 2025 Econest newsletter. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
