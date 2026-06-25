---
title: "Fluxos de trabalho de colaboração"
createdAt: 2026-05-20T17:08:52.219Z
updatedAt: 2026-06-10T17:08:52.219Z
contentType: tutorial
productTeam: CMS
slugEN: collaboration-workflows
locale: pt
---

Ao colaborar com uma equipe, as [branches](https://help.vtex.com/en/docs/tutorials/managing-versions-and-branches) oferecem funcionalidades essenciais para facilitar os processos de edição e revisão de conteúdo. Elas permitem que vários colaboradores trabalhem juntos de forma eficiente, mantendo o controle de diferentes versões de conteúdo.

## Awareness multiusuário

Quando vários membros da equipe estão editando a mesma versão, o sistema exibe os avatares dos usuários no cabeçalho. Isso facilita identificar quem está ativo no documento naquele momento.

![multi-user-awareness-overview](https://vtexhelp.vtexassets.com/assets/docs/src/multi-user-awareness-1___efb04fe660bbcd9c627683189124a776.gif)

Além disso, no menu **Versões**, você pode ver quais usuários estão editando ativamente uma versão específica. Os avatares dos usuários ativos aparecem ao lado do nome da versão no painel lateral, ajudando as equipes a ficarem cientes das alterações em andamento e a evitar conflitos.

![multi-user-awareness-detail](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/cms/branching-and-versioning/collaboration-workflow-2.gif)

## Edição de múltiplos usuários dentro de uma branch

Quando vários usuários estão trabalhando na mesma versão de uma branch, o conteúdo é atualizado automaticamente sempre que alguém salva suas alterações. Isso garante que todos vejam a versão mais recente salva.

No entanto, alterações não salvas não estão protegidas. Se dois usuários editarem o mesmo conteúdo e um deles clicar em `Salvar`, a versão dele substituirá quaisquer alterações não salvas feitas pelo outro usuário.

Para evitar perder seu trabalho, use a [funcionalidade de awareness multiusuário](#awareness-multiusuário) para ver quem mais está editando. Você pode identificar usuários ativos pelos avatares deles e coordenar as respectivas alterações.

## Conteúdo da branch com atualização automática

As branches permanecem sincronizadas automaticamente com as últimas alterações publicadas na branch `main` por meio da funcionalidade de atualização automática. Isso garante que a versão da branch esteja sempre atualizada, sem sobrescrever as alterações feitas nela.  

Por exemplo, se você estiver editando uma **prateleira de produtos** na página inicial em uma branch chamada **Spring refresh**, e um colega publicar uma atualização de banner diretamente na `main`, sua branch **Spring refresh** incluirá automaticamente esse novo banner sem interromper ou impactar seu trabalho em andamento.  

O princípio central é que as alterações feitas na sua branch são sempre preservadas e nunca sobrescritas por atualizações na `main`.  

Se tanto você quanto seu colega atualizarem o mesmo conteúdo (por exemplo, a mesma prateleira de produtos), a atualização automática não se aplica. Em caso de conflito, o sistema mantém as alterações feitas na branch.
