// Cargas de librerias
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Carga de componentes hijos

// Carga de otros elementos (CSS, IMAGES)

function RRDParams() {
  const navigate = useNavigate();
  const { paramsIdJack } = useParams();

  const cargarListaTarea = () => {
    navigate('/');
  };

  return (
    <>
      <h1>
        {/* eslint-disable-next-line no-trailing-spaces */}
        el parametro tomado de la url es: 
        {paramsIdJack}
      </h1>
      <hr />
      <p>pondremos un boton para cambiarnos desde una funciona a cualquier url:</p>
      <button
        type="button"
        onClick={() => cargarListaTarea()}
      >
        IR A Lista de tareas con useNavigate
      </button>
      <br />
      <button
        type="button"
        onClick={() => navigate('/react-router-dom')}
      >
        IR A react router dom
      </button>
      <br />
      <button
        type="button"
        onClick={() => navigate('/localstorage')}
      >
        IR A Local storage
      </button>
    </>
  );
}

// eslint-disable-next-line import/prefer-default-export
export { RRDParams };
