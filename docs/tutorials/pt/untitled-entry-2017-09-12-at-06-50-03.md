---
title: 'VTEX IO - Sumário'
id: 7wE4UAy6Y0sMKaisYUCy4K
status: DRAFT
createdAt: 2017-09-12T18:50:03.899Z
updatedAt: 2020-03-06T13:59:20.443Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: VTEX IO
author: 
slug: vtex-io-sumario
locale: pt
legacySlug: vtex-io-sumario
subcategory: 
---

# Introdução
- O que é o VTEX IO
- Por que criamos o VTEX IO

# Primeiros passos para começar a desenvolver
- [O que eu preciso saber para começar a desenvolver no VTEX IO](/pt/tutorial/o-que-eu-preciso-saber-para-comecar-a-desenvolver-no-vtex-io)
- [O que é a CLI](/pt/tutorial/o-que-e-a-cli-do-vtex-io)
- [Instalar o npm](/pt/tutorial/instalar-o-npm)

## Instalação da CLI
- [Instalar a CLI via npm](/pt/tutorial/instalar-a-cli-via-npm)
- [Instalar a CLI via yarn](/pt/tutorial/instalar-a-cli-via-yarn)
- [O que é uma conta](/pt/tutorial/o-que-e-uma-conta)
- [Fazer login na conta da loja](/pt/tutorial/fazer-login-na-conta-da-loja)

# Criando sua primeira app com o VTEX IO
## Workspaces
- [O que é um workspace](/pt/tutorial/o-que-e-um-workspace)
- [Criar um workspace de desenvolvimento](/pt/tutorial/criar-um-workspace-de-desenvolvimento)
- [Mudar para um workspace de desenvolvimento](/pt/tutorial/mudar-para-o-workspace-de-desenvolvimento)
- [Listar workspaces da conta](/pt/tutorial/listar-workspaces-da-conta)

## Apps
- [O que é uma app](/pt/tutorial/o-que-e-uma-app)
- [Apps pré-instaladas](/pt/tutorial/apps-pre-instaladas)
- [Listar apps instaladas na loja](/pt/tutorial/listar-apps-instaladas-na-loja)
- Anatomia de uma app
- Tipos de app - frontend (Render) x backend (Service) x GraphQL
- [App privada x app pública](/pt/tutorial/app-privada-x-app-publica)

## Link / criando sua app
- [O que significa linkar uma app](/pt/tutorial/o-que-significa-linkar-uma-app)
- [Criar um stub da sua app (vtex init)](/pt/tutorial/criar-um-stub-da-sua-app-vtex-init)
- [Linkar sua app em desenvolvimento](/pt/tutorial/linkar-sua-app-em-desenvolvimento)
- Criar uma app de Render estática
- Adicionar dados na sua app com GraphQL
- Usar os dados no Render com GraphQL

## Modo de produção
- [O que é o modo de produção](/pt/tutorial/o-que-e-o-modo-de-producao)
- [Colocar um workspace em modo de produção](/pt/tutorial/colocar-um-workspace-em-modo-de-producao)

## Publicação
- [O que significa publicar uma app](/pt/tutorial/o-que-significa-publicar-uma-app)
- [Publicar a app no registro da conta atual](/pt/tutorial/publicar-a-app-no-registro-da-conta-atual)
- [Publicar a app no Registro público](/pt/tutorial/publicar-a-app-no-registro-publico)

## Instalação
- [O que significa instalar uma app](/pt/tutorial/o-que-significa-instalar-uma-app)
- [Instalar a app](/pt/tutorial/instalar-a-app)
- [Acessar a app](/pt/tutorial/acessar-a-app)
- [Instalar uma app de um Registro privado](/pt/tutorial/instalar-uma-app-de-um-registro-privado)

## Promoção de workspace
- [O que significa promover um workspace](/pt/tutorial/o-que-significa-promover-um-workspace)
- [Promover seu workspace para master](/pt/tutorial/promover-seu-workspace-para-master)
- [É possível alterar dados direto no workspace master?](/pt/tutorial/e-possivel-alterar-dados-direto-no-workspace-master)

# A arquitetura do VTEX IO
- Como está organizada  a arquitetura do VTEX IO
- O que faz o sistema Apps
- [O que é o Registro](/pt/tutorial/o-que-e-o-registro)
- [O que faz o sistema VBase](/pt/tutorial/o-que-faz-o-sistema-vbase)
- Como acontece o roteamento
- O que são builders
- O que é o Render

# Dominando os comandos da CLI
- Ver opções de comando na CLI
- Promover um workspace para master
- Desinstalar uma app
- Desfazer um link
- Ver lista de dependências do workspace
- Atualizar dependências do workspace
- Criar um projeto render bootstrap
- Mudar de workspace
- Deletar um workspace
- Instalar uma app
- Publicar uma app
- Colocar um workspace em modo de produção
- Listar workspaces atrelados à conta
- Listar apps instaladas na loja
- Mudar para outra conta VTEX
- Criar um workspace de desenvolvimento

---

O primeiro passo para desenvolver no VTEX IO é instalar nossa CLI (interface de linha de comandos).

Uma das maneiras de fazer isso é por meio do [npm](https://www.npmjs.com).

Então, se você não tem o npm instalado no seu computador, comece por aí.

Para instalá-lo, basta fazer download em [https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm) e seguir as instruções.

Depois que o npm estiver instalado, você já pode [instalar a CLI do VTEX IO](/pt/tutorial/instalar-a-cli-via-npm).

---

Para desenvolver no VTEX IO, é recomendável o conhecimento de algumas tecnologias.

## Para front-end
- ReactJS;
- GraphQL.
 
## Para back-end
- TypeScript;
- Node.

---

O primeiro passo para desenvolver no VTEX IO é instalar nossa CLI.

É no terminal, por meio de comandos simples como `vtex login` e `vtex link`, que você lida com sua conta e suas apps, e realiza todas as ações necessárias para testar e publicar seu código.

Para instalar a CLI, entre no terminal e digite `npm i -g vtex`.

Com isso, você instala a CLI do VTEX IO de maneira global e já pode [fazer login em sua conta](/pt/tutorial/fazer-login-na-conta-da-loja).

---

Para fazer login na conta da loja, entre no terminal e digite:

`vtex login`

O terminal vai solicitar o Account, ou seja, o nome da conta da loja.

![vtex login](//images.contentful.com/alneenqid6w5/rs5YFeBAtiYG4KuwcOe8Y/91406e5bfbcbad8ce3efbb56b5a31848/vtex__login.png)

Após inserir o Account, digite a senha, se necessário, e pronto. Você fez login na sua conta!

---

Para começar a desenvolver, você deveria criar um workspace de desenvolvimento.

Para isso, basta digitar:

`vtex workspace create <name>`

onde `<name>` deve ser substituído pelo nome que você deseja dar ao workspace.

Para usá-lo, basta [mudar para esse workspace](/pt/tutorial/mudar-para-o-workspace-de-desenvolvimento).

---

Depois de criar um workspace, você pode usá-lo por meio do seguinte comando:

`vtex use <name>`

onde `<name>` é o nome do workspace desejado.

Esse comando faz com que todas as suas operações passem a ocorrer no novo workspace.

Para voltar ao workspace master, o procedimento é o mesmo:

`vtex use master`

![use master](//images.contentful.com/alneenqid6w5/4SK7JvVupO0sOoGE2As4Yc/e578222b656c74a3b082a6b498a3f04e/use_master.png)

---

Depois de fazer login e criar um workspace de desenvolvimento, é hora de criar a estrutura inicial de pastas e arquivos da sua app.

O VTEX IO faz isso automaticamente para você.

Basta navegar até a pasta do seu computador onde você deseja que fique a pasta raiz e digitar o comando abaixo:

`vtex init`

Com isso, o IO fará algumas perguntas que serão usadas para definir parâmetros importantes dos seus arquivos:
- __What's your VTEX app name?__ - O nome da sua app. Ele deve ser composto apenas por números, letras em caixa baixa, underscores ou hífens.
- __What's your VTEX app vendor?__ - O nome da loja ou da agência que está desenvolvendo. Deve ser composto apenas por números, letras em caixa baixa, underscores ou hífens.
- __What's your VTEX app title?__ - O título da app. Aqui você pode usar caixa alta, espaços etc.
- __What's your VTEX app description?__ - Uma descrição da sua app.

O IO informa que seu arquivo manifest.js foi gerado com sucesso (entenda abaixo o que é ele), e pergunta o serviço VTEX que você deseja usar. Este serviço é o responsável pelo desenvolvimento de apps para front-end.

Pronto, sua estrutura de pastas e arquivos está criada.
Agora vamos entendê-la [em detalhes](/pt/tutorial/quais-pastas-e-arquivos-sao-criados-pelo-vtex-init).

---

Para linkar sua app e começar a ver as mudanças no seu código em tempo real, digite o seguinte comando no terminal:

`vtex link`

Com isso, o IO realiza uma série de tarefas por conta própria até que, se tudo ocorrer sem problemas, a seguinte mensagem é exibida no terminal:

__Build finished successfully__

Para confirmar que deu tudo certo, entre no browser e acesse a seguinte URL:

`https://{WORKSPACE}--{ACCOUNT}.myvtex.com/hello`

{WORKSPACE} deve ser substituído pelo nome do seu workspace de desenvolvimento, e {ACCOUNT} deve ser substituído pelo nome da sua loja.

Se a tela abaixo está sendo exibida, sua app está linkada.

![Indexjs](//images.contentful.com/alneenqid6w5/6x1Vx9RVKgUCsKscmEqSky/df5c3183c374710d2017b87d63fefff6/Indexjs.png)

Entre no arquivo `Index.js` e altere alguma coisa. Salve e veja a mudança no browser!

---

Quando você estiver satisfeito com uma versão da sua app, é hora de publicá-la.

Para isso, use o comando a seguir:

`vtex publish`

Isso fará com o que a app em que você está trabalhando no momento fique disponível para ser usada em produção.

O próximo passo é [instalar a app](/pt/tutorial/instalar-a-app).

---

Uma vez que sua app esteja [publicada](/pt/tutorial/publicar-a-app), você deve seguir os passos abaixo:

1. Crie um workspace novo com o comando `vtex workspace create <name>`;
2. Mude para esse workspace com o comando `vtex use <name>`;
3. Instale sua app com o comando abaixo:

`vtex install`

Em seguida, coloque o workspace em [modo de produção](/pt/tutorial/colocar-um-workspace-em-modo-de-producao).

---

Se sua app já foi [instalada](/pt/tutorial/instalar-a-app) e testada, você pode colocar o workspace em modo de produção.

Para isso, use o comando abaixo:

`vtex workspace production true`

O próximo e último passo é [promover o workspace para produção (master)](/pt/tutorial/promover-seu-workspace-para-master).

---

Se sua app já está em [__modo de produção__](/pt/tutorial/colocar-um-workspace-em-modo-de-producao), ela pode ser promovida para produção, ou seja, colocada em master, o que finalmente vai torná-la disponível para o público.

Para fazer isso, basta usar o seguinte comando:

`vtex workspace promote`
