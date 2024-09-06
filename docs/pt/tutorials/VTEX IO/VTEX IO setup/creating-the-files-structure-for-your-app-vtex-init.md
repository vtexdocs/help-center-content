---
title: 'Criar a estrutura de arquivos da sua app (vtex init)'
id: 7MEnnC356Me8yswoK4o0e
status: ARCHIVED
createdAt: 2018-02-21T23:00:47.117Z
updatedAt: 2020-03-13T21:24:59.887Z
publishedAt: 
firstPublishedAt: 2018-02-21T23:02:06.319Z
contentType: tutorial
productTeam: VTEX IO
author: authors_24
slug: criar-a-estrutura-de-arquivos-da-sua-app-vtex-init
locale: pt
legacySlug: criar-a-estrutura-de-arquivos-da-sua-app-vtex-init
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

Depois de fazer login e criar um workspace de desenvolvimento, é hora de criar a estrutura inicial de pastas e arquivos da sua app.

O VTEX IO faz isso automaticamente para você. Basta navegar até a pasta do seu computador onde você deseja que fique a pasta raiz e digitar o comando abaixo:

`vtex init`

Com isso, o IO fará algumas perguntas que serão usadas para definir parâmetros importantes dos seus arquivos, como:

- __What's your VTEX app name?__: o nome da sua app. Ele deve ser composto apenas por números, letras em caixa baixa, underscores ou hífens.

- __What's your VTEX app vendor?__: o nome da loja ou da agência que está desenvolvendo. Deve ser composto apenas por números, letras em caixa baixa, underscores ou hífens.

- __What's your VTEX app title?__ -> O título da app. Aqui você pode usar caixa alta, espaços etc.

- __What's your VTEX app description?__ -> Uma descrição da sua app.

O IO informa que seu arquivo manifest.json foi gerado com sucesso e pergunta o serviço VTEX que você deseja usar.

>ℹ️ Para desenvolvimento front-end, o serviço que deve ser usado é o react.

Pronto, sua estrutura de pastas e arquivos está criada.
