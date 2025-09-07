import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  allowRoles: string[];
  children?: React.ReactNode; // Optional if using nested routing
}

const ProtectedRoute = ({ allowRoles, children }: ProtectedRouteProps) => {
  const role = localStorage.getItem("role");
  console.log(role);

  if (!role) {
    return <Navigate to="/login" replace />;
  }

  if (!allowRoles.includes(role)) {
    return <Navigate to="/login" replace />;
  }

  // ✅ Role allowed
  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;
