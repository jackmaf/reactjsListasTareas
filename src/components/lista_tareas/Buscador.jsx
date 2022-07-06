// Cargas de librerias
import { Input } from '@mantine/core';
import { ListSearch } from 'tabler-icons-react';
// Carga de componentes hijos
// Carga de otros elementos (CSS, IMAGES)

function Buscador({ setLetrasBuscadas }) {
  return (
    <Input
      icon={<ListSearch size={16} />}
      placeholder='Buscar'
      styles={{ input: { boxSizing: 'border-box' } }}
      onChange={(evento) => setLetrasBuscadas(evento.target.value)}
    />
  );
}

export { Buscador };
