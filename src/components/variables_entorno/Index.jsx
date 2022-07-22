/* eslint-disable react/no-unescaped-entities */
// Cargas de librerias

// Carga de componentes hijos

// Carga de otros elementos (CSS, IMAGES)

function VariablesEntorno() {
  return (
    <>
      <h1>Variables de entorno</h1>
      <h3>con env-cmd</h3>
      <p>1. primero se instala con: npm install env-cmd</p>
      <br />
      <p>
        2. se crea el archivo .env-cmdrc.json en el root al lado de src con las
        variables o datos que se necesitan ver el de este proyecto
      </p>
      <p>aca usamos 3 variables de entorno de .env-cmdrc.json: </p>
      <p>Nota: las variables deben empezar por convencion con REACT_APP_</p>
      <ol>
        <li>
          variable REACT_APP_URL_API_V1: {process.env.REACT_APP_URL_API_V1}
        </li>
        <li>variable REACT_APP_NOMBRE: {process.env.REACT_APP_NOMBRE}</li>
        <li>variable REACT_APP_NUMERO: {process.env.REACT_APP_NUMERO}</li>
      </ol>
      <br />
      <p>
        3. configuramos script o comandos para correr con las vairables de
        entorno ver package.json ejemplos "dev-start" y "dev-build"
      </p>
      <br />
      <p>4. ahora se corre npm run dev-start</p>
      <h4>LINKs de ayuda:</h4>
      <a href='https://blog.santiagoporras.com/react-variables-entorno/'>
        React.js | Variables de entorno
      </a>
      <br />
      <a href='https://stackoverflow.com/questions/58412399/env-cmd-environment-variables-in-react'>
        Env-cmd environment variables in React
      </a>
      <br />
    </>
  );
}

// eslint-disable-next-line import/prefer-default-export
export { VariablesEntorno };
