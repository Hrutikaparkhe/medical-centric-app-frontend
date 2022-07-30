import React from "react";
import { useState } from "react";
import Button from "../../components/ButtonComponent/Button";
import InputField from "../../components/InputField/InputField";
import "./registerpage.scss";
import "../Login/loginpage.scss";
import { registerUserData } from "../../utils/services/UserData.service";
const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPaswword, setRepeatpassword] = useState("");
  const handleSubmit = () => {
    const obj = { email, password, repeatPaswword };
    if (password === repeatPaswword) {
      registerUserData(obj);
    } else {
      alert("passowrd invalid");
    }
  };

  const handleChangeName = (value: string) => {
    setEmail(value);
    console.log("%", value);
  };
  const handleChangePassword = (value: string) => {
    setPassword(value);
    console.log("%|%", password);
  };
  const handleChangeRepeatPassword = (value: string) => {
    setRepeatpassword(value);
    console.log("%%%%", repeatPaswword);
  };
  return (
    <div className="login-container">
      <div className="login-form-container">
        <h3 className="login-header">Register Here!!</h3>
        <div className="login-form">
          <div className="login-username">
            <InputField
              title="Username"
              placeholder="enter your email here"
              setValue={handleChangeName}
              errormsg="invalid input!!"
            />
          </div>
          <div className="login-password">
            <InputField
              title="Password"
              placeholder="enter your password"
              type="password"
              setValue={handleChangePassword}
            />
          </div>
          <div className="login-password">
            <InputField
              title="Repeat Password"
              placeholder="repeat your password"
              type="password"
              setValue={handleChangeRepeatPassword}
            />
          </div>
          <div className="login-button">
            <Button
              text="Sign up"
              customStyleClass="custom-login-btn"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
