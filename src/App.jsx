// Cargas de librerias
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Carga de componentes hijos
import { IndexListaTareas } from './components/lista_tareas/IndexListaTareas';
import { IndexRRouterDom } from './components/react_router_dom/IndexRRouterDom';
import { RRDParams } from './components/react_router_dom/RRDParams';
import {
  RRDInternalHola,
  RRDInternalChao
} from './components/react_router_dom/RRDInternalRoutes';
import { IndexLocalStorage } from './components/localstorage/IndexLocalStorage';
import { IndexBisabueloSinContexto } from './components/sin_contextos_react/IndexBisabueloSinContexto';
import IndexFamilia from './components/con_contextos_react/IndexFamilia';
import { GithubPages } from './components/githubpages';
import { ContainerComposicion } from './components/con_composicion/IndexContainerComposicion';
import IndexComposicionBisabuelo from './components/con_composicion/familia/IndexBisabuelo';
import IndexComposicionListaTareas from './components/con_composicion/lista_tareas/IndexListaTareas';
import { IndexRenderProps } from './components/con_composicion/render_props/IndexRenderProps';
import { Variables } from './components/con_composicion/render_props/Variables';
import { Funciones } from './components/con_composicion/render_props/Funciones';
import Menu from './components/menu/IndexMenu';
import { Otros } from './components/otros/Index';
import { VariablesEntorno } from './components/variables_entorno/Index';
import UseState from './components/use_state/UseState';
import UseEffect from './components/use_effect/Index';
import EstadosCompuestos from './components/estados_compuestos/Index';
import EstadosCompuestosConUseReduce from './components/use_reduce/Index';
import { Documentacion } from './components/documentacion/Index';

// Carga de otros elementos (CSS, IMAGES)
import './App.css';

function PruebaFuncion() {
  return (
    <div>
      <h1>Entraste al contacto</h1>
      <IndexRRouterDom />
    </div>
  );
}

// eslint-disable-next-line react/function-component-definition
const NoFoundPage = () => <h1>Pagina no encontrada X-X</h1>;

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<IndexListaTareas />} />
        <Route path='/react-router-dom/*' element={<PruebaFuncion />}>
          <Route path='hola' element={<RRDInternalHola />} />
          <Route path='chao' element={<RRDInternalChao />} />
        </Route>
        <Route
          path='/react-router-dom-params/:paramsIdJack'
          element={<RRDParams />}
        />
        <Route path='/localstorage' element={<IndexLocalStorage />} />
        <Route path='/sin-contextos' element={<IndexBisabueloSinContexto />} />
        <Route path='/con-contextos' element={<IndexFamilia />} />
        <Route path='/subir-a-github-pages' element={<GithubPages />} />
        <Route path='/con-composicion/*' element={<ContainerComposicion />}>
          <Route path='familia' element={<IndexComposicionBisabuelo />} />
          <Route
            path='lista-tareas'
            element={<IndexComposicionListaTareas />}
          />
          <Route path='index-render-props/*' element={<IndexRenderProps />}>
            <Route path='variables' element={<Variables />} />
            <Route path='funciones' element={<Funciones />} />
          </Route>
        </Route>
        <Route path='/otros' element={<Otros />} />
        <Route path='/usestate' element={<UseState />} />
        <Route path='/useeffect' element={<UseEffect />} />
        <Route path='/estados-compuestos' element={<EstadosCompuestos />} />
        <Route
          path='/estados-compuestos-con-use-reduce'
          element={<EstadosCompuestosConUseReduce />}
        />
        <Route path='/env-cmd' element={<VariablesEntorno />} />
        <Route path='/documentacion' element={<Documentacion />} />

        <Route path='*' element={<NoFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// eslint-disable-next-line import/prefer-default-export
export { App };
