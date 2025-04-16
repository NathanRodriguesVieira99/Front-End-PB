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
import { useTransition } from 'react';
import { cadastrarUser } from '@/_services/cadastro-services';
import Link from 'next/link';

export function CadastroForm() {
  // seta um loading ao cadastrar (chama o estado no button)
  const [isSaving, startIsSaving] = useTransition();

  // passa os parâmetros do formulário e tipa com o schema de cadastro do zod
  const form = useForm<NewCadastroFormSchema>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    // zodResolver para validar o formulário com base no newCadastroFormSchema do zod
    resolver: zodResolver(newCadastroFormSchema),
  });

  // função de cadastro tipada com o schema de cadastro do zod
  const handleSubmitCadastro = async (data: NewCadastroFormSchema) => {
    // ao salvar chama a função que envia pro banco de dados e limpa o form
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
        {/* pega as props do useForm() na variável form */}
        <Form {...form}>
          {' '}
          {/* chama a função de cadastro com o submit do react hook form */}
          <form className="space-y-4" onSubmit={form.handleSubmit(handleSubmitCadastro)}>
            <FormField
              // permite que o React Hook Form gerencie o estado e a validação
              control={form.control}
              name="name"
              // render recebe as propriedades do campo (field) e passa para o input
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="name">Nome</FormLabel>
                  <FormControl>
                    <div className="flex flex-col gap-2 mt-2">
                      <Input
                        id="name"
                        type="text"
                        placeholder="Digite seu nome de usuário"
                        {...field} // Aplica as propriedades do React Hook Form ao input
                      />
                      {/* verifica se houver erros na validação exibe esse conteúdo */}
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
