import { Router } from 'express';
import { CreateStudentController } from './controllers/CreateStudentController.js';
import { ListStudentsController } from './controllers/ListStudentsController.js';
import { UpdateStudentController } from './controllers/UpdateStudentController.js';
import { DeleteStudentController } from './controllers/DeleteStudentController.js'; // Novo import

const routes = Router();

const createStudentController = new CreateStudentController();
const listStudentsController = new ListStudentsController();
const updateStudentController = new UpdateStudentController();
const deleteStudentController = new DeleteStudentController(); // Nova instância

// [C]reate
routes.post('/students', createStudentController.handle);

// [R]ead
routes.get('/students', listStudentsController.handle);

// [U]pdate
routes.put('/students/:id', updateStudentController.handle); 

// [D]elete
routes.delete('/students/:id', deleteStudentController.handle);

export { routes };