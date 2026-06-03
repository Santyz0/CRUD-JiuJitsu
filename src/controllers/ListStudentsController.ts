import type { Request, Response } from 'express';
import { ListStudentsService } from '../services/ListStudentsService.js';

export class ListStudentsController {
  async handle(request: Request, response: Response) {
    const listStudentsService = new ListStudentsService();

    try {
      const students = await listStudentsService.execute();
      
      // Devolvemos a lista de alunos (que será um Array do JavaScript)
      return response.json(students);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}