---
title: 'Setup inicial'
id: 3l6F07zCA0eyc2Ki2um8C8
status: ARCHIVED
createdAt: 2018-04-26T19:26:16.134Z
updatedAt: 2020-02-13T20:06:01.944Z
publishedAt: 
firstPublishedAt: 2018-04-26T21:15:32.167Z
contentType: trackArticle
productTeam: VTEX IO
slugEN: initial-setup
locale: pt
trackId: 
trackSlugPT: untitled-track
---

Antes de começar a desenvolver, certifique-se de que os passos abaixo foram cumpridos. Eles são pré-requisitos para criar apps com o VTEX IO.

## Instalar npm ou yarn

Você precisa ter o npm ou o yarn instalado na sua máquina. Ambos são gerenciadores de pacotes. E um dos dois é necessário para instalar a CLI do VTEX IO.

>ℹ️ Se você não está acostumado a trabalhar com gerenciadores de pacotes, entenda mais sobre essas ferramentas:
>
> 
>
> * [npm](https://www.npmjs.com/)
>
> * [yarn](https://yarnpkg.com/)
> 

## Instalar a CLI do VTEX IO

A CLI é uma interface de linha de comandos. É por meio dela, usando comandos simples, que você lidará com o seu account, seus workspaces e suas apps.

Pense na CLI como qualquer outro programa que você precisa instalar no seu computador. A única diferença é que, em vez de usar uma interface gráfica, você usará linhas de comando. 

Para instalar a CLI via __npm__, entre no terminal e digite `npm i -g vtex`.

Para instalá-la via __yarn__, entre no terminal e digite `yarn global add vtex`.

Com isso, você terá instalado a CLI do VTEX IO de maneira global e poderá fazer login em sua conta.

## Login

Tendo acesso a um account e à CLI do VTEX IO, você já pode fazer login.

Para isso, siga estes passos:
1. Abra o terminal de sua preferência.
2. Acesse a pasta do seu computador onde ficarão os arquivos da app.
3. Use o comando `vtex login`.

O sistema do VTEX IO vai pedir que você informe o account name, ou seja, o nome da conta. Feito isso, será aberta uma nova aba do seu browser, com uma janela para autenticação na conta da loja.

Uma vez autenticado, você pode fechar essa aba e retornar ao terminal. Se deu tudo certo, o sistema informará que você está logado, com uma mensagem como esta abaixo:

__info: Logged into `{AccountName}` as `{userEmail}` at workspace `master`__


