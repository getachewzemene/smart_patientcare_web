import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import AccessDenied from "../pages/access_denied/AccessDenied";

const AdminPrivateRoutes = ({ userInfo }) => {
  const { user: currentUser } = useSelector((state) => state.auth);
  if (userInfo.isLoggedIn) {
    if (currentUser.role === "admin") {
      return <Outlet />;
    }
    return <AccessDenied />;
  } else {
    return <Navigate to="/admin/login" replace />;
  }
};
const DoctorPrivateRoutes = ({ userInfo }) => {
  const { user: currentUser } = useSelector((state) => state.auth);
  if (userInfo.isLoggedIn) {
    if (currentUser.role === "doctor") {
      return <Outlet />;
    }
    return <AccessDenied />;
  } else {
    return <Navigate to="/login" replace />;
  }
};
export { AdminPrivateRoutes, DoctorPrivateRoutes };
