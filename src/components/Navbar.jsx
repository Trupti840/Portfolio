import React from "react";

const Navbar = () => (
  <nav className="bg-dark text-white padding-20">
    <div className="container flex">
      <h1>My Portfolio</h1>
      <ul className="flex">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
