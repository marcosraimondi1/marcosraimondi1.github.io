import React from "react";

export default function Navigation() {
  return (
    <div>
      {/* <!-- Navigation--> */}
      <a className="menu-toggle rounded" href="#">
        <i className="fas fa-bars"></i>
      </a>
      <nav id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <a href="#page-top">Marcos Raimondi</a>
          </li>
          <li className="sidebar-nav-item">
            <a href="#page-top">Home</a>
          </li>
          <li className="sidebar-nav-item">
            <a href="#about">About</a>
          </li>
          <li className="sidebar-nav-item">
            <a href="#services">Services</a>
          </li>
          <li className="sidebar-nav-item">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="sidebar-nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
