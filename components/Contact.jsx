import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import ContactLinks from "./contactLinks";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const setForm = ({ name: newName, email: newEmail, message: newMessage }) => {
    setName(newName);
    setEmail(newEmail);
    setMessage(newMessage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_i4og8wv",
        "template_o8mgu4h",
        e.target,
        "-hxFFTqgIr33Uiikz"
      )
      .then(
        (result) => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <footer id="contact_me">
      <h2>Contact</h2>
      <Container>
        <Form onSubmit={handleSubmit} className="border rounded p-4">
          <p style={{ color: "#fff", fontSize: "20px" }}>GET IN TOUCH</p>
          <Form.Group controlId="formName">
            <Form.Label>Your Name:</Form.Label>
            <Form.Control
              type="text"
              name="from_name"
              placeholder="Enter your name here"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Your Email:</Form.Label>
            <Form.Control
              type="email"
              name="from_email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Your Message:</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              placeholder="What you want to say?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </Button>
        </Form>
      </Container>
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
