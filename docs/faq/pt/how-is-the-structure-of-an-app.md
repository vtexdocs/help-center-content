---
title: 'Como é a estrutura de uma app?'
id: 3K38eTAV8kK0goaUycoiey
status: DRAFT
createdAt: 2018-02-21T22:54:14.001Z
updatedAt: 2020-03-06T13:59:38.902Z
publishedAt: 
firstPublishedAt: 2018-02-21T22:55:21.295Z
contentType: frequentlyAskedQuestion
productTeam: VTEX IO
author: authors_24
slug: como-e-a-estrutura-de-uma-app
legacySlug: como-e-a-estrutura-de-uma-app
---

O comando `vtex init` gera a estrutura básica de arquivos e pastas da sua app.

Atualmente, esta é a estrutura gerada por esse comando:

```Shell
.
├── manifest.json
├── pages
│   └── pages.json
└── react
    └── index.js
```

Ou seja, a estrutura básica é composta pelo arquivo __manifest.json__ e pela pasta react, que contém os arquivos __index.js__ e __render.js__.

### manifest.json

O arquivo __manifest.json__ tem as informações sobre a sua app, tais como nome, versão e descrição.

Ele tem a seguinte estrutura:

```
{
  "name": "{NomeApp}",
  "vendor": "{NomeVendor}",
  "version": "0.1.0",
  "title": "{TituloApp}",
  "description": "test",
  "mustUpdateAt": "2018-11-28",
  "categories": [],
  "registries": [
    "smartcheckout"
  ],
  "settingsSchema": {},
  "dependencies": {},
  "builders": {
    "react": "1.x",
    "pages": "0.x"
  }
}
```

### index.js

O arquivo __index.js__ é o componente React mínimo que, por padrão, é criado inicialmente em sua estrutura de arquivos.

Ele tem a seguinte estrutura:

```
export default function HelloWorld() {
  return (
    <div><h1>Hello world!</h1></div>
  )
}
```

### pages.json

O arquivo __pages.json__ declara quais componentes vão atender a quais rotas da app.

Ele já vem inicialmente preenchido com a rota `/index`, que serve o componente declarado em __index.js__.

O pages.json é criado com a seguinte estrutura:

```
{
  "pages": {
    "index": {
      "path": "/index"
    }
  },
  "extensions": {
    "index": {
      "component": "index"
    }
  }
}
```
