# Front-end do Projeto de Bloco

Este é o front-end para o Projeto de Bloco para a faculdade, desenvolvido com Next.js e TypeScript.

## Visão Geral

Este projeto é a interface de usuário para um sistema de um site de vendas de jogos. Ele permite que os usuários naveguem por um catálogo de jogos, criem contas e façam login.

## Funcionalidades

- Cadastro e login
- listagem de jogos separados em 3 categorias
- Animações feitas com [Motion](https://motion.dev/)

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Pré-requisitos

- Node.js (versão 21.7.3 ou superior)
- pnpm (ou npm/yarn)

## Começando

### 1. Clone o repositório

```bash
git clone https://github.com/NathanRodriguesVieira99/Front-End-PB
cd front-end
```

### 2. Instale as dependências

```bash
pnpm install
```

### 3. Configure as Variáveis de Ambiente

Copie o arquivo `.env.example` para `.env` e preencha as variáveis necessárias:

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações.

### 4. Rode o servidor de desenvolvimento

```bash
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Scripts Disponíveis

No diretório do projeto, você pode rodar:

- `pnpm dev`: Inicia o servidor de desenvolvimento.
- `pnpm build`: Compila a aplicação para produção.
- `pnpm start`: Inicia o servidor de produção após o build.
- `pnpm lint`: Executa o ESLint para verificar problemas no código.
- `pnpm test`: Executa os testes com Jest.

Consulte o arquivo [package.json](package.json) para todos os scripts.

## Contribuindo

Contribuições são bem-vindas! Por favor, verifique o arquivo [TODO.md](TODO.md) para tarefas pendentes e sinta-se à vontade para abrir issues e pull requests.

Certifique-se de que seus commits sigam o padrão do [Commitlint](https://commitlint.js.org/#/) (configurado em [commitlint.config.js](commitlint.config.js)).
Os hooks de pré-commit e pré-push (configurados em [.husky/](.husky/)) irão rodar linters e testes.

## Créditos

Este projeto foi desenvolvido por:

- Nathan Vieira
- Natan Robers
- Victor Moraes

---
