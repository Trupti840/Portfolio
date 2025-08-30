// ContactForm.jsx
import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message. Check console for details.");
        }
      );
  };

  return (
    <div className="card" id="contact">
      <div className="section-title">Contact</div>
      <p className="muted-small">
        Reach out for collaboration or to see my projects. I respond promptly.
      </p>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your name" required />
        <input type="email" name="email" placeholder="Your email" required />
        <textarea name="message" placeholder="Message" required />
        <button className="btn" type="submit">
          Send message
        </button>
      </form>
    </div>
  );
}
