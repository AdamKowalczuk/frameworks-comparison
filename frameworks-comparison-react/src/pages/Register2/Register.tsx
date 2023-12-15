import React, { useState, ChangeEvent } from "react";
import "./Register.scss";
import Button from "../../components/Button/Button";
import TextButton from "../../components/TextButton/TextButton";
import InputText from "../../components/InputText/InputText";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignUp = () => {};

  return (
    <div className="signup-page">
      <div className="left-side">
        <div className="logo">Logo</div>
        <div className="signup-header">
          <h4>Create a new account</h4>
          <p className="normal-md gray-500">Please enter your details</p>
        </div>
        <form className="signup-form">
          <div className="form-group">
            <InputText
              label="Name"
              placeholder="name"
              onChange={handleNameChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <InputText
              label="Username"
              placeholder="username"
              onChange={handleUsernameChange}
              value={username}
            />
          </div>
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

          <Button text="Sign Up" onClick={handleSignUp} />
        </form>
        <div className="login-link">
          <span>Already have an account? </span>
          <TextButton text="Log in" />
        </div>
      </div>

      <div className="right-side">
        {/* <img src="path/to/image.jpg" alt="Background" /> */}
      </div>
    </div>
  );
};

export default Register;
