'use server';

import { compare } from 'bcrypt-ts';

import { prisma } from '@/_lib/prisma';

// função para login
export async function loginUser(data: { email: string; password: string }) {
  try {
    // busca o user no banco pelo email
    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });

    // se não tem o user cadastrado da erro
    if (!user) {
      return { success: false, message: 'E-mail ou senha inválidos' };
    }

    // Compara as senhas para logar
    const passwordMatch = await compare(data.password, user.password);

    //  dispara erro se a senha comparada não for válida
    if (!passwordMatch) {
      return { success: false, message: 'E-mail ou senha inválidos' };
    }

    // autoriza o login se tudo passar
    return { success: true, user };
  } catch (error) {
    //  pega erros inesperados
    console.error('Erro no login: ', error);
    return { success: false, message: 'Erro durante o login' };
  }
}
