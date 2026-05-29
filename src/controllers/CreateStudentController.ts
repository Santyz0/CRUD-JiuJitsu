import type { Request, Response } from 'express';
import { CreateStudentService } from '../services/CreateStudentService.js';

export class CreateStudentController {
  async handle(request: Request, response: Response) {
    // 1. Pega os dados do body
    const { name, email, belt } = request.body;

    // 2. Instancia o Service
    const createStudentService = new CreateStudentService();

    try {
      // 3. Executa o Service
      const student = await createStudentService.execute({ name, email, belt });

      // 4. Retorna sucesso (Status 201 - Created)
      return response.status(201).json(student);
      
    } catch (error: any) {
      // Se o Service lançar aquele erro de "e-mail já existe", capturamos aqui
      return response.status(400).json({ error: error.message });
    }
  }
}