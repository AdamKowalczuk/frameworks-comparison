import React from "react";
import "./Button.scss";

type ButtonProps = {
  variant?: "primary" | "outlined";
  text: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
};

const Button = ({ text, variant = "primary", onClick, size = "medium", iconLeft, iconRight }: ButtonProps) => {
  return (
    <button className={["custom-button", `custom-button--${variant}`, `custom-button--${size}`].join(" ")} onClick={onClick}>
      {iconLeft}
      {text}
      {iconRight}
    </button>
  );
};

export default Button;
