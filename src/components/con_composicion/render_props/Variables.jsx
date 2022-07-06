// Cargas de librerias

// Carga de componentes hijos

// Carga de otros elementos (CSS, IMAGES)

function Variables() {
  return (
    <>
      <h3>Render Props con variables</h3>
      <p>
        Revisa el codigo interno de este jsx
        (/components/con_composicion/render_props/Variables) en el cual veras el
        componente Bisabuelo que dentro de el se enviara el atributo
        (listaFamilia) que es un componente (ListaOrdenadaFamilia)
      </p>
      <br />
      <Bisabuelo />
    </>
  );
}

function ListaOrdenadaFamilia({
  // eslint-disable-next-line react/prop-types
  bisabuelo,
  abuelo,
  padre,
  hermana,
  hermano
}) {
  return (
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
  );
}

function Bisabuelo() {
  // DATOS
  const bisabuelo = 'Max';
  const abuelo = 'Neils';
  const padre = 'Morton';
  const hermana = 'Ikora';
  const hermano = 'Uldren';

  return (
    <>
      <h1>Bisabuelo</h1>
      <p>se tiene los nombres de la familia: </p>
      <ListaOrdenadaFamilia
        bisabuelo={bisabuelo}
        abuelo={abuelo}
        padre={padre}
        hermana={hermana}
        hermano={hermano}
      />
      <hr />
      <Abuelo
        // eslint-disable-next-line max-len
        // eslint-disable-next-line react/no-unstable-nested-components
        listaFamilia={
          <ListaOrdenadaFamilia
            bisabuelo={bisabuelo}
            abuelo={abuelo}
            padre={padre}
            hermana={hermana}
            hermano={hermano}
          />
        }
      >
        <hr />
        <Padre
          // eslint-disable-next-line max-len
          // eslint-disable-next-line react/no-unstable-nested-components
          listaFamilia={
            <ListaOrdenadaFamilia
              bisabuelo={bisabuelo}
              abuelo={abuelo}
              padre={padre}
              hermana={hermana}
              hermano={hermano}
            />
          }
        />
      </Abuelo>
    </>
  );
}

// eslint-disable-next-line react/prop-types
function Abuelo({ children, listaFamilia }) {
  return (
    <>
      <h1>Abuelo</h1>
      <p>se tiene los nombres de la familia: </p>
      {listaFamilia}
      {children}
      <br />
    </>
  );
}

function Padre(props) {
  return (
    <>
      <h1>Padre</h1>
      <p>se tiene los nombres de la familia: </p>
      {props.listaFamilia}
      <hr />
      <Hermana>
        <h1>Hermana</h1>
        <p>se tiene los nombres de la familia: </p>
        {props.listaFamilia}
      </Hermana>
      <hr />
      <Hermano>
        <h1>Hermano</h1>
        <p>se tiene los nombres de la familia: </p>
        {props.listaFamilia}
      </Hermano>
    </>
  );
}

// eslint-disable-next-line react/prop-types
function Hermana({ children }) {
  return (
    <>
      {children}
      <p>estamos en el componente hermana =D</p>
    </>
  );
}

// eslint-disable-next-line react/prop-types
function Hermano({ children }) {
  return (
    <>
      {children}
      <p>estamos en el componente hermano =D</p>
    </>
  );
}

// eslint-disable-next-line import/prefer-default-export
export { Variables };
