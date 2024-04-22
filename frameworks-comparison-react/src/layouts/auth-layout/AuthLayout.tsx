import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./AuthLayout.scss";
import AuthImage from "../../assets/images/auth-image.png";

const AuthLayout = () => {
  const { isLoggedIn } = useSelector((state: any) => {
    return state.auth;
  });

  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/home" />
      ) : (
        <>
          <div className="auth-layout">
            <Outlet />
          </div>
          <div className="auth-image">
            <img src={AuthImage} alt="logo" />
          </div>
        </>
      )}
    </>
  );
};

export default AuthLayout;
