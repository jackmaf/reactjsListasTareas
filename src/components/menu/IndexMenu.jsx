/* eslint-disable jsx-a11y/label-has-associated-control */
// Cargas de librerias
import React from 'react';
import { NavLink } from 'react-router-dom';
// Carga de componentes hijos

// Carga de otros elementos (CSS, IMAGES)
import './styles/menu.css';

function IndexMenu() {
  return (
    <>
      <input type="checkbox" id="abrir-cerrar" name="abrir-cerrar" value="" />
      <label htmlFor="abrir-cerrar">
        &#9776;
        <span className="abrir">Abrir</span>
        <span className="cerrar">Cerrar</span>
      </label>
      <div id="Menu" className="Menu">
        <ul className="Menu__ul">
          <li className="Menu__li">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'Menu__Link Menu__Link--active' : 'Menu__Link')}
            >
              0. Lista de tareas
            </NavLink>
          </li>
          <li className="Menu__li">
            <NavLink
              to="/react-router-dom"
              className={({ isActive }) => (isActive ? 'Menu__Link Menu__Link--active' : 'Menu__Link')}
            >
              1. React Router DOM
            </NavLink>
          </li>
          <li className="Menu__li">
            <NavLink
              to="/localstorage"
              className={({ isActive }) => (isActive ? 'Menu__Link Menu__Link--active' : 'Menu__Link')}
            >
              2. Local Storage
            </NavLink>
          </li>
          <li className="Menu__li">
            <NavLink
              to="/sin-contextos"
              className={({ isActive }) => (isActive ? 'Menu__Link Menu__Link--active' : 'Menu__Link')}
            >
              3. SIN Contextos
            </NavLink>
          </li>
          <li className="Menu__li">
            <NavLink
              to="/con-contextos"
              className={({ isActive }) => (isActive ? 'Menu__Link Menu__Link--active' : 'Menu__Link')}
            >
              3. CON Contextos
            </NavLink>
          </li>
          <li className="Menu__li">
            <NavLink
              to="/subir-a-github-pages"
              className={({ isActive }) => (isActive ? 'Menu__Link Menu__Link--active' : 'Menu__Link')}
            >
              4. Subir a Github Pages
            </NavLink>
          </li>
          <li className="Menu__li">
            <NavLink
              to="/con-composicion"
              className={({ isActive }) => (isActive ? 'Menu__Link Menu__Link--active' : 'Menu__Link')}
            >
              5. Patron de composicion
            </NavLink>
          </li>
          <li className="Menu__li">
            <NavLink
              to="/otros"
              className={({ isActive }) => (isActive ? 'Menu__Link Menu__Link--active' : 'Menu__Link')}
            >
              6. Extensiones otros...
            </NavLink>
          </li>
          <li className="Menu__li">
            <NavLink
              to="/usestate"
              className={({ isActive }) => (isActive ? 'Menu__Link Menu__Link--active' : 'Menu__Link')}
            >
              7. Hook useState
            </NavLink>
          </li>
          <li className="Menu__li">
            <NavLink
              to="/useeffect"
              className={({ isActive }) => (isActive ? 'Menu__Link Menu__Link--active' : 'Menu__Link')}
            >
              8. Hook useEffect
            </NavLink>
          </li>
          <li className="Menu__li">
            <NavLink
              to="/estados-compuestos"
              className={({ isActive }) => (isActive ? 'Menu__Link Menu__Link--active' : 'Menu__Link')}
            >
              9. Estados Compuestos
            </NavLink>
          </li>
          <li className="Menu__li">
            <NavLink
              to="/estados-compuestos-con-use-reduce"
              className={({ isActive }) => (isActive ? 'Menu__Link Menu__Link--active' : 'Menu__Link')}
            >
              10. Estados Compuestos con Reducer y useReduce
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default IndexMenu;
