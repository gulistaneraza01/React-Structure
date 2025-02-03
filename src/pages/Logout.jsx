import { useAuth } from "../context/AuthProvider";

function Logout() {
  const { auth, dispatch } = useAuth();
  function handleLogout() {
    dispatch({ type: "REMOVE_TOKEN" });
  }

  return (
    <div>
      <h3>remove Token from auth</h3>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

export default Logout;
