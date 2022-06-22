// Cargas de librerias
import React from 'react';
import {
  Link,
  Outlet,
} from 'react-router-dom';
// Carga de componentes hijos

// Carga de otros elementos (CSS, IMAGES)
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';

function IndexRenderProps() {
  return (
    <>
      <h3>Render Props</h3>
      <p>
        Antes de estudiar las render props debes conocer la composición de componentes.
        Las renders props vienen a ayudar a hacer una composición de componentes más limpia.
        Seguimos con todas las ventajas de usar composición de componentes.
        A partir de ahora podemos decir que tenemos 2 tipos de props: las props
        normales que reciben un valor o variable y por otro lado tenemos las props
        que contienen una función. Estas que contienen una función son las que nos interesan.
        Esta función devuelve un componente o un elemento que pudiera tener
        anidados más elementos y componentes.
        La sintaxis es la siguiente:
      </p>
      <br />
      <img src={img1} alt="uno de props render" />
      <p>
        La propiedad render(la cual puede tener cualquier otro nombre) es nuestra render prop,
        porque contiene una función que al ser llamada devuelve un componente. Entonces cumple
        todas las condiciones y solo falta llamarla desde el componente que la contiene:
      </p>
      <img src={img2} alt="dos de props render" />
      <p>
        Entonces podemos interpretar que las render props le dicen al componentes que
        renderizan(cual va a ser su contenido) Otra forma de hacer esto es con las render
        functions y lo que cambia es que se declaran dentro del componente:
      </p>
      <img src={img3} alt="tres de props render" />
      <p>
        Y para acceder a lo que está dentro del componentes simplemente usamos props.children:
      </p>
      <img src={img4} alt="cuatro de props render" />
      <p>
        Es prácticamente lo que hicimos con la composición de componentes y la propiedad children.
        ¡Usen render props y mejoren sus composiciones amigos 😃 !
      </p>
      <h1>Ejemplos:</h1>
      <ul>
        <li>
          <Link to="/con-composicion/index-render-props/variables">1. Props normales que reciben un valor o variable</Link>
        </li>
        <li>
          <Link to="/con-composicion/index-render-props/funciones">2. Props que contienen una función</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

// eslint-disable-next-line import/prefer-default-export
export { IndexRenderProps };
