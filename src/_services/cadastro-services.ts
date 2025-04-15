'use server';

// criptografa a senha
import { hashSync } from 'bcrypt-ts';

import { PrismaClient } from '@prisma/client';
import {
  newCadastroFormSchema,
  type NewCadastroFormSchema,
} from '@/_validators/cadastro-validator';

// valida no back-end o user cadastrado
export async function cadastrarUser(data: NewCadastroFormSchema) {
  const parsedData = newCadastroFormSchema.safeParse(data);

  if (!parsedData.success) {
    return { error: parsedData.error.message };
  }

  const prisma = new PrismaClient();

  // cria o user no banco de dados
  await prisma.user.create({
    data: {
      name: parsedData.data.name,
      email: parsedData.data.email,
      password: hashSync(parsedData.data.password),
    },
  });
}
