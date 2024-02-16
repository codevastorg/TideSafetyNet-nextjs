import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <footer className="container py-4">
          <p className="infos">
            &copy; {new Date().getFullYear()}, Made by{" "}
            <a
              href="https://codevast.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code Vast
            </a>
          </p>
          <div className="social-icons">
          <p>Follow us on:</p>
            <a href="https://www.youtube.com/@startups44r0n" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
              <i className="bi bi-youtube"></i>
            </a>
            <a href="https://twitter.com/startups44r0n" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="https://instagram.com/startups44r0n" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
