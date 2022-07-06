// Cargas de librerias

// Carga de componentes hijos
import { Hermana } from './Hermana';
import { Hermano } from './Hermano';

// Carga de otros elementos (CSS, IMAGES)

function Padre({ bisabuelo, abuelo, padre, hermana, hermano }) {
  return (
    <>
      <h1>Padre</h1>
      <p>se tiene los nombres de la familia: </p>
      <ol>
        <ul>
          Bisabuelo:
          {bisabuelo}
        </ul>
        <ul>
          Abuelo:
          {abuelo}
        </ul>
        <ul>
          Padre:
          {padre}
        </ul>
        <ul>
          Hermana:
          {hermana}
        </ul>
        <ul>
          Hermano:
          {hermano}
        </ul>
      </ol>
      <hr />
      <Hermana>
        <h1>Hermana</h1>
        <p>se tiene los nombres de la familia: </p>
        <ol>
          <ul>
            Bisabuelo:
            {bisabuelo}
          </ul>
          <ul>
            Abuelo:
            {abuelo}
          </ul>
          <ul>
            Padre:
            {padre}
          </ul>
          <ul>
            Hermana:
            {hermana}
          </ul>
          <ul>
            Hermano:
            {hermano}
          </ul>
        </ol>
      </Hermana>
      <hr />
      <Hermano>
        <h1>Hermano</h1>
        <p>se tiene los nombres de la familia: </p>
        <ol>
          <ul>
            Bisabuelo:
            {bisabuelo}
          </ul>
          <ul>
            Abuelo:
            {abuelo}
          </ul>
          <ul>
            Padre:
            {padre}
          </ul>
          <ul>
            Hermana:
            {hermana}
          </ul>
          <ul>
            Hermano:
            {hermano}
          </ul>
        </ol>
      </Hermano>
    </>
  );
}

export { Padre };
