// Cargas de librerias
import React from 'react';

// Carga de componentes hijos
import { Padre } from './Padre';

// Carga de otros elementos (CSS, IMAGES)

function Abuelo({bisabuelo, abuelo, padre, hermana, hermano}){
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
      <Padre
        bisabuelo={bisabuelo}
        abuelo={abuelo}
        padre={padre}
        hermana={hermana}
        hermano={hermano}
      />
    </>
  );
}

export { Abuelo };