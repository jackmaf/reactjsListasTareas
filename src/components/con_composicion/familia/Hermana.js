// Cargas de librerias
import React from 'react';

// Carga de componentes hijos

// Carga de otros elementos (CSS, IMAGES)

function Hermana({ children }){
  return (
    <>
      { children }
      <p>estamos en el componente hermana :D</p>
    </>
  );
}

export { Hermana };