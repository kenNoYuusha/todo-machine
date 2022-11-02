import { useContext, useState } from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoCreateButton } from "./components/TodoCreateButton";
import { TodoContext } from "./context/TodoContext";
import { Modal } from "./portals/Modal";
import { ToDoAddItem } from "./components/ToDoAddItem";

function App() {
  const { error, loading, filteredTodos, openModal, setOpenModal } = useContext(TodoContext);

  return (
    <main className="main">
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Desesperate, hubo un error</p>}
        {loading && <p>Estamos cargando, no desesperes</p>}
        {!loading && !filteredTodos.length && <p>Crea tu primer TO DO!</p>}

        {filteredTodos.map(({ description, completed }, index) => (
          <TodoItem
            key={description}
            description={description}
            completed={completed}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
            <ToDoAddItem />
        </Modal>
      )}

      <TodoCreateButton setOpenModal={setOpenModal} />
    </main>
  );
}

export default App;
