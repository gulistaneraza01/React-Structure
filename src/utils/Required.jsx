import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function Required({ children }) {
  const { auth, dispatch } = useAuth();
  const { pathname } = useLocation();
  if (auth.token) {
    return <>{children}</>;
  }
  return <Navigate to="/login?a=3" state={{ toredirect: pathname }} replace />;
}

export default Required;
