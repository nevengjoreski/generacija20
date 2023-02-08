import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../slices/todosSlice";

export const Todos = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  return (
    <div>
      {todos.map((todo) => (
        <li
          style={{ textDecoration: todo.completed ? "line-through" : "" }}
          key={todo.id}
        >
          {todo.title}

          <button
            onClick={() => dispatch(remove(todo.id))}
            style={{ marginLeft: "10px" }}
          >
            X
          </button>
        </li>
      ))}

      <button onClick={() => dispatch(add("New TODO Added"))}>Add</button>
    </div>
  );
};
