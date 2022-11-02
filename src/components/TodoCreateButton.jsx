import "../styles/todoCreateButton.css";
export const TodoCreateButton = ({ setOpenModal }) => {
  return (
    <button onClick={() => { setOpenModal((value)=> !value)}} className="createButton">
      +
    </button>
  );
};
