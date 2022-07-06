// Cargas de librerias

// Carga de componentes hijos

// Carga de otros elementos (CSS, IMAGES)

// eslint-disable-next-line react/prop-types
function Hermano({ bisabuelo, abuelo, padre, hermana, hermano }) {
  return (
    <>
      <h1>Hermano</h1>
      <p>se tiene los nombres de la familia: </p>
      <ol>
        <ul>{`Bisabuelo: ${bisabuelo}`}</ul>
        <ul>{`Abuelo: ${abuelo}`}</ul>
        <ul>{`Padre: ${padre}`}</ul>
        <ul>{`Hermana: ${hermana}`}</ul>
        <ul>{`Hermano: ${hermano}`}</ul>
      </ol>
    </>
  );
}

export { Hermano };
