// Cargas de librerias
import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from '@mantine/core';

// Carga de componentes hijos

// Custom Hooks

// Carga de otros elementos (CSS, IMAGES)

function ModalDemo({ children, openedModal, setOpenedModal, title}) {
  return ReactDOM.createPortal(
    <Modal
      centered
      opened={openedModal}
      onClose={() => setOpenedModal(false)}
      title={title}>
        {children}
    </Modal>,
    document.getElementById('modal-crear-tareas')
  );
}

export { ModalDemo };
