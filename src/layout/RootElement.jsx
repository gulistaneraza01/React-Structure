import { NavLink, Outlet, useNavigate, useNavigation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function RootElement() {
  const { auth } = useAuth();
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <>
      <header>
        <nav>
          <h2>Logo</h2>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="posts">Posts</NavLink>
            </li>
            {auth?.token ? (
              <li>
                <NavLink to="logout">Logout</NavLink>
              </li>
            ) : (
              <li>
                <NavLink to="login">Login</NavLink>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <hr />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootElement;
