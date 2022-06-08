// Cargas de librerias
import React, {useContext} from 'react';

// Carga de contextos
import { FamiliaContexto } from './context/ProviderGeneral';

// Carga de componentes hijos
import { Abuelo } from './Abuelo';

// Carga de otros elementos (CSS, IMAGES)

function Bisabuelo(){
  // DATOS tomados del contexto
  const { bisabuelo, abuelo, padre, hermana, hermano, setBisabuelo } = useContext(FamiliaContexto);

  return (
    <>
      <h1>Documentación:</h1>
      <ol>
        <li>
          <a href="https://es.reactjs.org/docs/context.html">Pagina Oficial Context</a>
          <p>Context está diseñado para compartir datos que pueden considerarse “globales” para un árbol de componentes en React, como el usuario autenticado actual, el tema o el idioma preferido</p>
        </li>
        <li>
          <a href="https://es.reactjs.org/docs/composition-vs-inheritance.html">Complementar tema con (Composición vs. herencia)</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=0RYui50muvI">Video (Codificandolo) (CONTEXT API , USO DE USE CONTEXT EN REACT)</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=LV9qFupFxUQ&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=79">Video (jonmircha) (Curso React: 79. Context API - Haciendo una APP con THEME 🌞🌙 Dark/Light CON Context)</a>
        </li>
      </ol>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/0RYui50muvI?start=467"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>

        <hr/>
        <h1>Bisabuelo</h1>
        <p>se tiene los nombres de la familia: </p>
        <ol>
          <ul>Bisabuelo: {bisabuelo}</ul>
          <ul>Abuelo: {abuelo}</ul>
          <ul>Padre: {padre}</ul>
          <ul>Hermana: {hermana}</ul>
          <ul>Hermano: {hermano}</ul>
        </ol>
        <hr/>
        <Abuelo/>

    </>
  );
}

export { Bisabuelo };
