import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useManager from "../hooks/useManager";

const RequiredManager = () => {
  const [manager] = useManager();
  
  if (!manager) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default RequiredManager;
