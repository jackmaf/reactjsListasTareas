/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
// Cargas de librerias
import React from 'react';

// Custom Hook que usaremos para crear en localstorage la informacion y
// en react con sus hooks nativos
export const useLocalStorage = (itemName, initialValue) => {
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
      } catch (auxError) {
        setError(auxError);
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
    } catch (auxError) {
      setError(auxError);
    }
  };

  // devuelve el item, metodo item para actualizarlo, variable para saber si esta cargando, error
  return {
    item,
    saveItem,
    loading,
    error
  };
};

// export { useLocalStorage };
