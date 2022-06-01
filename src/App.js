// Cargas de librerias
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
// Carga de componentes hijos
import { IndexListaTareas } from './components/lista_tareas/IndexListaTareas';
import { IndexContacto } from './components/contacto/IndexContacto';
import { IndexLocalStorage } from './components/localstorage/IndexLocalStorage';
// Carga de otros elementos (CSS, IMAGES)

function ContactoPrueba(){
  return (
    <div>
      <h1>Entraste al contacto</h1>
      <IndexContacto/>      
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Lista de tareas</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/localstorage">Local Storage</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<IndexListaTareas/>}/>
        <Route path="/contacto" element={<ContactoPrueba/>}/>
        <Route path="/localstorage" element={<IndexLocalStorage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export { App };
