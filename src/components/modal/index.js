import React from 'react';
import './style.css';

function Modal({isOpen, onClose, title, children}) {
  if (!isOpen) return null;

  return (
    <div className="add">
      <div>
        <div id="header">
          <p>{title}</p>
          <button onClick={onClose}>X</button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
