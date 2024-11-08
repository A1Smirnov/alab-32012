// src/Nav.js
import React from "react";

function Nav({ items }) {
  return (
    <nav aria-label="Navigation" role="navigation">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
