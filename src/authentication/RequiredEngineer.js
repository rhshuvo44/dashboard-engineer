import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useEngineer from "../hooks/useEngineer";

const RequiredEngineer = () => {
  const [engineer] = useEngineer();

  if (!engineer) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default RequiredEngineer;
