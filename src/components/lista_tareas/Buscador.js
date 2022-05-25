// Cargas de librerias
import React from 'react';
import {  Input } from '@mantine/core';
import { ListSearch } from 'tabler-icons-react';
// Carga de componentes hijos
// Carga de otros elementos (CSS, IMAGES)

function Buscador(){
  return (
    <Input
      icon={<ListSearch size={16} />}
      placeholder="Buscar"
      styles={{ input: {boxSizing: 'border-box' } }}
    />
  );
}

export { Buscador };
