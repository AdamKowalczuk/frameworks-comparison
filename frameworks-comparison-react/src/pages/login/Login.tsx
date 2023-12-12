import React, { useState, ChangeEvent } from "react";
import "./Login.scss";
import Button from "../../components/Button/Button";
import TextButton from "../../components/TextButton/TextButton";

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
          <h2>Log in to your account</h2>
          <p>Welcome back! Please enter your details</p>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" value={email} onChange={handleEmailChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={handlePasswordChange} />
            </div>
            <Button text="Log in" onClick={handleLogin} />
          </form>
          <div className="signup-link">
            <span>Don’t have an account?</span> <TextButton text="Sign Up" />
          </div>
        </div>
        <div className="right-side">{/* <img src="path/to/image.jpg" alt="Background" /> */}</div>
      </div>
    </>
  );
};

export default Login;
