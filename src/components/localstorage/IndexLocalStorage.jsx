/* eslint-disable import/prefer-default-export */
/* eslint-disable react/no-unescaped-entities */
// Cargas de librerias
import React from 'react';
import { Code } from '@mantine/core';
// Carga de componentes hijos
// Carga de otros elementos (CSS, IMAGES)

function IndexLocalStorage() {
  return (
    <>
      <h1>LOCALSTORAGE</h1>
      <h3>1. JSON.stringify()</h3>
      <p>convertir a string variables objectos u etc</p>
      <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify">Documentación Mozilla</a>
      <p>ejemplo:</p>
      <Code>JSON.stringify(['jack', 'luis']);</Code>
      <p>resultado:</p>
      <Code>'["jack", "luis"]'</Code>
      <h3>2. JSON.parse()</h3>
      <p>convertir de string a variables objectos u etc</p>
      <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse">Documentación Mozilla</a>
      <p>ejemplo:</p>
      <Code>JSON.parse('["jack", "luis"]');</Code>
      <p>resultado:</p>
      <Code>['jack', 'luis']</Code>
      <h3>3. CREAR LOCALSTORAGE</h3>
      <p>crear un elemento de localstorage</p>
      <a href="https://developer.mozilla.org/es/docs/Web/API/Window/localStorage">Documentación Mozilla</a>
      <p>ejemplo:</p>
      <Code>localStorage.setItem('llave', 'valor');</Code>
      <br />
      <Code>
        localStorage.setItem('tareas', JSON.stringify(['almorzar', 'trabajar', 'dormir']));
      </Code>
      <h3>4. TOMAR DATOS LOCALSTORAGE</h3>
      <p>tomar un elemento de localstorage</p>
      <p>ejemplo:</p>
      <Code>let a = JSON.parse(localStorage.getItem('llave'));</Code>
      <br />
      <Code>let b = JSON.parse(localStorage.getItem('tareas'));</Code>
      <h3>5. ELIMINAR UN DATO LOCALSTORAGE</h3>
      <p>La sintaxis para eliminar el ítem almacenado en localStorage es la siguiente:</p>
      <p>ejemplo:</p>
      <Code>let a = localStorage.removeItem('llave');</Code>
      <br />
      <Code>let b = localStorage.removeItem('tareas');</Code>
      <h3>6. ELIMINAR TODOS LOS DATOS DE LOCALSTORAGE</h3>
      <p>La sintaxis para eliminar todos los ítems almacenados en localStorage es la siguiente:</p>
      <p>ejemplo:</p>
      <Code>localStorage.clear();</Code>
    </>
  );
}

export { IndexLocalStorage };
