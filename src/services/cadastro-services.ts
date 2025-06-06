'use server';

// criptografa a senha
import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcrypt-ts';

// importa o schema de validação do zod
import {
  newCadastroFormSchema,
  type NewCadastroFormSchema,
} from '@/validators/cadastro-validator';

// valida no back-end o user cadastrado
export async function cadastrarUser(data: NewCadastroFormSchema) {
  // valida os dados recebidos usando newCadastroFormSchema
  const parsedData = newCadastroFormSchema.safeParse(data);

  // se a validação falhar da erro
  if (!parsedData.success) {
    return { error: parsedData.error.message };
  }

  const prisma = new PrismaClient();

  // cria o user no banco de dados
  await prisma.user.create({
    data: {
      name: parsedData.data.name,
      email: parsedData.data.email,
      password: hashSync(parsedData.data.password), // criptografa a senha
    },
  });
}
