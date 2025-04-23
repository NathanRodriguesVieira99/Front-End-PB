import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
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

export default function CadastroForm() {
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
    <Card className="m-4 w-full max-w-sm border-0 bg-store-darkest shadow-xl/20 sm:m-4">
      <CardHeader>
        <CardTitle className="text-xl text-text-main sm:text-2xl">
          Cadastro
        </CardTitle>
        <CardDescription className="md:text-md text-sm sm:text-base">
          Crie a sua conta
        </CardDescription>
      </CardHeader>

      <CardContent>
        {/* pega as props do useForm() na variável form */}
        <Form {...form}>
          {' '}
          {/* chama a função de cadastro com o submit do react hook form */}
          <form
            className="space-y-4"
            onSubmit={form.handleSubmit(handleSubmitCadastro)}
          >
            <FormField
              // permite que o React Hook Form gerencie o estado e a validação
              control={form.control}
              name="name"
              // render recebe as propriedades do campo (field) e passa para o input
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    htmlFor="name"
                    className="md:text-md text-sm text-text-main sm:text-base"
                  >
                    Nome
                  </FormLabel>
                  <FormControl>
                    <div className="mt-2 flex flex-col gap-2">
                      <Input
                        className="text-text-main focus-visible:border-store-base focus-visible:ring-store-base"
                        id="name"
                        type="text"
                        placeholder="Digite seu nome de usuário"
                        {...field} // Aplica as propriedades do React Hook Form ao input
                      />
                      {/* verifica se houver erros na validação exibe esse conteúdo */}
                      {form.formState.errors.name && (
                        <p className="text-body-small text-accent-red">
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
                  <FormLabel
                    htmlFor="email"
                    className="md:text-md text-sm text-text-main sm:text-base"
                  >
                    E-mail
                  </FormLabel>
                  <FormControl>
                    <div className="mt-2 flex flex-col gap-2">
                      <Input
                        className="text-text-main focus-visible:border-store-base focus-visible:ring-store-base"
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
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    htmlFor="password"
                    className="md:text-md text-sm text-text-main sm:text-base"
                  >
                    Senha
                  </FormLabel>
                  <FormControl>
                    <div className="mt-2 flex flex-col gap-2">
                      <Input
                        className="text-text-main focus-visible:border-store-base focus-visible:ring-store-base"
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
              {/* enquanto está salvando mostra um 'Carregando'*/}
              <Button
                type="submit"
                className="w-1/2 bg-store-base hover:bg-store-dark"
                disabled={isSaving}
              >
                {isSaving ? (
                  <p className="text-text-main">Cadastrando...</p>
                ) : (
                  <p className="text-text-main"> Cadastrar</p>
                )}
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
