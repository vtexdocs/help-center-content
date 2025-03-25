---
title: 'Anatomia de uma app'
id: 6vNKv0W0bCMQGYaOK6syWm
status: ARCHIVED
createdAt: 2017-11-21T18:43:50.020Z
updatedAt: 2020-03-06T13:55:14.486Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: VTEX IO
author: 
slugEN: the-apps-anatomy
locale: pt
legacySlug: anatomia-de-uma-app
subcategoryId: unknown-subcategory
---

O comando `vtex init` gera a estrutura básica de arquivos e pastas da sua app.

Atualmente, esta é a estrutura gerada por esse comando:

.
├── manifest.json
└── react
    ├── index.js
    └── render.json

Ou seja, a estrutura básica é composta pelo arquivo __manifest.json__ e pela pasta react, que contém os arquivos __index.js__ e __render.js__.

### manifest.json

O arquivo __manifest.json__ tem as informações sobre a sua app, tais como nome, versão e descrição.

Ele tem a seguinte estrutura:

```
{
			  "name": "{appName}",
			  "vendor": "{vendorName}",
			  "version": "0.1.0",
			  "title": "{appTitle}",
			  "description": "test",
			  "mustUpdateAt": "2018-11-28",
			  "categories": [],
			  "registries": [
			    "smartcheckout"
			  ],
			  "settingsSchema": {},
			  "dependencies": {},
			  "builders": {
			    "render": "4.x"
			  }
			}
```

### index.js

O arquivo __index.js__ é o componente React mínimo que, por padrão, é criado inicialmente em sua estrutura de arquivos.

Ele tem a seguinte estrutura:

```
export default function HelloWorld () {
			  return (
			    <div>
			      <h1>Hello world!</h1>
			    </div>
			  )
			}
```

### render.json

O arquivo __render.json__ declara quais componentes vão atender a quais rotas da app.

Ele já vem inicialmente preenchido com a rota `/index`, que serve o componente declarado em __index.js__.

O render.json é criado com a seguinte estrutura:

```
{
			  "extensions": {
			    "index": {
			      "component": "./index.js",
			      "route": {
			        "path": "/index"
			      }
			    }
			  }
			}
```
