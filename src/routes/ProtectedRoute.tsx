import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  return localStorage.getItem('access_token') ? children : <Navigate to='/auth/login' replace />;
}

export default ProtectedRoute;
