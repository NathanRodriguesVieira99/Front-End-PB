import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  newCadastroFormSchema,
  type NewCadastroFormSchema,
} from '@/_validators/cadastro-validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { cadastrarUser } from '@/_services/cadastro-services';
import Link from 'next/link';
import { useTransition } from 'react';

export function CadastroForm() {
  // seta um loading ao cadastrar
  const [isSaving, startIsSaving] = useTransition();

  // React Hook Form
  const form = useForm<NewCadastroFormSchema>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(newCadastroFormSchema),
  });

  const handleSubmitCadastro = async (data: NewCadastroFormSchema) => {
    // ao salvar limpa o form e envia pro banco de dados
    startIsSaving(async () => {
      await cadastrarUser(data);
      form.reset();
    });
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Cadastro</CardTitle>
        <CardDescription>Crie a sua conta</CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(handleSubmitCadastro)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="name">Nome</FormLabel>
                  <FormControl>
                    <div className="flex flex-col gap-2 mt-2">
                      <Input
                        id="name"
                        type="text"
                        placeholder="Digite seu nome de usuário"
                        {...field}
                      />
                      {form.formState.errors.name && (
                        <p className="text-accent-red text-body-small">
                          {form.formState.errors.name.message}
                        </p>
                      )}
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

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
              {/* enquanto está salvando mostra um 'Carregando'*/}
              <Button type="submit" className="w-1/2" disabled={isSaving}>
                {isSaving ? 'Cadastrando...' : 'Cadastrar'}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>

      <CardFooter>
        <CardDescription>
          Já possui uma conta?{' '}
          <Link href="/login" className="text-text-highlight">
            Faça login
          </Link>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
