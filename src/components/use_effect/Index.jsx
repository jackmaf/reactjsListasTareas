// Cargas de librerias
import { useState, useEffect } from 'react';
// import React from 'react';

// Carga de componentes hijos

// Carga de otros elementos (CSS, IMAGES)

// DATOS
const valorInicial = 'Valor inicial pedro';

function UseState() {
  const [nombre, setNombre] = useState(valorInicial);
  // const a = 12;

  const handleInicial = () => setNombre(valorInicial);

  // este hook solo se ejecuta cuando se declara he inicializa todo lo del metodo UseState linea 13
  // y se rendera su contenido
  useEffect(() => {
    // crtrl + start + L o ctrl + option + L (Mac) subrayando lo que se quiere consoliar
    // Nota sale 2 veces al principio este console por que react
    // toma la inicializacion como un cambio
    // eslint-disable-next-line no-console
    console.log('🚀 ~ file: Index.jsx ~ line 23 ~ UseState ~ nombre', nombre);
    // si no se manda segundo parametro se ejecuta despues de pintar el render y al haber
    // cambios en alguna variable de useState
    // });
    // se  ejecuta una sola vez cuando se pinta el render solo al principio
  }, []);
  // se ejecuta al principio de pintar el render y ademas solo cuando el estado
  // nombre cambie o se llame el setNombre
  // }, [nombre]);
  return (
    <>
      <p>Ver codigo fuente para entenderlo mejor</p>
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
