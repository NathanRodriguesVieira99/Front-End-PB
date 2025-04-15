'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
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
  newCadastroFormSchema,
  type NewCadastroFormSchema,
} from '@/_validators/cadastro-validator';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

export function LoginForm() {
  const form = useForm<NewCadastroFormSchema>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(newCadastroFormSchema),
  });

  const handleSubmitLogin = async () => {
    // TODO adicionar logica de login para acessar a página principal
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Faça login com seu email e senha</CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(handleSubmitLogin)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email">E-mail</FormLabel>
                  <FormControl>
                    <div className="flex flex-col gap-2 mt-2">
                      <Input id="email" placeholder="Digite seu e-mail" type="email" {...field} />
                      {form.formState.errors.email && (
                        <p className="text-accent-red text-body-small">
                          {form.formState.errors.email.message}
                        </p>
                      )}
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="password">Senha</FormLabel>
                  <FormControl>
                    <div className="flex  flex-col gap-2 mt-2">
                      <Input
                        type="password"
                        placeholder="Digite sua senha"
                        id="password"
                        {...field}
                      />
                      {form.formState.errors.password && (
                        <p className="text-accent-red text-body-small">
                          {form.formState.errors.password.message}
                        </p>
                      )}
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex items-center justify-center">
              <Button type="submit" className="w-1/2">
                Entrar
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>

      <CardFooter>
        <CardDescription>
          Não tem uma conta?{' '}
          <Link className="text-text-highlight " href="/cadastro">
            {' '}
            Cadastre-se
          </Link>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
