import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import DetailTodo from "../components/DetailTodo";

export async function postLoader({ params }) {
  const { id } = params;
  console.log(id);

  return 3;
}

function Post() {
  const { id } = useParams();
  const url = `https://jsonplaceholder.typicode.com/posts/${id}s`;
  const { data, isError, isLoading } = useFetch(url);
  if (isLoading) {
    return <h2>loading.......</h2>;
  }
  if (isError) {
    return <h2>{isError} </h2>;
  }
  return <div>{data && <DetailTodo {...data} />}</div>;
}

export default Post;
