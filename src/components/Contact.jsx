import React from "react";

const Contact = () => (
  <section id="contact" className="bg-dark text-white padding-20">
    <div className="container">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact;
