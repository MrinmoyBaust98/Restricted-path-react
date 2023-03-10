import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = () => {
  const { user } = useAuth();
  return user.email ? <Outlet /> : <Navigate replace to="/login"></Navigate>;
};

export default PrivateRoute;
