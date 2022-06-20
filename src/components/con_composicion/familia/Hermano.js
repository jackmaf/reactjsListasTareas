// Cargas de librerias
import React from 'react';

// Carga de componentes hijos

// Carga de otros elementos (CSS, IMAGES)

function Hermano({ children }){
  return (
    <>
      { children }
      <p>estamos en el componente hermano =D</p>
    </>
  );
}

export { Hermano };