import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import "../styles/toDoAddItem.css";
const ToDoAddItem = () => {
  const { setOpenModal, todos, saveTodos } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    saveTodos([...todos, { completed: false, description: newTodo }]);
    setNewTodo("");
    setOpenModal(false);
  };

  return (
    <form onSubmit={handleSubmit} className="modalForm">
      <label className="titleModalForm">Ingresa nuevo To Do </label>
      <input className="inputModalForm"
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
        value={newTodo}
      />
      <div className="buttonsContainer">
        <button onClick={() => setOpenModal(false)} type="button">
          Cancelar
        </button>
        <button type="submit">Agregar</button>
      </div>
    </form>
  );
};

export { ToDoAddItem };
