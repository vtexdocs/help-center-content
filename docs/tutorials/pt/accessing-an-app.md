---
title: 'Acessar uma app'
id: 3ZTGx0IWsokiE2W6S2Ww6O
status: DRAFT
createdAt: 2018-02-22T02:04:08.027Z
updatedAt: 2020-03-13T21:24:58.133Z
publishedAt: 
firstPublishedAt: 2018-02-22T02:05:44.120Z
contentType: tutorial
productTeam: VTEX IO
author: authors_24
slug: acessar-uma-app
locale: pt
legacySlug: acessar-a-app
subcategory: Z46a6rHVAaAucoiW0skQQ
---

Depois que uma app é instalada em um determinado workspace, ela passa a ser acessível por esse workspace (e apenas por ele).

Você pode acessá-la diretamente por duas URLs diferentes: a __URL canônica__ e a __rota pública__.

### URL canônica

A URL canônica pode acessar qualquer path a que a aplicação responda, mesmo que você não declare nenhuma rota pública com aquele nome.

Toda URL canônica exige permissão de acesso.

O formato da URL canônica é o seguinte:

`{app-name}`.`{vendor}`.vtex.io/`{account}`/`{workspace}`/*

- `{app-name}`: o nome da sua app.
- `{vendor}`: assinatura do responsável pelo desenvolvimento da app.
- `{account}`: a conta da loja.
- `{workspace}`: o workspace no qual você está trabalhando.
- O asterisco (\*) deve ser substituído por qualquer path conhecido pela app.

### Rota pública

Diferentemente das URLs canônicas, rotas públicas têm que ser declaradas explicitamente.

Além disso, elas não têm nenhum controle de acesso.

A rota pública tem o seguinte formato:

`{workspace}`--`{account}`.myvtex.com/*

- `{workspace}`: o workspace no qual você está trabalhando.
- `{account}`: a conta da loja.
