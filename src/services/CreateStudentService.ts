import { prisma } from '../lib/prisma.js';

// Tipagem do que o Service espera receber
interface StudentRequest {
  name: string;
  email: string;
  belt: string;
}

export class CreateStudentService {
  async execute({ name, email, belt }: StudentRequest) {
    // 1. Verifica se o aluno já existe pelo email
    const studentAlreadyExists = await prisma.student.findUnique({
      where: { email }
    });

    // Se existir, nós barramos a criação lançando um erro
    if (studentAlreadyExists) {
      throw new Error("Já existe um aluno cadastrado com este e-mail.");
    }

    // 2. Se não existir, criamos o aluno no banco de dados
    const student = await prisma.student.create({
      data: {
        name,
        email,
        belt
      }
    });

    return student; // Retorna o aluno recém-criado
  }
}