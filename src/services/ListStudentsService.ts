import { prisma } from '../lib/prisma.js';

export class ListStudentsService {
  async execute() {
    // O método findMany() sem parâmetros busca TODOS os registros da tabela
    const students = await prisma.student.findMany();
    
    return students;
  }
}