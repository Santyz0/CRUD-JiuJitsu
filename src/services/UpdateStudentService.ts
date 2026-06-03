import { prisma } from '../lib/prisma.js';

// Precisamos do ID para saber quem vamos atualizar
interface UpdateStudentRequest {
  id: string;
  name: string;
  email: string;
  belt: string;
}

export class UpdateStudentService {
  async execute({ id, name, email, belt }: UpdateStudentRequest) {
    // 1. Verifica se o aluno existe no banco
    const studentExists = await prisma.student.findUnique({
      where: { id }
    });

    if (!studentExists) {
      throw new Error("Aluno não encontrado no tatame.");
    }

    // 2. Faz a atualização dos dados
    const updatedStudent = await prisma.student.update({
      where: { id },
      data: {
        name,
        email,
        belt
      }
    });

    return updatedStudent;
  }
}