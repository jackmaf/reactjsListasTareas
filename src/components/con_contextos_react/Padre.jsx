/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
// Cargas de librerias
import React, { useContext } from 'react';

// Carga de contextos
import { FamiliaContexto } from './context/ProviderGeneral';

// Carga de componentes hijos
import { Hermana } from './Hermana';
import { Hermano } from './Hermano';

// Carga de otros elementos (CSS, IMAGES)

function Padre() {
  // DATOS tomados del contexto
  const { bisabuelo, abuelo, padre, hermana, hermano, setAbuelo } =
    useContext(FamiliaContexto);
  return (
    <>
      <h1>Padre</h1>
      <p>se tiene los nombres de la familia: </p>
      <ol>
        <ul>{`Bisabuelo: ${bisabuelo}`}</ul>
        <ul>{`Abuelo: ${abuelo}`}</ul>
        <ul>{`Padre: ${padre}`}</ul>
        <ul>{`Hermana: ${hermana}`}</ul>
        <ul>{`Hermano: ${hermano}`}</ul>
      </ol>
      <hr />
      <Hermana />
      <hr />
      <Hermano />
    </>
  );
}

export { Padre };
