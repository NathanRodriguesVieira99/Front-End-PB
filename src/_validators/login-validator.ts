import { z } from 'zod';

// tipagem para a validação
export type NewLoginFormSchema = z.infer<typeof newLoginFormSchema>;

// cria uma validação para o login
export const newLoginFormSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z
    .string()
    .min(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
    .regex(/[A-Z]/, { message: 'A senha deve conter pelo menos uma letra maiúscula' })
    .regex(/[0-9]/, { message: 'A senha deve conter pelo menos um número' })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message: 'A senha deve conter pelo menos um caractere especial',
    }),
});
