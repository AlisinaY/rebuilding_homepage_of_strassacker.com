import React from "react";
import ReactDOM from "react-dom";

import "./Modal.css";

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="first">Hello I am Ali Sina</div>
      <div className="second">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default Modal;
