// Cargas de librerias
import React from 'react';
import ReactDOM from 'react-dom';

// Carga de componentes hijos

// Custom Hooks

// Carga de otros elementos (CSS, IMAGES)
import './estilos/modal.css';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="Modal">
      {children}
    </div>,
    document.getElementById('modal-crear-tareas')
  );
}

export { Modal };
