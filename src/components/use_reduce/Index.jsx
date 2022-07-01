/* eslint-disable no-unused-vars */
// Cargas de librerias
import { useReducer } from 'react';
import { reducerBasic, reducerSwitch, reducer } from './UseReducer';

// Carga de componentes hijos

// Carga de otros elementos (CSS, IMAGES)

// DATOS
// ESTADO INICIAL O BASICO
const valorInicial = {
  loading: false,
  error: false,
  value: '',
};

function EstadosCompuestosConUseReduce() {
  // 1. FORMA MAS BASICA SEGUNDA MAS USADA
  // const [estado, dispatch] = useReducer(reducerBasic, valorInicial);
  // 2. FORMA MAS USADA
  const [estado, dispatch] = useReducer(reducerSwitch, valorInicial);
  // 3. FORMA ELEGANTE PERO MENOS USADA (RECOMENDADA)
  // const [estado, dispatch] = useReducer(reducer, valorInicial);

  const handleError = () => dispatch({ type: 'ERROR' });
  const handleLoading = () => dispatch({ type: 'LOADING' });
  const handleValue = (auxValue) => dispatch({
    type: 'WRITE',
    payload: auxValue,
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

export default EstadosCompuestosConUseReduce;
