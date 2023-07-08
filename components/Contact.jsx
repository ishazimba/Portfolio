// Contact.jsx
import React from "react";

const Contact = () => {
  const email = "isha.zimba@gmail.com";
  return (
    <footer id="contact_me">
      <h2>Contact</h2>
      <div>
        <p>
          Email:
          <a href={`mailto:${email}`}>{email}</a>
        </p>

        <p>
          LinkedIn:
          <a href="https://www.linkedin.com/in/isha-tamang/" target="_blank">
            isha-tamang
          </a>
        </p>
        <p>
          GitHub:
          <a href="https://github.com/ishazimba" target="_blank">
            ishazimba
          </a>
        </p>
      </div>
      <div>
        <p>&copy; Isha Tamang 2023. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Contact;
