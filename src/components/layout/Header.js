import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <nav className="nav-wrapper blue lighten-2">
      <div className="container">
        <a href="#!" className="left brand-logo  image-responsive">
          {props.branding}
        </a>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/">
              <i className="fas fa-home" /> Home
            </Link>
          </li>
          <li>
            <Link to="/addContact">
              <i className="fas fa-plus" /> Add Contact
            </Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
Header.defaultProps = {
  branding: "Site Logo"
};
Header.propTypes = {
  branding: PropTypes.string.isRequired
};
export default Header;
