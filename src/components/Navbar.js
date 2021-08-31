import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <header className="navbar">
        <h1>Gordon Hui</h1>
        <Link
          to="/about"
          onClick={function () {
            document.getElementById('aboutSection').scrollIntoView();
          }}
        >
          About
        </Link>
        <Link
          to="/skills"
          onClick={function () {
            document.getElementById('skillSection').scrollIntoView();
          }}
        >
          Skills
        </Link>
        <Link
          to="/projects"
          onClick={function () {
            document.getElementById('projectSection').scrollIntoView();
          }}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          onClick={function () {
            document.getElementById('contactSection').scrollIntoView();
          }}
        >
          Contact
        </Link>
      </header>
    </div>
  );
};

export default Navbar;
