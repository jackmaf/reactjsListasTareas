/* eslint-disable import/prefer-default-export */
// Cargas de librerias
import React from 'react';

// Carga de componentes hijos
import { Abuelo } from './Abuelo';

// Carga de otros elementos (CSS, IMAGES)

// DATOS
const bisabuelo = 'Max';
const abuelo = 'Neils';
const padre = 'Morton';
const hermana = 'Ikora';
const hermano = 'Uldren';

function IndexBisabueloSinContexto() {
  return (
    <>
      <h1>Bisabuelo</h1>
      <p>se tiene los nombres de la familia: </p>
      <ol>
        <ul>{`Bisabuelo: ${bisabuelo}`}</ul>
        <ul>{`Abuelo: ${abuelo}`}</ul>
        <ul>{`Padre: ${padre}`}</ul>
        <ul>{`Hermana: ${hermana}`}</ul>
        <ul>{`Hermano: ${hermano}`}</ul>
      </ol>
      <hr />
      <Abuelo
        bisabuelo={bisabuelo}
        abuelo={abuelo}
        padre={padre}
        hermana={hermana}
        hermano={hermano}
      />
    </>
  );
}

export { IndexBisabueloSinContexto };
