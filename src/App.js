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
import { IndexBisabueloSinContexto } from './components/sin_contextos_react/IndexBisabueloSinContexto';
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
          <Link to="/">0. Lista de tareas</Link>
        </li>
        <li>
          <Link to="/contacto">1. Contacto</Link>
        </li>
        <li>
          <Link to="/localstorage">2. Local Storage</Link>
        </li>
        <li>
          <Link to="/sin-contextos">3. Sin Contextos</Link>
        </li>
        <li>
          <Link to="/con-contextos">3. Con Contextos</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<IndexListaTareas/>}/>
        <Route path="/contacto" element={<ContactoPrueba/>}/>
        <Route path="/localstorage" element={<IndexLocalStorage/>}/>
        <Route path="/sin-contextos" element={<IndexBisabueloSinContexto/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export { App };
