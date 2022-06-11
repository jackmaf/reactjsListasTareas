// Cargas de librerias
import React from 'react';
import { Grid, Alert } from '@mantine/core';
import { AlertCircle } from 'tabler-icons-react';

// Carga de componentes hijos
import { Titulo } from './Titulo';
import { Buscador } from './Buscador';
import Lista from './Lista';
import { Modal } from './Modal';

// Custom Hooks
import { useLocalStorage } from './custom_hooks/UseLocalStorage';

// Carga de otros elementos (CSS, IMAGES)

/*let aux_tareas = [
  {nombre: "Meditar", estado: true},
  {nombre: "Desayunar", estado: true},
  {nombre: "Tender la cama", estado: false},
  {nombre: "Estudiar", estado: false},
  {nombre: "Lavarse los dientes", estado: true},
  {nombre: "ALmorzar", estado: false},
  {nombre: "Hacer Ejercicio", estado: false},
  {nombre: "Bañarse", estado: false}
]*/
function IndexListaTareas() {

  // Custom Hook que usaremos para crear en localstorage la informacion y
  // en react con sus hooks nativos
  const { item: tareas,
          saveItem: guardarTareas,
          loading,
          error,
  } = useLocalStorage("tareas_v1", []);
  //} = useLocalStorage("tareas_v1", aux_tareas);

  // Variables y constantes
  const [letrasBuscadas, setLetrasBuscadas] = React.useState('');
  let filtradasTareas =[];

  // predicado o condicion
  const completados = tarea => tarea.estado;
  // array de tareas completadas
  let tareasCompletadas = tareas.filter(completados).length;

  if(letrasBuscadas.length > 0){
    // se recorre cada tarea
    filtradasTareas = tareas.filter(tarea => tarea.nombre.toUpperCase().includes(letrasBuscadas.toUpperCase()));
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

        { loading
        ? <Alert
            icon={<AlertCircle size={16} />}
            title="Información"
            color="orange"
            radius="xl"
            withCloseButton
            variant="filled">
              Estamos Cargando la información....
          </Alert>
        :
          (<>
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
                guardarTareas={guardarTareas}
              />
            </Grid>
          </>)
        }
      </Grid.Col>
      <Modal>
        <p>crear un nuevo post de modal</p>
      </Modal>
    </Grid>
  );
}

export { IndexListaTareas };
