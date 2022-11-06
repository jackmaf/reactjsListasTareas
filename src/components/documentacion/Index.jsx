// Cargas de librerias

// Carga de componentes hijos

// Carga de otros elementos (CSS, IMAGES)

// DATOS
/**
 * Variable usada para xxxxx
 * @type {String|Number}
 */
const EDAD = '23';
/**
 * Variable usada para xxxxx
 * @type {String}
 */
const NOMBRE = 'Jack';
/**
 * Variable usada para xxxxx
 * @type {Number}
 */
const VALOR = 1000000;
/**
 * Variable usada para xxxxx
 * @type {Boolean}
 */
const ESTA_ACTIVO = true;
/**
 * Variable usada para xxxxx
 * @type {Array<Number>}
 */
const HISTORICO = [1, 2, 3, 4];
/**
 * Variable usada para xxxxx
 * @type {Array<String>}
 */
const HISTORICO_1 = ['1', 'hola', 'strings', 'quack'];
/**
 * Variable usada para xxxxx
 * @type {Array<Number|String>}
 */
const HISTORICO_2 = [1, 'hola', 'strings', 'quack', 9];
/**
 * Variable usada para xxxxx
 * @type {Array}
 */
const HISTORICO_3 = [
  1,
  'hola',
  'strings',
  'quack',
  9,
  [1, 3],
  { nombre: 'prueba' }
];
/**
 * Variable usada para xxxxx
 * @type {Object}
 */
const GATO = {
  nombre: 'Malu',
  edad: '2',
  estaViva: true,
  historico: [1, 2, 3]
};

/**
 * @typedef {Object} gato
 * @property {String} nombre
 * @property {String|Number} edad
 * @property {Boolean} estaViva
 * @property {Array<Number|String>} historico
 */

/**
 * @type {gato}
 */
const GATO_1 = {
  nombre: 'Malu',
  edad: '2',
  estaViva: true,
  historico: [1, 2, 3]
};
/**
 * Descripcion de funcion ejemplo con jsdoc
 * @param {*} edad Campo usado para mostrar la edad
 * @param {String} nombre Campo usado para guardar el nombre del usuario
 * @param {Number} valor Campo usado para calcular cuanto dinero tiene el usuario
 * @param {Boolean} estaActivo Campo usado para saber si el usuario esta activo
 * @param {Array} historico Campo usado para guardar otros datos
 * @param {Object} gato Campo usado para guardar un objecto gato
 * @param {*} [opcional] Los corchetes hacen que se advierta que es un valor opcional
 * @returns {String} retorna un strign con todos los datos ingresados
 */
const funcionEjemplo = (
  edad = '??',
  nombre = 'SIN NOMBRE',
  valor = 0,
  estaActivo = false,
  historico = [],
  gato = {
    edad: '??',
    nombre: 'SIN NOMBRE',
    valor: 0,
    estaActivo: false,
    opcional: '??'
  },
  opcional = '??'
) => {
  return `el ${nombre} con ${edad} y ${valor} esta ${
    estaActivo ? 'activo' : 'inactivo'
  } tiene ${historico.length} historicos y este objecto ${JSON.stringify(
    gato
  )} y existe este dato opcional ${opcional}`;
};

/**
 * Descripcion de funcion ejemplo con jsdoc
 * @param {*} opcional dato opcional solo para explicacion
 * @returns {void} no devuelve nada por que solo imprime en consola
 */
const funcionEjemplo2 = (opcional = 'sin dato') => {
  console.log(
    '🚀 ~ file: Index.jsx ~ line 45 ~ funcionEjemplo2 ~ opcional',
    opcional
  );
};

/**
 * Descripcion de funcion ejemplo con jsdoc
 * @param {String|Number} edad el string|number significa que acepta cualquiera de esos dos tipos de datos
 * @param {String} nombre Campo usado para guardar el nombre del usuario
 * @param {Number} valor Campo usado para calcular cuanto dinero tiene el usuario
 * @param {Boolean} estaActivo Campo usado para saber si el usuario esta activo
 * @param {Array} historico Campo usado para guardar otros datos
 * @param {Object} gato Campo usado para guardar un objecto gato
 * @param {*} [opcional] Los corchetes hacen que se advierta que es un valor opcional
 * @returns {String} retorna un strign con todos los datos ingresados
 */
const funcionEjemplo3 = (
  edad,
  nombre,
  valor,
  estaActivo,
  historico,
  gato,
  opcional = '??'
) => {
  return `el ${nombre} con ${edad} y ${valor} esta ${
    estaActivo ? 'activo' : 'inactivo'
  } tiene ${historico.length} historicos y este objecto ${JSON.stringify(
    gato
  )} y existe este dato opcional ${opcional}`;
};
function Documentacion() {
  return (
    <>
      <h2>Extension instalada visual studio</h2>
      <p>Complete JSDoc Tags</p>
      <hr />
      <h2>
        llamado de metodos pasa por encima de los metodos en vscode y mira como
        quedo la documentacion:
      </h2>
      {funcionEjemplo()}
      {funcionEjemplo2()}
      {funcionEjemplo3(12, 'JACK', 1000000, true, [1, 2, 3, 4], {})}
      {JSON.stringify(EDAD)}
      {JSON.stringify(NOMBRE)}
      {JSON.stringify(VALOR)}
      {JSON.stringify(ESTA_ACTIVO)}
      {JSON.stringify(HISTORICO)}
      {JSON.stringify(HISTORICO_1)}
      {JSON.stringify(HISTORICO_2)}
      {JSON.stringify(HISTORICO_3)}
      {JSON.stringify(GATO)}
      {JSON.stringify(GATO_1)}
      <hr />
      <h2>Videos de documentacion</h2>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/U329pKWKqWw'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
      <hr />
      <h2>Links de documentacion</h2>
      <a href='https://jsdoc.app/index.html'>JSDoc: JSDoc:</a>
      <br />
      <a href='https://code.visualstudio.com/docs/nodejs/working-with-javascript#_type-checking-javascript'>
        Visual Studio Code jsconfig.json:
      </a>
    </>
  );
}

export { Documentacion };
