import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function Login() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("a"));
  const { dispatch } = useAuth();
  const { state } = useLocation();
  const toredirect = state?.toredirect || "/";
  function handleClick() {
    dispatch({ type: "ADD_TOKEN" });
    navigate(toredirect, { replace: true });
  }

  return (
    <div>
      <h2>add token to auth</h2>
      <button onClick={handleClick}>login</button>
    </div>
  );
}

export default Login;
