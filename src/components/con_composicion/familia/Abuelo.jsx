// Cargas de librerias
import React from 'react';

// Carga de otros elementos (CSS, IMAGES)

// eslint-disable-next-line react/prop-types
function Abuelo({ children }) {
  return (
    <>
      { children }
      <br />
    </>
  );
}

// eslint-disable-next-line import/prefer-default-export
export { Abuelo };
