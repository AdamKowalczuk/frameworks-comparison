import React, { useState, ChangeEvent } from "react";
import "./Login.scss";
import Button from "../../components/Button/Button";
import TextButton from "../../components/TextButton/TextButton";
import InputText from "../../components/InputText/InputText";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {};

  return (
    <>
      <div className="login-page">
        <div className="left-side">
          <div className="logo">Logo</div>
          <div className="login-header"></div>
          <h4>Log in to your account</h4>

          <p className="normal-md gray-500">
            Welcome back! Please enter your details
          </p>
          <form className="login-form">
            <div className="form-group">
              <InputText
                label="Email"
                placeholder="email"
                onChange={handleEmailChange}
                value={email}
              />
            </div>
            <div className="form-group">
              <InputText
                label="Password"
                placeholder="password"
                onChange={handlePasswordChange}
                value={password}
              />
            </div>
            <Button text="Log in" onClick={handleLogin} />
          </form>
          <div className="signup-link">
            <span>Don’t have an account?</span> <TextButton text="Sign Up" />
          </div>
        </div>
        <div className="right-side">
          {/* <img src="path/to/image.jpg" alt="Background" /> */}
        </div>
      </div>
    </>
  );
};

export default Login;
