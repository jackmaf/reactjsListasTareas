// Cargas de librerias
import React from 'react';
import { Grid, Alert } from '@mantine/core';
import { AlertCircle } from 'tabler-icons-react';

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

// Custom Hook que usaremos para crear en localstorage la informacion y
// en react con sus hooks nativos
function useLocalStorage(itemName, initialValue){
  // variable usada para revisar si hay un error cuando se intenta consumir de un api
  const [error, setError] = React.useState(false);
  // variable usada para cargar un elemento de cargando cuando es true
  const [loading, setLoading] = React.useState(true);
  // variable usada para guardar la informacion
  const [item, setItem] = React.useState(initialValue);

  // hook nativo usado que despues de 3 segundos muestre la informacion
  React.useEffect(() => {
    setTimeout(() => {
      try {
        // se toma la data de localstorage
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        // se revisa si existe data de localstorage en itemName
        if (!localStorageItem) {
          // no existe informacion por lo tanto se crea nueva con el valor initialValue
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          // valor en formato json
          parsedItem = initialValue;
        } else {
          // valor en formato json
          parsedItem = JSON.parse(localStorageItem);
        }

        // se pone en vairables de react 
        setItem(parsedItem);
        setLoading(false);
      } catch(error) {
        setError(error);
      }
    }, 3000);
  });

  // metodo usado para actualizar informacion en el item es el segundo
  // parametros enviado por el custom hook
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch(error) {
      setError(error);
    }
  };

  // devuelve el item, metodo item para actualizarlo, variable para saber si esta cargando, error
  return {
    item,
    saveItem,
    loading,
    error,
  };
}


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
                loading={loading}
                error={error}
              />
            </Grid>
          </>)
        }
      </Grid.Col>
    </Grid>
  );
}

export { IndexListaTareas };
