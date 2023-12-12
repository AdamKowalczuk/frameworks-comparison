import React from "react";

type TextButtonProps = {
  text: string;
  onClick?: () => void;
};

const TextButton = ({ text, onClick }: TextButtonProps) => {
  return (
    <span className="text-button" onClick={onClick}>
      {text}
    </span>
  );
};

export default TextButton;
