import React, { Component } from "react";
import "./Header.css";
import logo from "../assets/images/logo.png";

export default class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} alt="Beleaf" />
      </header>
    );
  }
}
