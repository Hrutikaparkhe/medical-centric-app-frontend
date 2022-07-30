import React from "react";
import Button from "../../components/ButtonComponent/Button";
import InputField from "../../components/InputField/InputField";
import "./loginpage.scss";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  //   const history = useHistory();
  const navigate = useNavigate();
  const onSubmit = (route: any) => {
    navigate(route);
  };
  return (
    <div className="login-container">
      <div className="login-form-container">
        <h3 className="login-header">Login Here!!</h3>
        <form className="login-form">
          <div className="login-username">
            <InputField title="Username" placeholder="enter your email here" />
          </div>
          <div className="login-password">
            <InputField
              title="Password"
              placeholder="enter your password"
              type="password"
            />
          </div>
          <div className="login-button">
            <Button text="Sign in" customStyleClass="custom-login-btn" />
          </div>
          <div className="register-link">
            <span>
              <label className="login-text">Dont have account?</label>
              <button
                className="register-here-btn"
                onClick={() => {
                  onSubmit("/register");
                }}
              >
                Register here!
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
