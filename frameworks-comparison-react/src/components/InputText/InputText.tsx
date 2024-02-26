import React, { ChangeEvent } from "react";
import "./InputText.scss";

interface InputTextProps {
  label?: string;
  placeholder?: string;
  size?: "small" | "medium" | "large";
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type?: string;
}

const InputText = ({ label, placeholder, size = "medium", onChange, value, type = "text" }: InputTextProps) => {
  return (
    <div className="input-container">
      {label && <label className={["input-label", `input-label--${size}`].join(" ")}>{label}</label>}
      <input type={type} placeholder={placeholder} onChange={onChange} value={value} className={["input-text", `input-text--${size}`].join(" ")} />
    </div>
  );
};

export default InputText;
