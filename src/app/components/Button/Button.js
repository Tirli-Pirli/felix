import React from "react";
import { Link } from "react-router-dom"

const Button = ({ children, ...props }) => {
  const Tag = props.to ? Link : 'button';
  return <Tag className="button is-primary has-text-weight-bold" {...props}>{children}</Tag>;
};

export default Button;
