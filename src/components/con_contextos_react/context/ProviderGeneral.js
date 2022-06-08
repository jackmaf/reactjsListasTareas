// Cargas de librerias
import React, {useState, createContext} from 'react';

// Genera, crea o inicializa el contexto donde existiran los datos
const FamiliaContexto = createContext();

function ProviderGeneral(props) {
  // DATOS
  const [bisabuelo, setBisabuelo]= useState("Max");
  const [abuelo, setAbuelo] = useState("Neils");
  const [padre, setPadre] = useState("Morton");
  const [hermana, setHermana] = useState("Ikora");
  const [hermano, setHermano] = useState("Uldren");
  // FamiliaContexto tiene Provider y Consumer en el atributo value
  // se colocan todos los datos que se pueden compartir entre los componentes suscritos
  return (
    <FamiliaContexto.Provider value={{
        bisabuelo, abuelo, padre, hermana, hermano,
        setBisabuelo, setAbuelo, setPadre, setHermana, setHermano
      }}>
      {props.children}
    </FamiliaContexto.Provider>
  );
}

export { FamiliaContexto, ProviderGeneral };
