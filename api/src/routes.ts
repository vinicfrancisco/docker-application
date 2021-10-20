import { Router } from 'express';
import db from './database/index';

const routes = Router();

routes.use('/cargos', async (request, response) => {
  const cargos = await db.select().from('cargos');

  return response.json(cargos);
});

routes.use('/cargos-concursos', async (request, response) => {
  const cargosConcursos = await db.select().from('cargos_concursos');

  return response.json(cargosConcursos);
});

routes.use('/concursos', async (request, response) => {
  const concursos = await db.select().from('concursos');

  return response.json(concursos);
});

routes.use('/departamentos', async (request, response) => {
  const departamentos = await db.select().from('departamentos');

  return response.json(departamentos);
});

routes.use('/departamentos-cargos', async (request, response) => {
  const departamentosCargos = await db.select().from('departamentos_cargos');

  return response.json(departamentosCargos);
});

routes.use('/etapas', async (request, response) => {
  const etapas = await db.select().from('etapas');

  return response.json(etapas);
});

routes.use('/inscricoes', async (request, response) => {
  const inscricoes = await db.select().from('inscricao');

  return response.json(inscricoes);
});

routes.use('/inscricoes-etapas', async (request, response) => {
  const inscricoesEtapas = await db.select().from('inscricao_etapas');

  return response.json(inscricoesEtapas);
});

export default routes;
