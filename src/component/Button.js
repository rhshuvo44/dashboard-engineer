import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, path }) => {
  return (
    <Link to={path} className="btn btn-primary capitalize text-xs">
      {children}
    </Link>
  );
};

export default Button;
