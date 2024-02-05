import React, { ChangeEvent } from "react";
import "./InputText.scss";

interface InputTextProps {
  label?: string;
  placeholder?: string;
  size?: "small" | "medium" | "large";
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const InputText = ({ label, placeholder, size = "medium", onChange }: InputTextProps) => {
  return (
    <div className="input-container">
      {label && <label className={["input-label", `input-label--${size}`].join(" ")}>{label}</label>}
      <input placeholder={placeholder} onChange={onChange} className={["input-text", `input-text--${size}`].join(" ")} />
    </div>
  );
};

export default InputText;
