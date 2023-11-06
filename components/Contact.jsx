import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import StarsCanvas from "./canvas/Stars";

import emailjs from "emailjs-com";

import { Form, Button } from "react-bootstrap";
import { SectionWrapper } from "../src/hoc";
import { styles } from "../src/styles";

import { slideIn } from "../src/utils/motion";
import ContactLinks from "./contactLinks";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [validations, setValidations] = useState({
    name: true,
    email: true,
    message: true,
  });
  const emailServiceId = import.meta.env.VITE_REACT_APP_EMAIL_SERVICE_ID;
  const emailTemplateId = import.meta.env.VITE_REACT_APP_EMAIL_TEMPLATE_ID;
  const emailUserId = import.meta.env.VITE_REACT_APP_EMAIL_USER_ID;

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    // Validate fields
    if (name === "name" || name === "message") {
      setValidations({
        ...validations,
        [name]: value.trim() !== "", // Check if the field is not empty
      });
    } else if (name === "email") {
      setValidations({
        ...validations,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), // Check email format
      });
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emptyFields = [];
    if (!form.name.trim()) emptyFields.push("name");
    if (!form.email.trim()) emptyFields.push("email");
    if (!form.message.trim()) emptyFields.push("message");

    if (emptyFields.length > 0) {
      const newErrors = { ...errors };
      emptyFields.forEach((field) => (newErrors[field] = true));
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    emailjs
      .send(
        emailServiceId,
        emailTemplateId,

        {
          from_name: form.name,
          to_name: "Isha Tamang",
          from_email: form.email,
          to_email: "ishazimba.tamang@gmail.com",
          message: form.message,
        },
        emailUserId
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
          setValidations({
            name: true,
            email: true,
            message: true,
          });
          setErrors({
            name: false,
            email: false,
            message: false,
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          if (error.response) {
            console.log("EmailJS Response Status:", error.response.status);
            console.log("EmailJS Response Text:", error.response.text);
          }

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <div>
        <div className="xl:mt-12 d-flex justify-content-center align-items-center gap-10 overflow-hidden">
          <StarsCanvas />
          <div
            className="w-100 mx-auto"
            style={{ maxWidth: "500px", paddingTop: "50px" }}
          >
            <motion.div
              variants={slideIn("left", "tween", 0.2, 1)}
              className="flex-1 p-4 border-none mx-auto"
              style={{
                backgroundColor: "var(--tertiary-color)",
                padding: "40px",
                borderRadius: "20px",
              }}
            >
              <p className={`${styles.sectionSubText} text-secondary`}></p>

              <p
                className="text-uppercase font-weight-bold"
                style={{ color: "#c3c0d5" }}
              >
                Get in touch
              </p>

              <h2 className={styles.sectionHeadText}>Contact</h2>

              <Form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-4 flex flex-col gap-5"
              >
                <Form.Group className="mb-4">
                  <Form.Control
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Name"
                    className={`bg-white-100 py-2 px-3 text-tertiary rounded-lg outline-none border-none font-medium col-md-12 ${
                      errors.name ? "border-red-500" : ""
                    }`}
                  />
                  {errors.name && (
                    <p style={{ color: "red" }}>Please enter your name *</p>
                  )}
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="Email"
                    className={`bg-white-100 py-2 px-3 text-tertiary rounded-lg outline-none border-none font-medium mb-4 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p style={{ color: "red" }}>Please enter your email *</p>
                  )}
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control
                    as="textarea"
                    rows={7}
                    name="message"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Message"
                    className={`bg-white-100 py-2 px-3 text-tertiary rounded-lg outline-none border-none font-medium mb-4 ${
                      errors.message ? "border-red-500" : ""
                    }`}
                  />
                  {errors.message && (
                    <p style={{ color: "red" }}>Please enter your message *</p>
                  )}
                </Form.Group>

                <Button
                  type="submit"
                  className={`my-custom-button ${loading ? "loading" : ""}`}
                  disabled={loading}
                  style={{ width: "100%", maxWidth: "120px", height: "45px" }}
                >
                  {loading ? "Sending..." : "Let's talk"}
                </Button>
              </Form>
              <br />
              {/* <p
                className="text-uppercase font-weight-bold text-center"
                style={{ color: "#c3c0d5" }}
              >
                I am currently open to work ✅
              </p>
              <br /> */}

              <div className="d-flex justify-content-center">
                <ContactLinks size="2rem" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="footer mt-8 sm:mt-16 md:mt-20 lg:mt-24">
        <p
          className="text-uppercase font-weight-bold text-center"
          style={{ color: "#c3c0d5", marginTop: "60px" }}
        >
          Thank you for visiting my portfolio 🙏
        </p>

        <br />

        <p
          className="text-uppercase font-weight-bold text-center"
          style={{ color: "#c3c0d5" }}
        >
          &copy; 2023 Isha Tamang
        </p>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
