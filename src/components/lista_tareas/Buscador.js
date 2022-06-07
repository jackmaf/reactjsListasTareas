// Cargas de librerias
import React from 'react';
import {  Input } from '@mantine/core';
import { ListSearch } from 'tabler-icons-react';

// Carga de contexto
import {TareaContexto} from './context/index';

// Carga de componentes hijos
// Carga de otros elementos (CSS, IMAGES)

function Buscador(){

  return (
    <TareaContexto.Consumer>
      {({setLetrasBuscadas})=> (
        <Input
          icon={<ListSearch size={16} />}
          placeholder="Buscar"
          styles={{ input: {boxSizing: 'border-box' } }}
          onChange={evento => setLetrasBuscadas(evento.target.value)}
        />
      )}
    </TareaContexto.Consumer>
  );
}

export { Buscador };
