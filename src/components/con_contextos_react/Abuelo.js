// Cargas de librerias
import React, {useContext} from 'react';

// Carga de contextos
import { FamiliaContexto } from './context/ProviderGeneral';

// Carga de componentes hijos
import { Padre } from './Padre';

// Carga de otros elementos (CSS, IMAGES)

const Abuelo = () => {
  // DATOS tomados del contexto
  const {bisabuelo, abuelo, padre, hermana, hermano, setAbuelo} = useContext(FamiliaContexto);

  return (
    <>
      <h1>Abuelo</h1>
      <p>se tiene los nombres de la familia: </p>
      <ol>
        <ul>Bisabuelo: {bisabuelo}</ul>
        <ul>Abuelo: {abuelo}</ul>
        <ul>Padre: {padre}</ul>
        <ul>Hermana: {hermana}</ul>
        <ul>Hermano: {hermano}</ul>
      </ol>
      <hr/>
      <Padre/>
    </>
  );
}

export { Abuelo };