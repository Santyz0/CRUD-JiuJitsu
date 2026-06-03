import { prisma } from '../lib/prisma.js';

interface DeleteStudentRequest {
  id: string;
}

export class DeleteStudentService {
  async execute({ id }: DeleteStudentRequest) {
    // 1. Verifica se o aluno existe no banco
    const studentExists = await prisma.student.findUnique({
      where: { id }
    });

    if (!studentExists) {
      throw new Error("Aluno não encontrado no tatame.");
    }

    // 2. Remove o registro do banco de dados
    await prisma.student.delete({
      where: { id }
    });

    // Retornamos uma mensagem de sucesso
    return { message: "Aluno removido do sistema com sucesso." };
  }
}