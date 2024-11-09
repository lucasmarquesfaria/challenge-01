<img src="https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clxcfha33086207lv0j1wex8v" alt="Code Challenges" />

# Frontend Developer - Challenge 001 - Lucas Marques

Nesse desafio você deve construir uma aplicação que permita que os usuários possam encontrar novas pessoas, utilizando ferramentas modernas e boas práticas para criar um código de alta qualidade e escalabilidade.

## 📝 Pré-requisitos

- [ ] Configurar [ambiente de desenvolvimento](https://www.youtube.com/watch?v=YcR8pKvjx44&list=PLlAbYrWSYTiOpefWtd6uvwgKT1R-94Zfd)
- [ ] Ler arquivo [fluxo de trabalho no Github](https://goldenrod-pen-c7d.notion.site/Fluxo-de-trabalho-no-Github-7a63f1450e9e4a8585dbca3aa2b71225?pvs=4)
- [ ] Saber trabalhar com o fluxo de desenvolvimento [Trunk Based Development](https://www.linkedin.com/posts/d3vlopes_programacao-desenvolvimentoweb-devops-activity-7198291427410219008-pA7b)
- [ ] Saber criar [commits atômicos](https://dev.to/paulinevos/atomic-commits-will-help-you-git-legit-35i7)

## 🔧 Stack

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Typescript](https://www.typescriptlang.org)
- [Sass](https://sass-lang.com)
- [Storybook](https://storybook.js.org)
- [React Router](https://reactrouter.com)
- [Jest](https://jestjs.io)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## 🎨 Layout

Você pode visualizar o layout do projeto, [clicando aqui](https://www.figma.com/design/d7tffwO8l1hXxjH8fxdaZH/Frontend-Developer---Find-People?node-id=0-1&t=cSYAhHjiMtfz01tv-1).

## 🚀 Começando

### Clonando o repositório

```
git clone https://github.com/code-challenges-org/FRONT-challenge-001.git
```

### Configurando seu repositório

1. Crie um repositório em sua conta do Github.

> [!CAUTION]
> Deixe seu repositório como público para que outras pessoas possam acessar para fazer Code Review.

![image](https://github.com/code-challenges-org/FRONT-challenge-001/assets/59663666/765862a0-b208-4516-a6fa-e91d62a2c8a2)

2. Rode o seguinte comando no repositório clonado

```
git remote rm origin
```

3. Rode o comando fornecido pelo Github ao criar o repositório

![Group 2516](https://github.com/code-challenges-org/FRONT-challenge-001/assets/59663666/31e46393-c90e-4a6c-b3e5-c62db0fd6c58)

4. Faça push para o repositório criado rodando o seguinte comando

```
git push origin main
```

5. Pronto! Repositório configurado.

![image](https://github.com/code-challenges-org/FRONT-challenge-001/assets/59663666/4a1ec83c-d89c-4aaa-9ecc-c0705305e032)

### Copiando issues

As issues com todos os requisitos já estão criadas, você pode acessar elas [clicando aqui](https://github.com/code-challenges-org/FRONT-challenge-001/issues).
<br />
Você deve copiar todas elas para as issues do repositório da sua conta, para que você possa linkar elas ao fazer Pull Request.

### Versão do Node

Você pode verificar a versão mínima necessária do Node para rodar o projeto [clicando aqui](https://github.com/code-challenges-org/FRONT-challenge-001/blob/main/.nvmrc) ou acessando o arquivo `.nvmrc`.

### Instalando dependências

```
npm i
```

### Rodando o servidor de desenvolvimento

1. Rode o comando `npm run dev`
2. Acesse [http://localhost:5173](http://localhost:5173)

### Rodando o Storybook

> [!CAUTION]
> Os componentes devem ser desenvolvidos utilizando o ambiente do Storybook.

1. Rode o comando `npm run storybook`
2. Acesse [http://localhost:6006](http://localhost:6006)

### Rodando os testes

- `npm run test:unit`: Roda os testes no modo `watch`
-  `npm run test`: Roda todos os testes
- `npm run test:ci`: Roda a cobertura dos testes

> [!CAUTION]
> Antes de fazer push rode o seguinte comando para evitar erros.

```
git remote set-head origin main
```

## 📝 Checklist

- [ ] Desenvolva cada issue em uma branch, após concluir a task faça Pull Request da branch seguindo o [checklist pré-code review](https://goldenrod-pen-c7d.notion.site/Checklist-pr-code-review-38238869fdff4a339f61917ae72f6706).
- [ ] Adicione o link do seu PR no canal Code Review no Discord para receber feedback de seus colegas
- [ ] Fazer diariamente Code Review do código dos seus colegas de trilha
