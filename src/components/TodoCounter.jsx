import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import "../styles/todoCounter.css";
export const TodoCounter = () => {
  const { totalTodos, completedTodos } = useContext(TodoContext);

  return (
    <h2 className="todoCounter">
      Has completado {completedTodos} de {totalTodos} Todo's
    </h2>
  );
};
