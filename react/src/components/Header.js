// src/Header.js
import React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <header>
      <h1>Sartre's List</h1>
      <h2>Better-Dressed People</h2>
      <Nav items={["Women's", "Men's", "On the Street", "The Catwalk", "AdWatch", "About"]} />
    </header>
  );
}

export default Header;
