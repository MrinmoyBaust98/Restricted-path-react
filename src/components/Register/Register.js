import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleAlreadyRegister = () => {
    navigate("/login");
  };
  return (
    <div>
      <div>
        <p>
          Email:
          <input type="email" name="email" />
        </p>
        <p>
          Password:
          <input type="password" name="password" />
        </p>
      </div>
      <button>Register</button>
      <br />
      <br />
      <button onClick={handleAlreadyRegister}>Already Registered?</button>
    </div>
  );
};

export default Register;
