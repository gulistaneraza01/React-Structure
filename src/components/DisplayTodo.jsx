import { Link } from "react-router-dom";

function DisplayTodo({ id, title }) {
  return (
    <div>
      <h3>
        <Link to={id.toString()}>
          {id} : {title}
        </Link>
      </h3>
    </div>
  );
}

export default DisplayTodo;
