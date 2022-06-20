// Cargas de librerias
import React from 'react';
import { NavLink } from "react-router-dom";
// Carga de componentes hijos

// Carga de otros elementos (CSS, IMAGES)
import './styles/menu.css'

function IndexMenu() {
  return (
    <>
      <input type="checkbox" id="abrir-cerrar" name="abrir-cerrar" value=""/>
      <label for="abrir-cerrar">&#9776; <span className="abrir">Abrir</span><span className="cerrar">Cerrar</span></label>
      <div id="Menu" className="Menu">
        <ul className="Menu__ul">
          <li className="Menu__li">
            <NavLink to="/"
              className={({isActive}) => isActive ? 'Menu__Link Menu__Link--active' : 'Menu__Link'}>
              0. Lista de tareas
            </NavLink>
          </li>
          <li className="Menu__li">
            <NavLink to="/react-router-dom"
              className={({isActive}) => isActive ? 'Menu__Link Menu__Link--active' : 'Menu__Link'}>
              1. React Router DOM
            </NavLink>
          </li>
          <li className="Menu__li">
            <NavLink 
              to="/localstorage"
              className={({isActive}) => isActive ? 'Menu__Link Menu__Link--active' : 'Menu__Link'}>
              2. Local Storage
            </NavLink>
          </li>
          <li className="Menu__li">
            <NavLink
              to="/sin-contextos"
              className={({isActive}) => isActive ? 'Menu__Link Menu__Link--active' : 'Menu__Link'}>
              3. SIN Contextos
            </NavLink>
          </li>
          <li className="Menu__li">
            <NavLink
              to="/con-contextos"
              className={({isActive}) => isActive ? 'Menu__Link Menu__Link--active' : 'Menu__Link'}>
              3. CON Contextos
            </NavLink>
          </li>
          <li className="Menu__li">
            <NavLink
              to="/subir-a-github-pages"
              className={({isActive}) => isActive ? 'Menu__Link Menu__Link--active' : 'Menu__Link'}>
              4. Subir a Github Pages
            </NavLink>
          </li>
          <li className="Menu__li">
            <NavLink
              to="/con-composicion"
              className={({isActive}) => isActive ? 'Menu__Link Menu__Link--active' : 'Menu__Link'}>
              5. Patron de composicion
            </NavLink>
          </li>
        </ul>
    </div>
    {/* <div id="contenido">
        <p><a href="http://www.campusmvp.es" target="_blank">
            <img src="logo-campusmvp-150.png" alt="campusMVP" style="border-width: 0px" /></a></p>
        <h1>Un men� lateral</h1>
      

    </div> */}
    </>
  );
}

export default IndexMenu;
