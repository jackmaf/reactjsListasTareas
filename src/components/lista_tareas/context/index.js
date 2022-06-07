// Cargas de libreria
import React from 'react';
import { useLocalStorage } from '../context/useLocalStorage';

// Carga de componentes hijos
const TareaContexto = React.createContext();

function TareaProvider(props) {

  /*let aux_tareas = [
    {nombre: "Meditar", estado: true},
    {nombre: "Desayunar", estado: true},
    {nombre: "Tender la cama", estado: false},
    {nombre: "Estudiar", estado: false},
    {nombre: "Lavarse los dientes", estado: true},
    {nombre: "ALmorzar", estado: false},
    {nombre: "Hacer Ejercicio", estado: false},
    {nombre: "Bañarse", estado: false}
  ];*/
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

  // Metodo usado para eliminar un elemento del arreglo
  const eliminar = (texto_tarea) => {
    // metodo usado para actualizar informacion en el item es el segundo
    // parametros enviado por el custom hook
    guardarTareas(tareas.filter(tarea => tarea.nombre !== texto_tarea));
  }

  // Metodo usado para cambiar el estado de un elemento del arreglo
  const noOk = (texto_tarea) => {
    // metodo usado para actualizar informacion en el item es el segundo
    // parametros enviado por el custom hook
    guardarTareas(
      tareas.filter(tarea => {
        if(tarea.nombre === texto_tarea){
          tarea.estado = tarea.estado ? false : true;
        }
        return tarea;
      })
    );
  }

  return(
    <TareaContexto.Provider value={{
      tareas,
      guardarTareas,
      loading,
      error,
      tareasCompletadas,
      filtradasTareas,
      setLetrasBuscadas,
      eliminar,
      noOk
    }}>
      {props.children}
    </TareaContexto.Provider>
  );
}

export {TareaContexto, TareaProvider}