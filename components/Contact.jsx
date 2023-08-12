import React from "react";
import ContactLinks from "./contactLinks";

const Contact = () => {
  const email = "isha.zimba@gmail.com";
  return (
    <footer id="contact_me">
      <h2>Contact</h2>
      <div className="flex text-secondary">
        <ContactLinks size={40} />
      </div>

      <div>
        <p>&copy; Isha Tamang 2023. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Contact;
