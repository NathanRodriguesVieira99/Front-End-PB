'use server';

import { prisma } from '@/lib/prisma';
import { compare } from 'bcrypt-ts';

export async function loginUser(data: { email: string; password: string }) {
  try {
    // busca o user no banco pelo email
    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      return { success: false, message: 'E-mail ou senha inválidos' };
    }

    // Compara as senhas para logar
    const passwordMatch = await compare(data.password, user.password);

    if (!passwordMatch) {
      return { success: false, message: 'E-mail ou senha inválidos' };
    }

    return { success: true, user };
  } catch (error) {
    console.error('Erro no login: ', error);
    return { success: false, message: 'Erro durante o login' };
  }
}
