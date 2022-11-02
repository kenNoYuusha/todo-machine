import ReactDOM from "react-dom";
import "../styles/modalBackground.css"

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modalBackground">{children}</div>,
    document.getElementById("modal")
  );
};

export { Modal };