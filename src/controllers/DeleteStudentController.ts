import type { Request, Response } from 'express';
import { DeleteStudentService } from '../services/DeleteStudentService.js';

export class DeleteStudentController {
  async handle(request: Request, response: Response) {
    // Pegamos o ID da URL garantindo que é uma string
    const id = request.params.id as string;

    const deleteStudentService = new DeleteStudentService();

    try {
      const result = await deleteStudentService.execute({ id });
      
      return response.json(result);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}