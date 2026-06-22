import express from 'express';
import cors from 'cors'; // 1. Importamos o cors
import { routes } from './routes.js';

const app = express();

// 2. Liberamos a API para receber requisições de outras portas/IPs
app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('🚀 Server is running on port 3333');
});