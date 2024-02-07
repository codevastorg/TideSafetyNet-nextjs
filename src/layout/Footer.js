import React from "react";

const Footer = () => {
  return (
    <div className="contact-section">
      <div className="overlay">
        <footer className="footer">
          <p className="infos">
            &copy; {new Date().getFullYear()}, Made by{" "}
            <a
              href="https://github.com/startups-44r0n"
              target="_blank"
              rel="noopener noreferrer"
            >
              StartUps
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
