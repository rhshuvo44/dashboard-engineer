import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../layout/Loading";
const RequireAuth = () => {
  const [user, loading] = useAuthState(auth);

  const location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequireAuth;
