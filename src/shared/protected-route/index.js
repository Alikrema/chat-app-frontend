import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoadingComponent from "../../components/common/Loader";
import routes from "../constants/routes";

const { login } = routes;

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);

  if (loading) {
    return <LoadingComponent />;
  }
  if (!user) {
    return <Navigate to={login} />;
  }

  return children;
};

export default ProtectedRoute;
