import React, { useState } from "react";
import styles from "../styles/TodoItem.module.css";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { useAuthContext } from "../context/AuthContext";

const TodoItem = ({ todo, handleChange, delTodo, setUpdate }) => {
  const { user } = useAuthContext();

  const { id, title, completed } = todo;
  const [editing, setEditing] = useState(false);
  const [updateInput, setUpdateInput] = useState(title);

  const editItems = () => {
    setEditing(true);
  };

  const stopEdit = (e) => {
    if (e.key === "Enter") {
      setUpdate(updateInput, id);
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleChange(id)}
        />
        {user && (
          <button onClick={editItems}>
            <AiFillEdit style={{ color: "#5e5e5e", fontSize: "16px" }} />
          </button>
        )}
        <button onClick={() => delTodo(id)}>
          <FaTrash style={{ color: "#5e5e5e", fontSize: "16px" }} />
        </button>
        <span style={completed ? completedStyle : null}>{updateInput}</span>
      </div>
      <input
        type="text"
        value={updateInput}
        className={styles.textInput}
        style={editMode}
        onChange={(e) => setUpdateInput(e.target.value)}
        onKeyDown={stopEdit}
      />
    </li>
  );
};

export default TodoItem;
