// Cargas de librerias
import React from 'react';
import { Grid, Switch, Text, Mark } from '@mantine/core';
import { Eraser } from 'tabler-icons-react';

// Carga de contexto
import {TareaContexto} from './context/index';

// Carga de componentes hijos

// Carga de otros elementos (CSS, IMAGES)
import './estilos/lista.css';
function Lista(){

  return (
    <TareaContexto.Consumer>
      {({tareas, noOk, eliminar})=>(
        <Grid.Col offset={1} span={10}>
          {tareas.map((tarea, index) => (
            <Grid key={`${index}_${tarea.nombre}`}>
              <Grid.Col span={2}>
                <Switch
                  onLabel="Ok"
                  offLabel="NO"
                  color="lime"
                  defaultChecked={tarea.estado}
                  onClick={evento => noOk(tarea.nombre)}
                  />
              </Grid.Col>
              <Grid.Col span={8}>
                { !tarea.estado ?
                  (<Text>
                    {tarea.nombre}
                  </Text>)
                :
                  (<Text>
                    <Mark color="lime" className="Lista__Text--checked">
                      {tarea.nombre}
                    </Mark>
                  </Text>)
                }
              </Grid.Col>
              <Grid.Col span={2}>
                <Eraser
                  size={16}
                  onClick={evento => eliminar(tarea.nombre)}
                />
              </Grid.Col>
            </Grid>
          ))}
        </Grid.Col>
      )}
    </TareaContexto.Consumer>
  );
}

export default Lista;
