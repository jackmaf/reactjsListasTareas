// Cargas de librerias
import React, {useContext} from 'react';

// Carga de contextos
import { FamiliaContexto } from './context/ProviderGeneral';

// Carga de componentes hijos

// Carga de otros elementos (CSS, IMAGES)

const Hermana = () => {
  // DATOS tomados del contexto
  const {bisabuelo, abuelo, padre, hermana, hermano, setHermana} = useContext(FamiliaContexto);
  return (
    <>
      <h1>Hermana</h1>
      <p>se tiene los nombres de la familia: </p>
      <ol>
        <ul>Bisabuelo: {bisabuelo}</ul>
        <ul>Abuelo: {abuelo}</ul>
        <ul>Padre: {padre}</ul>
        <ul>Hermana: {hermana}</ul>
        <ul>Hermano: {hermano}</ul>
      </ol>
    </>
  );
}

export { Hermana };