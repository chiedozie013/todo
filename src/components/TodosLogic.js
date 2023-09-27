import React, { useEffect, useState } from "react";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import { v4 as uuidv4 } from "uuid";

const TodosLogic = () => {
  const [todos, setTodos] = useState(getInitialTodos());

  const handleChange = (id) => {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  };

  const delTodo = (id) => {
    const newTodos = [...todos.filter((todo) => todo.id !== id)];
    setTodos(newTodos);
  };

  const addNewTodo = (value) => {
    const newTodo = {
      id: uuidv4(),
      title: value,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedValue, id) => {
    const editedItems = todos.map((todo) => {
      if (todo.id === id) {
        todo.title = updatedValue;
      }
      return todo;
    });
    setTodos(editedItems);
  };

  useEffect(() => {
    // Storing todo items
    const items = JSON.stringify(todos);
    localStorage.setItem("todos", items);
  }, [todos]);

  function getInitialTodos() {
    // getting stored items
    return JSON.parse(localStorage.getItem("todos")) || [];
  }

  return (
    <div>
      <InputTodo addNewTodo={addNewTodo} />
      <TodosList
        todos={todos}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    </div>
  );
};

export default TodosLogic;
