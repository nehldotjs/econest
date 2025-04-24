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
        <div className="link1Wrapper">
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
      <p className="copyright">
        &copy; 2025 Econest newsletter. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
