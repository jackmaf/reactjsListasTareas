/* eslint-disable import/prefer-default-export */
// Cargas de librerias
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

// Carga de componentes hijos

// Carga de otros elementos (CSS, IMAGES)
const id = 777;
const nombre = 'Jack';
const seccion = 'pruebas';

function IndexRRouterDom() {
  return (
    <>
      <p>Ejemplo de envio de parametros con React Router DOM</p>
      <ul>
        <li>
          <Link to={`/react-router-dom-params/${id}`}>Enviando parametro ID</Link>
        </li>
        <li>
          <Link to={`/react-router-dom-params/${nombre}`}>Enviando parametro NOMBRE</Link>
        </li>
        <li>
          <Link to={`/react-router-dom-params/${seccion}`}>Enviando parametro SECCION</Link>
        </li>
      </ul>
      <p>Ejemplo de sub rutas revisa en App.js</p>
      <ul>
        <li>
          <Link to="/react-router-dom/hola">Ingresando a /react-router-dom/hola</Link>
        </li>
        <li>
          <Link to="/react-router-dom/chao">Ingresando a /react-router-dom/chao</Link>
        </li>
      </ul>
      <p>debajo tenemos el componente Outlet</p>
      <Outlet />
      <h1>Documentación</h1>
      <a href="https://reactrouter.com/docs/en/v6/getting-started/installation">Document Router DOM V6 Oficial Pages</a>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/7xRVnmWcTE8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      <iframe width="560" height="315" src="https://www.youtube.com/embed/iPNt12IdbCU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      <h1>Otras Opciones</h1>
      <a href="https://github.com/molefrog/wouter">Wouter(Recomendado)</a>
      <br />
      <a href="https://reach.tech/router/">Reach Router(NO Recomendado dejaron de trabajarle)</a>
    </>
  );
}

export { IndexRRouterDom };
