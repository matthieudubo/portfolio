import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="home" smooth={true} duration={1000}>
          <div className="logo-md" />
        </Link>
      </div>
      <div className="navbar__menu">
        <div className="navbar__menu-about">
          <Link to="about" smooth={true} duration={1000}>
            &Agrave; Propos
          </Link>
        </div>
        <div className="navbar__menu-projects">
          <Link to="projects" smooth={true} duration={1000}>
            Projets
          </Link>
        </div>
        <div className="navbar__menu-contact">
          <Link to="contact" smooth={true} duration={1000}>
            Contact
          </Link>
        </div>
      </div>
      <div className="navbar__networks">
        <a
          href="https://www.linkedin.com/in/matthieu-dubo-a14223221/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="linkedin" />
        </a>
        <a
          href="https://github.com/matthieudubo"
          target="_blank"
          rel="noreferrer"
        >
          <div className="github" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
