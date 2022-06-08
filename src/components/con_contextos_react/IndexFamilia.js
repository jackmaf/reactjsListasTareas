import React from 'react';
import { ProviderGeneral } from './context/ProviderGeneral';
import { Bisabuelo } from './Bisabuelo';

// componente que agrupa a todo el arbol que se suscribira, 
// tendra o podra acceder a los datos generados 
// por el ProviderGeneral
const IndexFamilia = () => {
  return (
    <ProviderGeneral>
      <Bisabuelo />
    </ProviderGeneral>
  );
}

export default IndexFamilia;