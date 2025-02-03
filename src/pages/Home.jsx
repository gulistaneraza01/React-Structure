import { useLoaderData } from "react-router-dom";

export function loader() {
  const url = "https://jsonplaceholder.typicode.com/users";
  return 5;
}

function Home() {
  const data = useLoaderData();
  return <div>Home</div>;
}

export default Home;
