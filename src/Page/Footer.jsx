import React from "react";
import "../styles/footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footerWrapper">
        <div className="f-logoWrapper">
          <h2>Econest</h2>
          <p>
            Exploring the inersection of design, technology, and sustainability
            for forward-thinking creatives and tech enthusiasts.
          </p>
        </div>
        <div className="link1Wrapper">
          <h3>Navigation</h3>
          <a href="#" className="footerLink">
            Home
          </a>
          <a href="#" className="footerLink">
            About
          </a>
          <a href="#" className="footerLink">
            Features
          </a>
          <a href="#" className="footerLink">
            Article
          </a>
        </div>
        <div className="link1Wrapper">
          <h3>Legal</h3>
          <a href="#" className="footerLink">
            Privacy Policy
          </a>
          <a href="#" className="footerLink">
            Term Of Service
          </a>
          <a href="#" className="footerLink">
            Cookie Policy
          </a>
          <a href="#" className="footerLink">
            Help Center
          </a>
        </div>
      </div>
        <p className="copyright">
          &copy; 2025 Econest newsletter. All rights reserved.
        </p>
    </div>
  );
}

export default Footer;
