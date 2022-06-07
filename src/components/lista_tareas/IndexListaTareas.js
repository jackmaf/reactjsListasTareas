// Cargas de librerias
import React from 'react';
import { Grid, Alert } from '@mantine/core';
import { AlertCircle } from 'tabler-icons-react';

// Carga de contexto
import {TareaProvider, TareaContexto} from './context/index';

// Carga de componentes hijos
import { Titulo } from './Titulo';
import { Buscador } from './Buscador';
import Lista from './Lista';
// Carga de otros elementos (CSS, IMAGES)

function IndexListaTareas() {

  return (
    <TareaProvider>
      <TareaContexto.Consumer>
        {(loading) => (
          <Grid>
            <Grid.Col span={12}>
              <Titulo/>
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
                      <Buscador/>
                    </Grid.Col>
                  </Grid>
                  <Grid>
                    <Lista/>
                  </Grid>
                </>)
              }
            </Grid.Col>
          </Grid>
        )}
      </TareaContexto.Consumer>
    </TareaProvider>
  );
}

export { IndexListaTareas };
