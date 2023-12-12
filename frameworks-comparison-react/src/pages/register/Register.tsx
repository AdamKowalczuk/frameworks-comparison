import React, { useState, ChangeEvent } from "react";
import "./Register.scss";
// import Button from "../../components/Button/Button";
import TextButton from "../../components/TextButton/TextButton";

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
          <h2>Create a new account</h2>
          <p>Please enter your details</p>
        </div>
        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={handleUsernameChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
          </div>

          {/* <Button text="Sign Up" onClick={handleSignUp} /> */}
        </form>
        <div className="login-link">
          <span>Already have an account? </span>
          <TextButton text="Log in" />
        </div>
      </div>

      <div className="right-side">{/* <img src="path/to/image.jpg" alt="Background" /> */}</div>
    </div>
  );
};

export default Register;
