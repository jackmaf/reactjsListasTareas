/* eslint-disable react/react-in-jsx-scope */
// Cargas de librerias
import { useState } from 'react';
// import React from 'react';

// Carga de componentes hijos

// Carga de otros elementos (CSS, IMAGES)

// DATOS
const valorInicial = 'Valor inicial pedro';

function UseState() {
  const [nombre, setNombre] = useState(valorInicial);
  const handleInicial = () => setNombre(valorInicial);

  return (
    <>
      <p>
        Valor variable nombre actual:
        {` ${nombre}`}
      </p>
      <button type='button' onClick={() => setNombre('jack')}>
        Dar valor de jack
      </button>
      <button type='button' onClick={() => setNombre('dani')}>
        Dar valor de dani
      </button>
      <button type='button' onClick={handleInicial}>
        Dar valor de inicial
      </button>
    </>
  );
}

export default UseState;
