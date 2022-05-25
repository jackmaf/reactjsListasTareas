// Cargas de librerias
import React from 'react';
import { Grid, Switch, Text, Mark } from '@mantine/core';
import { Eraser } from 'tabler-icons-react';
// Carga de componentes hijos
// Carga de otros elementos (CSS, IMAGES)
import './estilos/lista.css';
function Lista(){
  return (
    <Grid.Col offset={1} span={10}>
      <Grid>
        <Grid.Col span={2}>
          <Switch
            onLabel="Ok"
            offLabel="NO"
            color="lime"
            checked={false}
            />
        </Grid.Col>
        <Grid.Col span={8}>
          <Text>
            Texto 1
          </Text>
        </Grid.Col>
        <Grid.Col span={2}>
          <Eraser size={16} />
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col span={2}>
          <Switch
            onLabel="Ok"
            offLabel="NO"
            color="lime"
            checked={true}
            />
        </Grid.Col>
        <Grid.Col span={8}>
          <Text>
            <Mark color="lime" className="Lista__Text--checked">
              Texto 2
            </Mark>
          </Text>
        </Grid.Col>
        <Grid.Col span={2}>
          <Eraser size={16} />
        </Grid.Col>
      </Grid>
    </Grid.Col>
  );
}

export default Lista;
