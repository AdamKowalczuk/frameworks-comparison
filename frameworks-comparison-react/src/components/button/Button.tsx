import React from "react";
import "./Button.scss";

type ButtonProps = {
  variant?: "primary" | "secondary";
  text: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
};

const Button = ({ text, variant = "primary", onClick, size = "medium" }: ButtonProps) => {
  return (
    <>
      <button className={["custom-button", `custom-button--${variant}`, `custom-button--${size}`].join(" ")}>{text}</button>
    </>
  );
};

export default Button;
