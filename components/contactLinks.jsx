import React from "react";
import { Github, Linkedin, Envelope } from "react-bootstrap-icons";

const ContactLinks = ({ size }) => {
  const iconStyle = {
    padding: "0.8rem",
    color: "white",
    borderRadius: "50%",
    transition: "background-color 0.5s, color 0.5s",
  };

  return (
    <div className="d-flex gap-4">
      <a
        href="https://github.com/ishazimba"
        target="_blank"
        rel="noreferrer"
        className="contact-link"
      >
        <div
          className="bg-[#07E2F4] align-items-center justify-content-center contact-icon"
          style={iconStyle}
        >
          <Github fontSize={size} className="icon" />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/isha-tamang/"
        target="_blank"
        rel="noreferrer"
        className="contact-link"
      >
        <div
          className="bg-[#07E2F4] align-items-center justify-content-center contact-icon"
          style={iconStyle}
        >
          <Linkedin fontSize={size} className="icon" />
        </div>
      </a>
      <a
        href="mailto:isha.zimba@gmail.com?subject=Through portfolio"
        className="contact-link"
      >
        <div
          className="align-items-center justify-content-center contact-icon"
          style={iconStyle}
        >
          <Envelope fontSize={size} className="icon" />
        </div>
      </a>
      <style>
        {`
          .contact-icon:hover {
            background-color: #07E2F4;
            color: black;
          }
        `}
      </style>
    </div>
  );
};

export default ContactLinks;
