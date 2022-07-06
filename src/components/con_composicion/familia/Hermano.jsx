// Cargas de librerias

// Carga de otros elementos (CSS, IMAGES)

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
export { Hermano };
