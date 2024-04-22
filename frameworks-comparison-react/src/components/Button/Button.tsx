import "./Button.scss";

type ButtonProps = {
  variant?: "primary" | "outlined";
  text?: string;
  onClick?: any;
  size?: "small" | "medium" | "large";
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  children?: any;
  type?: "submit" | "reset" | "button";
};

const Button = ({ text, variant = "primary", onClick, size = "medium", iconLeft, iconRight, children, type = "button" }: ButtonProps) => {
  return (
    <button type={type} className={["custom-button", `custom-button--${variant}`, `custom-button--${size}`].join(" ")} onClick={onClick}>
      {children}
      {iconLeft}
      {text}
      {iconRight}
    </button>
  );
};

export default Button;
