'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  NewLoginFormSchema,
  newLoginFormSchema,
} from '@/_validators/login-validator';
import { loginUser } from '@/_services/login-services';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import Link from 'next/link';

export function LoginForm() {
  const router = useRouter();
  // seta um loading ao logar (chama o estado no button)
  const [isPending, startTransition] = useTransition();

  // passa os parâmetros do formulário e tipa com o schema de login do zod
  const form = useForm<NewLoginFormSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    // zodResolver para validar o formulário com base no newLoginFormSchema do zod
    resolver: zodResolver(newLoginFormSchema),
  });

  // função de login tipada  com o schema de login do zod
  const handleSubmitLogin = async (data: NewLoginFormSchema) => {
    startTransition(async () => {
      try {
        // chama a função loginUser (passa os dados do form)
        const { success, message } = await loginUser(data);

        // se o login for bem sucedido redireciona para a home
        if (success) {
          router.push('/home');
        } else {
          form.setError('root', {
            message: message || 'E-mail ou senha inválidos',
          });
        }
      } catch (error) {
        // se der erro exibe uma mensagem
        console.error('Erro no login: ', error);
        form.setError('root', {
          message: 'Ocorreu um erro durante o login',
        });
      }
    });
  };

  return (
    <Card className="w-full max-w-sm border-0 bg-store-darkest">
      <CardHeader>
        <CardTitle className="text-text-main">Login</CardTitle>
        <CardDescription>Faça login com seu email e senha</CardDescription>
      </CardHeader>
      <CardContent>
        {/* pega as props do useForm() na variável form */}
        <Form {...form}>
          {/* chama a função de login com o submit do react hook form */}
          <form
            className="space-y-4"
            onSubmit={form.handleSubmit(handleSubmitLogin)}
          >
            <FormField
              // permite que o React Hook Form gerencie o estado e a validação
              control={form.control}
              name="email"
              // render recebe as propriedades do campo (field) e passa para o input
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email" className="text-text-main">
                    E-mail
                  </FormLabel>
                  <FormControl>
                    <div className="mt-2 flex flex-col gap-2">
                      <Input
                        className="focus-visible:border-store-base focus-visible:ring-store-base"
                        id="email"
                        placeholder="Digite seu e-mail"
                        type="email"
                        {...field}
                      />
                      {form.formState.errors.email && (
                        <p className="text-body-small text-accent-red">
                          {form.formState.errors.email.message}
                        </p>
                      )}
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              // permite que o React Hook Form gerencie o estado e a validação
              control={form.control}
              name="password"
              // render recebe as propriedades do campo (field) e passa para o input
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="password" className="text-text-main">
                    Senha
                  </FormLabel>
                  <FormControl>
                    <div className="mt-2 flex flex-col gap-2">
                      <Input
                        className="focus-visible:border-store-base focus-visible:ring-store-base"
                        type="password"
                        placeholder="Digite sua senha"
                        id="password"
                        {...field}
                      />
                      {form.formState.errors.password && (
                        <p className="text-body-small text-accent-red">
                          {form.formState.errors.password.message}
                        </p>
                      )}
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex items-center justify-center">
              <Button
                disabled={isPending}
                type="submit"
                className="w-1/2 bg-store-base hover:bg-store-dark"
              >
                {isPending ? (
                  <p className="text-text-main">Entrando...</p>
                ) : (
                  <p className="text-text-main"> Entrar</p>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>

      <CardFooter>
        <CardDescription>
          Não tem uma conta?{' '}
          <Link className="text-text-highlight" href="/cadastro">
            {' '}
            Cadastre-se
          </Link>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
