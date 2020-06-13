import React from "react";
import "./index.css";

export const Button = ({ label, className, type, onClick }) => {
  return <button type={type} onClick={onClick} className={className || "signin"}>{label}</button>;
};
