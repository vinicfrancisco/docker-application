import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Home from '../pages/Home';
import Cargos from '../pages/Cargos';
import CargosConcursos from '../pages/CargosConcursos';
import Concursos from '../pages/Concursos';
import Departamentos from '../pages/Departamentos';
import DepartamentosCargos from '../pages/DepartamentosCargos';
import Etapas from '../pages/Etapas';
import Inscricoes from '../pages/Inscricoes';
import InscricoesEtapas from '../pages/InscricoesEtapas';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/trabalho_a2" exact component={Home} />
    <Route path="/cargos" exact component={Cargos} />
    <Route path="/cargos-concursos" exact component={CargosConcursos} />
    <Route path="/concursos" exact component={Concursos} />
    <Route path="/departamentos" exact component={Departamentos} />
    <Route path="/departamentos-cargos" exact component={DepartamentosCargos} />
    <Route path="/etapas" exact component={Etapas} />
    <Route path="/inscricao" exact component={Inscricoes} />
    <Route path="/inscricao-etapas" exact component={InscricoesEtapas} />
  </Switch>
);

export default Routes;
