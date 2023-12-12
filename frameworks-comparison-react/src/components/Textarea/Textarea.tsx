import React, { ChangeEvent } from "react";

type TextareaProps = {
  value: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea = ({ value, placeholder, onChange }: TextareaProps) => {
  return <textarea value={value} placeholder={placeholder} onChange={onChange} />;
};

export default Textarea;
