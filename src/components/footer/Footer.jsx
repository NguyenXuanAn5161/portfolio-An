// src/components/Footer.js
import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>© 2024 MyPortfolio. All rights reserved.</p>
        <div className="social-media">
          <a
            href="https://github.com/nguyenxuanan5161"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/an-nguyễn-xuân-1a751731a"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          {/* <a
            href="https://twitter.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
