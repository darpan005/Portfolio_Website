import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./Contact.css";

// 1. Create a free account at https://www.emailjs.com
// 2. Create an Email Service + Template, then paste the 3 IDs below.
const SERVICE_ID = "service_nhso0ae";
const TEMPLATE_ID = "template_8zmbei4";
const PUBLIC_KEY = "jeo-Z6jEEvT8X6AJ4";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(""); // "sending" | "success" | "error"

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        setStatus("success");
        form.current.reset();
      },
      () => {
        setStatus("error");
      }
    );
  };

  return (
    <section id="contact">
      <h2 className="section-title">
        Get In <span>Touch</span>
      </h2>

      <motion.form
        ref={form}
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <input type="text" name="user_name" placeholder="Name" required />
        <input type="email" name="user_email" placeholder="Email" required />
        <textarea name="message" rows="5" placeholder="Message" required />

        <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send"}
        </button>

        {status === "success" && (
          <p className="form-note success">Message sent! I'll get back to you soon.</p>
        )}
        {status === "error" && (
          <p className="form-note error">Something went wrong. Please try again.</p>
        )}
      </motion.form>
    </section>
  );
}

export default Contact;
