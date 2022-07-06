// Cargas de librerias
import React from 'react';
import { Grid, Switch, Text, Mark } from '@mantine/core';
import { Eraser } from 'tabler-icons-react';

// Carga de componentes hijos
// Carga de otros elementos (CSS, IMAGES)
import './estilos/lista.css';

function Lista({ tareas, guardarTareas }) {
  // Metodo usado para eliminar un elemento del arreglo
  const eliminar = (textoTarea) => {
    // metodo usado para actualizar informacion en el item es el segundo
    // parametros enviado por el custom hook
    guardarTareas(tareas.filter((tarea) => tarea.nombre !== textoTarea));
  };

  // Metodo usado para cambiar el estado de un elemento del arreglo
  const noOk = (textoTarea) => {
    // metodo usado para actualizar informacion en el item es el segundo
    // parametros enviado por el custom hook
    guardarTareas(
      tareas.filter((tarea) => {
        if (tarea.nombre === textoTarea) {
          tarea.estado = tarea.estado ? false : true;
        }
        return tarea;
      })
    );
  };

  return (
    <Grid.Col offset={1} span={10}>
      {tareas.map((tarea, index) => (
        <Grid key={`${index}_${tarea.nombre}`}>
          <Grid.Col span={2}>
            <Switch
              onLabel='Ok'
              offLabel='NO'
              color='lime'
              defaultChecked={tarea.estado}
              onClick={() => noOk(tarea.nombre)}
            />
          </Grid.Col>
          <Grid.Col span={8}>
            {!tarea.estado ? (
              <Text>{tarea.nombre}</Text>
            ) : (
              <Text>
                <Mark color='lime' className='Lista__Text--checked'>
                  {tarea.nombre}
                </Mark>
              </Text>
            )}
          </Grid.Col>
          <Grid.Col span={2}>
            <Eraser size={16} onClick={() => eliminar(tarea.nombre)} />
          </Grid.Col>
        </Grid>
      ))}
    </Grid.Col>
  );
}

export default Lista;
