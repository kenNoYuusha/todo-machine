import { createContext, useState } from "react";
import { useLocalStorage } from "../js/useLocalStorage";

const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todoSearch, setTodoSearch] = useState("");
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);


  const [openModal, setOpenModal] = useState(false)

  const totalTodos = todos.length;
  const completedTodos = todos.filter(({ completed }) => completed).length;

  let filteredTodos = [];

  if (todoSearch.length >= 1) {
    filteredTodos = todos.filter(({ description }) => {
      const todoDescription = description.toLowerCase();
      const todoSearchValue = todoSearch.toLowerCase();

      return todoDescription.includes(todoSearchValue);
    });
  } else {
    filteredTodos = todos;
  }

  //delete Todo

  const deleteTodo = (textIdentifier) => {
    saveTodos(todos.filter(({ description }) => description != textIdentifier));
  };

  //change todostate

  const changeTodoState = (textIdentifier) => {
    saveTodos(
      todos.map((item) => {
        if (item.description == textIdentifier) {
          item.completed = !item.completed;

          return item;
        }

        return item;
      })
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todoSearch,
        setTodoSearch,
        loading,
        error,
        totalTodos,
        completedTodos,
        filteredTodos,
        deleteTodo,
        changeTodoState,
        openModal,
        setOpenModal,
        todos,
        saveTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoContextProvider };
