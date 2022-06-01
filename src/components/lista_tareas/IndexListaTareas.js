// Cargas de librerias
import React from 'react';
import { Grid } from '@mantine/core';
// Carga de componentes hijos
import { Titulo } from './Titulo';
import { Buscador } from './Buscador';
import Lista from './Lista';
// Carga de otros elementos (CSS, IMAGES)

let aux_tareas = [
  {nombre: "Meditar", estado: true},
  {nombre: "Desayunar", estado: true},
  {nombre: "Tender la cama", estado: false},
  {nombre: "Estudiar", estado: false},
  {nombre: "Lavarse los dientes", estado: true},
  {nombre: "ALmorzar", estado: false},
  {nombre: "Hacer Ejercicio", estado: false},
  {nombre: "Bañarse", estado: false}
]

function IndexListaTareas() {

  // Variables y constantes
  const [tareas, setTareas] = React.useState(aux_tareas);
  const [letrasBuscadas, setLetrasBuscadas] = React.useState('');
  let filtradasTareas =[];

  // predicado o condicion
  const completados = tarea => tarea.estado;
  // array de tareas completadas
  let tareasCompletadas = tareas.filter(completados).length;

  if(letrasBuscadas.length > 0){
    // se recorre cada tarea
    filtradasTareas = tareas.filter(tarea => {
      // si la tarea contiene algo de las letras se devuelve esa tarea
      if(tarea.nombre.toUpperCase().includes(letrasBuscadas.toUpperCase())){
        return tarea;
      }
    });
    // array de tareas completadas
    tareasCompletadas = filtradasTareas.filter(completados).length;
  }else{
    filtradasTareas = tareas
  }

  return (
    <Grid>
      <Grid.Col span={12}>
        <Titulo
          completadas={tareasCompletadas}
          total={filtradasTareas.length}
        />
        <Grid>
          <Grid.Col offset={1} span={10}>
            <Buscador
              setLetrasBuscadas={setLetrasBuscadas}
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Lista
            tareas={filtradasTareas}
            setTareas={setTareas}
          />
        </Grid>
      </Grid.Col>
    </Grid>
  );
}

export { IndexListaTareas };
