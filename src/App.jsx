import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootElement from "./layout/RootElement";
import {
  About,
  Home,
  Posts,
  Post,
  Error,
  Login,
  SignUp,
  Logout,
} from "./pages";
import Required from "./utils/Required";
import { loader } from "./pages/Home";
import { postLoader } from "./pages/Post";
import { PostsLoader } from "./pages/Posts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootElement />}>
      <Route index element={<Home />} loader={loader} />
      <Route path="about" element={<About />} />
      <Route
        path="Posts"
        element={
          <Required>
            <Posts />
          </Required>
        }
        loader={PostsLoader}
      />
      <Route
        path="Posts/:id"
        element={
          <Required>
            <Post />
          </Required>
        }
        loader={postLoader}
      />
      <Route path="login" element={<Login />} />
      <Route path="logout" element={<Logout />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
