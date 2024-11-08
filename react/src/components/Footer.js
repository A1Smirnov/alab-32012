// src/Footer.js
import React from "react";
import Nav from "./Nav";

function Footer() {
  return (
    <footer>
      <Nav items={["Home", "Women's", "Men's", "On the Street", "The Catwalk", "AdWatch", "About", "Tips"]} />
      <p>&copy; 2024 Alexey Smirnov, Copied in study purpose</p>
    </footer>
  );
}

export default Footer;
