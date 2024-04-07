import React, { useState, ChangeEvent } from "react";
import "./Login.scss";
import Button from "../../components/button/Button";
import TextButton from "../../components/text-button/TextButton";
import InputText from "../../components/input-text/InputText";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/auth";
import Loader from "../../components/loader/Loader";

const Login = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state: any) => state.auth);
  // const { message } = useSelector((state: any) => state.message);

  const dispatch: any = useDispatch();
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: any) => {
    e.preventDefault();

    setLoading(true);

    dispatch(login(email, password))
      .then(() => {
        navigate("/");
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="auth-page">
        <div className="left-side">
          <h2 className="logo">PostShare</h2>
          <div className="auth-header">
            <h4>Log in to your account</h4>

            <p className="normal-md gray-500">Welcome back! Please enter your details</p>
          </div>
          <form onSubmit={handleLogin} className="auth-form">
            <div className="form-group">
              <InputText label="Email" placeholder="Email" onChange={handleEmailChange} value={email} />
            </div>
            <div className="form-group">
              <InputText type="password" label="Password" placeholder="Password" onChange={handlePasswordChange} value={password} />
            </div>

            <Button onClick={handleLogin} type="submit">
              {loading ? (
                <div className="loader-wrapper">
                  <Loader />
                  Loading...
                </div>
              ) : (
                "Log in"
              )}
            </Button>
          </form>
          <div className="signup-link">
            <span>Don’t have an account? </span>
            <Link to="/sign-up">
              <TextButton text="Sign Up" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
