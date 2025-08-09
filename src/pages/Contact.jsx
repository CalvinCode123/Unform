import React from "react";
import { FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <section id="about-me" className="container-fluid section-3">
      <div className="row">
        <div className="col text-center">
          <div id="email" className="paragraph mx-auto mt-2">
            info@unformdublin.ie
          </div>
        </div>
        <div>
          <p>Follow us on Instagram for updates!</p>
          <div>
            <a
              href="https://instagram.com/unformdublin"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "10px", color: "#ec4cb0", fontSize: "24px" }}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gap: 16 }}></div>
    </section>
  );
}

export default Contact;
