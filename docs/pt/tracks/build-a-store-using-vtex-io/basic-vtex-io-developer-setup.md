---
title: 'Setup básico para desenvolver no VTEX IO'
id: 4XLbAUPdoJppKyG0QfoyCr
status: ARCHIVED
createdAt: 2019-02-19T19:29:58.171Z
updatedAt: 2020-03-13T21:24:44.619Z
publishedAt: 
firstPublishedAt: 2019-02-19T19:30:01.688Z
contentType: trackArticle
productTeam: VTEX IO
slug: setup-basico-para-desenvolver-no-vtex-io
locale: pt
trackId: 5qJr8BIQXAKec9CpBWrTNv
trackSlugPT: crie-uma-loja-usando-vtex-io
---

Todo o desenvolvimento na plataforma VTEX começa com o [Toolbelt do VTEX IO](https://github.com/vtex/toolbelt), nossa CLI que permite fazer login, gerenciar apps instaladas e desenvolver novas.

## Instale o Node e o Toolbelt do VTEX IO

Primeiro, você precisa garantir que seu computador tenha o [Node.js v8.0.0 ou uma versão mais recente](https://nodejs.org/en/download/) instalada. Então, use `npm`, o gerenciador de pacotes node, para instalar globalmente o comando `vtex`:

```
$ npm install --global vtex
```

Para confirmar que a instalação ocorreu normalmente, execute o comando "vtex", que deverá mostrar um texto de ajuda com todos os comandos disponíveis.

## Faça login na sua conta VTEX

Agora, você pode entrar em sua conta VTEX usando o comando `vtex login`.

```
$ vtex login myaccount
```

Isso abrirá uma janela do navegador que solicitará suas credenciais.

Quando estiver logado, você pode usar o comando `vtex whoami` para descobrir qual *conta* e *workspace* está usando atualmente.

![Command Line](https://images.ctfassets.net/alneenqid6w5/31AVvcWcRpL1CoKdUyARyu/9ea4d722d8955bb580a76402507e4013/Command_Line.svg)

>ℹ️ Dica: Você pode configurar seu terminal para exibir sua conta e workspace atuais automaticamente. A maneira mais fácil de fazer isso é usar nossos [dotfiles](https://github.com/vtex/dotfiles), que configuram automaticamente  a [Fish Shell](https://fishshell.com/) e adicionam uma [função de prompt](https://github.com/vtex/dotfiles/blob/master/fish/functions/fish_prompt.fish) para você.

## Workspaces: seu ambiente de desenvolvimento isolado

Ao usar o VTEX IO, toda interação com uma conta acontece em um __workspace__, uma versão isolada de sua loja. Existe um workspace __master__, que serve tráfego público na loja por padrão. __Sempre que um novo workspace é criado, ele é baseado no workspace principal. Quaisquer alterações no workspace master são refletidas automaticamente em todos os outros workspaces__.

Por padrão, quando efetua login em uma loja, você está no workspace `master`. Você pode ver as apps instaladas nesse workspace usando o comando `vtex list` (ou o atalho `vtex ls`).

```
$ vtex ls
```

![Command Line vtex ls](https://images.ctfassets.net/alneenqid6w5/4AH5vzt1JfOCzIDtB0fRvR/110dda0479f9aa9891062ece2766837f/Command_Line_vtex_ls.svg)

## Criando seu próprio workspace

Você pode [ler mais sobre workspaces aqui](https://help.vtex.com/tutorial/workspace-visao-geral--56BLo7BI6sCoz6G3N7sYTi), mas por enquanto lembre-se que sempre que você quiser testar algo ou começar a desenvolver, basta criar seu próprio workspace usando o comando `use`:

```
$ vtex use seunome
```

Isso muda o seu toolbelt para um workspace chamado `seunome`, e o cria se ele não existir.

>ℹ️ Dica: Você pode alternar para (*e redefinir*) um workspace master em um único comando com a flag `-r`. Isso é útil se você quiser começar do zero no `master`.

Os workspaces podem ser nomeados arbitrariamente, mas geralmente é conveniente atribuir o seu próprio nome quando você deseja desenvolver em seu ambiente.

![command line workspace](https://images.ctfassets.net/alneenqid6w5/1Urbt6L0XfNEWukSvdKRdK/41e7e9c9f900fb96ddf5fc3aa6d7c2af/command_line_workspace.svg)

Agora você tem seu próprio workspace. Você pode rodar `vtex list` novamente e observar que as apps instaladas espelham aquelas em `master`. Agora, vamos "linkar" uma versão local do tema da loja para que você possa começar a editá-la.
