import { useEffect, useState } from "react";

import ListTodo from "./ListTodo";
import CreateTodo from "./CreateTodo";

const Todo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos?_limit=10";

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const deleteTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const markAsCompleted = (id) => {
    // kako da go dobijam statusot na konkretniot todo

    // da se pominat site todo
    // da se najde konkretiot prema ID
    // da se promeni propertito completed vo obratno od toa sto go imame

    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const updateTodoTitle = (id, newTitle) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = newTitle;
        }
        return todo;
      })
    );
  };

  return (
    <div>
      <CreateTodo setTodos={setTodos} />
      <ListTodo
        todos={todos}
        deleteTodo={deleteTodo}
        markAsCompleted={markAsCompleted}
        updateTodoTitle={updateTodoTitle}
      />
    </div>
  );
};

export default Todo;
