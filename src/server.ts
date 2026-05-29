import express from 'express';
import { routes } from './routes.js';

const app = express();

// Informamos ao Express que vamos trabalhar com requisições no formato JSON
app.use(express.json());

// Injetamos as nossas rotas no aplicativo
app.use(routes);

// Iniciamos o servidor na porta 3333
app.listen(3333, () => {
  console.log('🚀 Servidor da Academia rodando na porta 3333!');
});