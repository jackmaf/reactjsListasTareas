// Cargas de librerias
import React from 'react';
import { Grid } from '@mantine/core';
// Carga de componentes hijos
import { Titulo } from './Titulo';
import { Buscador } from './Buscador';
import Lista from './Lista';
// Carga de otros elementos (CSS, IMAGES)

let tareas = [
  {nombre: "Meditar", status: true},
  {nombre: "Desayunar", status: true},
  {nombre: "Tender la cama", status: false},
  {nombre: "Estudiar", status: false},
  {nombre: "Lavarse los dientes", status: true},
  {nombre: "ALmorzar", status: false},
  {nombre: "Hacer Ejercicio", status: false},
  {nombre: "Bañarse", status: false}
]

function IndexListaTareas() {
  return (
    <Grid>
      <Grid.Col span={12}>
        <Titulo
          completadas={5}
          total={10}
        />
        <Grid>
          <Grid.Col offset={1} span={10}>
            <Buscador/>
          </Grid.Col>
        </Grid>
        <Grid>
          <Lista/>
        </Grid>
      </Grid.Col>
    </Grid>
  );
}

export { IndexListaTareas };
