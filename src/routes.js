import { Router } from 'express';

const routes = Router();

routes.post('/students', (request, response) => {
  // Extraímos os dados que o usuário enviou no corpo da requisição (body)
  const { name, email, belt } = request.body;

  // Retornamos uma resposta em JSON para confirmar que chegou
  return response.json({ 
    message: 'Rota de criação de aluno acessada com sucesso!', 
    data: { name, email, belt } 
  });
});

export { routes };