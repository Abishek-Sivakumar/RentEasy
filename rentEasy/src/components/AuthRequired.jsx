import React from "react";
import { Navigate, Outlet } from "react-router";

export default function AuthRequired() {
  const authenticated = false;
  return authenticated ? <Outlet /> : <Navigate to="/login" />;
}
