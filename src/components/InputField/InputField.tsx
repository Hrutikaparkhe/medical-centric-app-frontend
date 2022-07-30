import React, { useState } from "react";
import "./input.scss";
type Props = {
  title?: string;
  inputText?: string;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  customStyleClass?: string;
  placeholder?: string;
  type?: string;
  setValue?: any;
  Values?: any;
  errormsg?: string;
};
const InputField = ({
  title,
  inputText,
  disabled,
  customStyleClass,
  placeholder,
  type,
  setValue,
  Values,
  errormsg,
}: Props) => {
  const [error, setError] = useState(true);
  const emailValidator = (inputText: string) => {
    console.log(inputText);

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
      console.log("valid");
      setError(false);
      return true;
    } else {
      console.log("Invalid");
      return false;
    }
  };
  const validate = (e: any) => {
    emailValidator(e.target.value);
    setValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <label className="input-label">{title}</label>
      <input
        className={`default-input-style ${customStyleClass}`}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        onChange={validate}
        value={Values}
      ></input>
    { error && <div className="input-err-msg">{errormsg}</div>}
    </div>
  );
};

export default InputField;
