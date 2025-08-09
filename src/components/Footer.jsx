import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="section-footer-inner text-center mt-2">
        unform 2024
        <a
          href="https://instagram.com/unformdublin"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginLeft: "10px", color: "#fff", fontSize: "24px" }}
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
