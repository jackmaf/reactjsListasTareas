// Cargas de librerias
import React from 'react';

// Carga de componentes hijos
import { Hermana } from './Hermana';
import { Hermano } from './Hermano';

// Carga de otros elementos (CSS, IMAGES)

function Padre({bisabuelo, abuelo, padre, hermana, hermano}){
  return (
    <>
      <h1>Padre</h1>
      <p>se tiene los nombres de la familia: </p>
      <ol>
        <ul>Bisabuelo: {bisabuelo}</ul>
        <ul>Abuelo: {abuelo}</ul>
        <ul>Padre: {padre}</ul>
        <ul>Hermana: {hermana}</ul>
        <ul>Hermano: {hermano}</ul>
      </ol>
      <hr/>
      <Hermana
        bisabuelo={bisabuelo}
        abuelo={abuelo}
        padre={padre}
        hermana={hermana}
        hermano={hermano}
      />
      <hr/>
      <Hermano
        bisabuelo={bisabuelo}
        abuelo={abuelo}
        padre={padre}
        hermana={hermana}
        hermano={hermano}
      />
    </>
  );
}

export { Padre };