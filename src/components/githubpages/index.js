// Cargas de librerias
import React from 'react';
import { Code } from '@mantine/core';

// Carga de componentes hijos

// Carga de otros elementos (CSS, IMAGES)

// DATOS

function GithubPages(){
  return (
    <>
      <h1>SUBIR APP DE REACT A GITHUB PAGES</h1>
      <h3>1. Agregar a tus dependencias paquete gh-pages</h3>
      <p>agregar a tus dependencias(dependencies) del package.json el paquete (gh-pages) que nos servira para pasar nuestro codigo compilado estatico</p>
      <h3>Yarn</h3>
      <a href="https://yarnpkg.com/package/gh-pages">Documentación Yarn(Recomendado)</a>
      <p>Comando:</p>
      <Code>yarn add gh-pages</Code>
      <h3>NPM</h3>
      <a href="https://www.npmjs.com/package/gh-pages">Documentación NPM</a>
      <p>Comando:</p>
      <Code>npm install gh-pages --save-dev</Code> 
      <h3>2. agrega una nueva regla en tu package.js</h3>
      <p>ahora ingresamos al package.json y agregamos la siguiente regla: (Nota para mas informacion revisa el package.json de este proyecto)</p>
      <Code>
        "homepage": "https://USERNAME.github.io/NOMBRE-REPOSITORIO"
      </Code>
      <h3>3. Crear reglas y prereglas en package.json en scripts: </h3>
      <p>recordar que la palabra PRE es una regla que hace que se ejecute primero esa regla antes de la regla con ese nombre<br/>
      recordar que la palabra POST es una regla que hace que se ejecute despues de la regla con ese nombre<br/>
      (Nota para mas informacion revisa el package.json de este proyecto)</p>
      <p>Primera regla a ejecutar(comando para compilar la app que a su vez llama la regla de "build": "react-scripts build")</p>
      <code>"predeploy": "npm run build"</code>
      <p>Segunda regla a ejecutar(comando que prepara la app para githupages)</p>
      <code>"deploy": "gh-pages -d build"</code>
      <h3>4. Correr comando:</h3>
      <code>npm run deploy</code>
      <p> el comando anterior lo que hace es correr generar la carpeta build hermana o al mismo nivel de public, src y node_modules</p>
      <h3>5. se sube a github (git push origin master)</h3>
    </>
  );
}

export { GithubPages };
