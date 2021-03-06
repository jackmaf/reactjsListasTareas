// Cargas de librerias
import { Grid, Center, Avatar, AvatarsGroup } from '@mantine/core';
// Carga de componentes hijos
// Carga de otros elementos (CSS, IMAGES)
import './estilos/titulo.css';
import imgGato from './imagenes/gato.jpeg';
import imgPato from './imagenes/patito.jpeg';

// eslint-disable-next-line react/prop-types
function Titulo({ children }) {
  return (
    <Grid className='Titulo__Grid'>
      <Grid.Col offset={1} span={10}>
        <Center>
          <AvatarsGroup limit={2} total={7} size='xl'>
            <Avatar
              src={imgGato}
              component='a'
              href='https://github.com/rtivital'
            />
            <Avatar src={imgPato} />
            <Avatar src='avatar.png' />
            {/* ...other items */}
          </AvatarsGroup>
        </Center>
      </Grid.Col>
      <Grid.Col offset={1} span={10}>
        <Center>
          <h2>
            Haz completado
            <br />
            {children}
          </h2>
        </Center>
      </Grid.Col>
    </Grid>
  );
}

// eslint-disable-next-line import/prefer-default-export
export { Titulo };
