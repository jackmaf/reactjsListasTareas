// Cargas de librerias
import React from 'react';

// Carga de otros elementos (CSS, IMAGES)

// eslint-disable-next-line react/prop-types
function Hermana({ children }) {
  return (
    <>
      { children }
      <p>estamos en el componente hermana =D</p>
    </>
  );
}

// eslint-disable-next-line import/prefer-default-export
export { Hermana };
