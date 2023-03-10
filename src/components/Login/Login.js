import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const handleRegisterClick = () => {
    navigate("/register");
  };
  // distructcharing
  const { signInWithGogle } = useAuth();
  return (
    <div>
      <br />
      <button onClick={signInWithGogle}>SignIn with Google</button>
      <br />
      <br />
      <button onClick={handleRegisterClick}>register</button>
    </div>
  );
};

export default Login;
