import { Router } from 'express';
import { CreateStudentController } from './controllers/CreateStudentController.js';

const routes = Router();

// Instanciamos o Controller
const createStudentController = new CreateStudentController();

// Delegamos a responsabilidade da rota POST para o método 'handle' do Controller
routes.post('/students', createStudentController.handle);

export { routes };