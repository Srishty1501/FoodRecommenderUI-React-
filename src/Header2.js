import { Link } from "gatsby";

import React from "react";
import "../src/Header2.css";
const Header2 = () => (
  <div className="head">
    <Link to="/HomePage">
      <button>Back</button>
    </Link>
  </div>
);
export default Header2;
