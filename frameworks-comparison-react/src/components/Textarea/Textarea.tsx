import React, { ChangeEvent } from "react";
import "./Textarea.scss";

type TextareaProps = {
  label?: string;
  value: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  size?: "small" | "medium" | "large";
};

const Textarea = ({ label, value, placeholder, onChange, size = "medium" }: TextareaProps) => {
  return (
    <div className="textarea-container">
      {label && <label className={["textarea-label", `textarea-label--${size}`].join(" ")}>{label}</label>}
      <textarea className={["textarea-text", `textarea-text--${size}`].join(" ")} value={value} placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default Textarea;
