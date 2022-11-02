import "../styles/todoList.css"
export const TodoList = ({ children }) => {
  return (
    <section className="list-container">
      <ul className="todoList">{children}</ul>
    </section>
  );
};
