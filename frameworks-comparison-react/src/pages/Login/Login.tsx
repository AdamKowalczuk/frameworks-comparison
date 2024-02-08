import React, { useState, ChangeEvent } from "react";
import "./Login.scss";
import Button from "../../components/Button/Button";
import TextButton from "../../components/TextButton/TextButton";
import InputText from "../../components/InputText/InputText";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/auth";
import Loader from "../../components/Loader/Loader";

const Login = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state: any) => state.auth);
  const { message } = useSelector((state: any) => state.message);

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
      <div className="login-page">
        <div className="left-side">
          <h2 className="logo">PostShare</h2>
          <div className="login-header"></div>
          <h4>Log in to your account</h4>

          <p className="normal-md gray-500">Welcome back! Please enter your details</p>
          <form onSubmit={handleLogin} className="login-form">
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
