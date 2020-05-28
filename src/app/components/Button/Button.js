import React from "react";

const Button = ({ children }) => {
  return <a href className="button is-primary has-text-weight-bold">{children}</a>;
};

export default Button;
