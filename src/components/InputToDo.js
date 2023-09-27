import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const InputTodo = ({ addNewTodo }) => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addNewTodo(value);
      setValue("");
      setMessage("");
    } else {
      setMessage("Please add items");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add Todo..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input-text"
        />
        <button type="submit" className="input-submit">
          <FaPlusCircle
            style={{
              color: "#5e5e5e",
              fontSize: "20px",
              marginTop: "2px",
            }}
          />
        </button>
      </form>
      <span className="submit-warning"> {message}</span>
    </>
  );
};

export default InputTodo;
