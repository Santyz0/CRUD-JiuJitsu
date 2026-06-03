import type { Request, Response } from 'express';
import { UpdateStudentService } from '../services/UpdateStudentService.js';

export class UpdateStudentController {
  async handle(request: Request, response: Response) {
    // 1. Forçamos o TypeScript a entender que esse ID será uma string válida
    const id = request.params.id as string;
    
    const { name, email, belt } = request.body;

    const updateStudentService = new UpdateStudentService();

    try {
      // Agora o erro vermelho vai sumir!
      const student = await updateStudentService.execute({ id, name, email, belt });
      
      return response.json(student);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}