import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "./Header.css";

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="./dishes">
        <button>GET RECOMMENDATION</button>
      </Link>

      <Link to="/workshops">
        <button>PROFILE</button>
      </Link>
      <Link to="/">
        <button>LOGOUT</button>
      </Link>
    </div>
  </div>
);
Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
