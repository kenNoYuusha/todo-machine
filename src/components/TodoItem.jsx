import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import "../styles/todoItem.css";
import { FiSquare, FiCheckSquare, FiTrash2 } from "react-icons/fi";
export const TodoItem = ({ description, completed }) => {
  const { deleteTodo, changeTodoState } = useContext(TodoContext);

  return (
    <li className="todoItem">
      <span
        onClick={() => {
          changeTodoState(description);
        }}
        className={`todoItem__check ${completed && "todoItem__check--checked"}`}
      >
        {completed ? <FiCheckSquare /> : <FiSquare />}
      </span>
      <p className={completed ? "todoCompleted" : ""}>{description}</p>
      <span
        onClick={() => {
          deleteTodo(description);
        }}
        className="todoItem__delete"
      >
        <FiTrash2 />
      </span>
    </li>
  );
};
