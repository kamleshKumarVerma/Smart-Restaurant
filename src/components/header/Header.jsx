import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <ul className="logo-section">
          <li>
            <a href=""> LOGO </a>
          </li>
        </ul>
        <ul className="link-section">
          <li>
            <a href=""> About </a>
          </li>
          <li>
            <a href=""> Contact </a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
