import React from "react";

const Services = () => (
  <section id="services" className="bg-dark text-white padding-20">
    <div className="container">
      <h2>Our Services</h2>
      <div className="flex">
        <div className="service-card">
          <h3>Web Design</h3>
          <p>Creating visually appealing and user-friendly websites.</p>
        </div>
        <div className="service-card">
          <h3>SEO Optimization</h3>
          <p>Improving your website's visibility on search engines.</p>
        </div>
        <div className="service-card">
          <h3>Digital Marketing</h3>
          <p>Strategies to enhance your online presence and reach.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
