// Cargas de librerias
import { useState } from 'react';
// import React from 'react';

// Carga de componentes hijos

// Carga de otros elementos (CSS, IMAGES)

// DATOS
const valorInicial = {
  loading: false,
  error: false,
  value: '',
};

function EstadosCompuestos() {
  const [estado, setEstado] = useState(valorInicial);

  const handleError = () => setEstado({
    loading: false,
    error: true,
    value: '',
  });

  const handleLoading = () => setEstado({
    loading: true,
    error: false,
    value: '',
  });

  const handleValue = (auxValue) => setEstado({
    ...valorInicial, // Spread Operator
    value: auxValue,
  });

  return (
    <>
      <p>Ver codigo fuente para entenderlo mejor</p>
      <p>Valor estados:</p>
      <ol>
        <li>
          <b>Loading:</b>
          {estado.loading ? ' true' : ' false'}
        </li>
        <li>
          <b>Error:</b>
          {estado.error ? ' true' : ' false'}
        </li>
        <li>
          <b>Value:</b>
          {estado.value === '' ? ' VACIO' : ` ${estado.value}`}
        </li>
      </ol>
      <button
        type="button"
        onClick={handleError}
      >
        Dar Error
      </button>
      <button
        type="button"
        onClick={handleLoading}
      >
        Dar Loading
      </button>
      <button
        type="button"
        onClick={() => handleValue('hola')}
      >
        Dar valor hola
      </button>
      {estado.loading && !estado.error
      && (<h1>Cargandoo....</h1>)}
      {!estado.loading && estado.error
      && (<h1>ERROR</h1>)}
      {!estado.loading && !estado.error && estado.value !== ''
      && (<h1>{estado.value}</h1>)}
    </>
  );
}

export default EstadosCompuestos;
