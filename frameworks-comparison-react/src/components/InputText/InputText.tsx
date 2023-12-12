import React, { ChangeEvent } from "react";

interface InputTextProps {
  label?: string;
  size?: "small" | "medium" | "large";
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const InputText = ({ label, size = "medium", onChange }: InputTextProps) => {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input className="input-text" />
    </div>
  );
};

export default InputText;
