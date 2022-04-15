import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to={`/`} style={{ textDecoration: "none", color: "inherit" }}>
        <h1>Countries App</h1>
      </Link>
    </div>
  );
};

export default Header;
