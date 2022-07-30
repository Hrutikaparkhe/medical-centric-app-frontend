import React from "react";
import "./buttons.scss";

type Props = {
  text?: string;
  customStyleClass?: string;
  onClick?: () => void;
  disabled?: boolean;
 
};
const Button = ({ text, customStyleClass, onClick, disabled }: Props) => {
  return (
    <button
      className={`btn-common-style ${customStyleClass}`}
      onClick={onClick}
      disabled={disabled}
     type='submit'
    >
      {text}
    </button>
  );
};

export default Button;
