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
import IndexFamilia from './components/con_contextos_react/IndexFamilia';
import { GithubPages } from './components/githubpages';
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
          <Link to="/sin-contextos">3. SIN Contextos</Link>
        </li>
        <li>
          <Link to="/con-contextos">3. CON Contextos</Link>
        </li>
        <li>
          <Link to="/subir-a-github-pages">4. Subir a Github Pages</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<IndexListaTareas/>}/>
        <Route path="/contacto" element={<ContactoPrueba/>}/>
        <Route path="/localstorage" element={<IndexLocalStorage/>}/>
        <Route path="/sin-contextos" element={<IndexBisabueloSinContexto/>}/>
        <Route path="/con-contextos" element={<IndexFamilia/>}/>
        <Route path="/subir-a-github-pages" element={<GithubPages/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export { App };
