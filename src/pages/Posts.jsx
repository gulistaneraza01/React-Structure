import axios from "axios";
import DisplayTodo from "../components/DisplayTodo";
import useFetch from "../hooks/useFetch";
import { useLoaderData } from "react-router-dom";

export async function PostsLoader() {
  // const url = "https://jsonplaceholder.typicode.com/posts";
  // try {
  //   const { data } = await axios(url);
  //   return { data: data, errorMsg: null };
  // } catch (e) {
  //   return { data: null, errorMsg: e.message };
  // }
  return null;
}

function Posts() {
  // const { data, errorMsg } = useLoaderData();
  const url = "https://jsonplaceholder.typicode.com/posts";
  const { data, isError, isLoading } = useFetch(url);
  if (isLoading) {
    return <h2>loading...</h2>;
  }
  if (isError) {
    return <h2>{isError}</h2>;
  }

  return (
    <div>
      {data &&
        data.map((post) => {
          return <DisplayTodo key={post.id} {...post} />;
        })}
    </div>
  );
}

export default Posts;
