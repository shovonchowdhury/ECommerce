import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function CheckAuth({ children }) {
  const { isAuthenticated, user, isLoading } = useSelector(
    (state) => state.auth
  );
  const location = useLocation();
  console.log(isAuthenticated, user, location.pathname);

  if (isLoading) return <div>Loading...</div>;

  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    return <Navigate to={"/auth/login"}></Navigate>;
  }

  if (
    isAuthenticated &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/register"))
  ) {
    if (user?.role === "admin") return <Navigate to={"/admin/dashboard"} />;
    else return <Navigate to={"/shop/home"} />;
  }

  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }

  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("shop")
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;
}
