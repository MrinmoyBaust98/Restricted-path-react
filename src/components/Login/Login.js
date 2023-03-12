import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleRegisterClick = () => {
    navigate("/register");
  };

  // distructcharing
  const { signInWithGogle } = useAuth();
  const redirect_url = location?.state?.from || "/home";

  // custom function for retur previous path
  const handlePreviousPath = () => {
    signInWithGogle().then((result) => {
      navigate(redirect_url);
    });
  };
  return (
    <div>
      <br />
      <button onClick={handlePreviousPath}>SignIn with Google</button>
      <br />
      <br />
      <button onClick={handleRegisterClick}>register</button>
    </div>
  );
};

export default Login;
