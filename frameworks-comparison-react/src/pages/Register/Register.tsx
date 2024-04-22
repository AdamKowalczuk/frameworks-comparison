import { useState, ChangeEvent } from "react";
import "../login/Login.scss";
import Button from "../../components/button/Button";
import TextButton from "../../components/text-button/TextButton";
import InputText from "../../components/input-text/InputText";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/auth";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";

const Register = () => {
  let navigate = useNavigate();

  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const dispatch: any = useDispatch();

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignUp = (e: any) => {
    e.preventDefault();
    setLoading(true);

    dispatch(register(userName, email, password))
      .then(() => {
        setLoading(true);

        setTimeout(() => navigate("/home"), 3000);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div className="auth-page">
      <div className="left-side">
        <h2 className="logo">PostShare</h2>
        <div className="auth-header">
          <h4>Create a new account</h4>
          <p className="normal-md gray-500">Please enter your details</p>
        </div>
        <form onSubmit={handleSignUp} className="auth-form">
          <div className="form-group">
            <InputText label="Username" placeholder="Username" onChange={handleUsernameChange} value={userName} />
          </div>
          <div className="form-group">
            <InputText label="Email" placeholder="Email" onChange={handleEmailChange} value={email} />
          </div>
          <div className="form-group">
            <InputText type="password" label="Password" placeholder="Password" onChange={handlePasswordChange} value={password} />
          </div>

          <Button onClick={handleSignUp} type="submit">
            {loading ? (
              <div className="loader-wrapper">
                <Loader />
                Loading...
              </div>
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>
        <div className="login-link">
          <span>Already have an account? </span>
          <Link to="/sign-in">
            <TextButton text="Log in" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
