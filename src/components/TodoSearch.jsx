import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import "../styles/todoSearch.css";
export const TodoSearch = () => {
  const { setTodoSearch } = useContext(TodoContext);

  return (
    <input
      onChange={(e) => {
        setTodoSearch(e.target.value);
      }}
      className="todoSearch"
      placeholder="Search some todo"
    />
  );
};
