// Cargas de librerias
import React from 'react';
import {
  Link,
  Outlet,
} from 'react-router-dom';
// Carga de componentes hijos

// Carga de otros elementos (CSS, IMAGES)

function ContainerComposicion() {
  return (
    <>
      <h1>Con Composición Ejemplos</h1>
      <ul>
        <li>
          <Link to="/con-composicion/familia">1. Ejemplo Familia</Link>
        </li>
        <li>
          <Link to="/con-composicion/lista-tareas">3. Lista Tareas</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

// eslint-disable-next-line import/prefer-default-export
export { ContainerComposicion };
