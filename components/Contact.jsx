// Contact.jsx
import React from "react";

const Contact = () => {
  const email = "isha.zimba@gmail.com";
  return (
    <footer id="contact_me">
      <h2>Contact</h2>

      <div id="social-media-logo">
        <a href="https://www.linkedin.com/in/isha-tamang/" target="_blank">
          <img
            className="social-media"
            src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/linkedin.png"
            alt="linkedin"
          />
        </a>

        <a href="https://github.com/ishazimba" target="_blank">
          <img
            className="social-media"
            src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/github.png"
            alt="github"
          />
        </a>
      </div>
      <div>
        <p>
          Email:
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>

      <div>
        <p>&copy; Isha Tamang 2023. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Contact;
