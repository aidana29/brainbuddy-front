import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = (): any => {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate replace to="/" />;
};

export default PrivateRoutes;
