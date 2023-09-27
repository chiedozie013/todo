import React from "react";
import TodoItem from "./TodoItem";

const TodosList = ({ todos, handleChange, delTodo, setUpdate }) => {
  return (
    <ul>
      {todos.map((todo) => {
        const { id } = todo;
        return (
          <TodoItem
            key={id}
            todo={todo}
            handleChange={handleChange}
            delTodo={delTodo}
            setUpdate={setUpdate}
          />
        );
      })}
    </ul>
  );
};

export default TodosList;
