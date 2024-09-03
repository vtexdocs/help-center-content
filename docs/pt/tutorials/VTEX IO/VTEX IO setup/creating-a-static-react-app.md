---
title: 'Criar uma app React estática'
id: 1obR8EKcuMCqouWMMksIM2
status: ARCHIVED
createdAt: 2018-02-21T23:03:04.114Z
updatedAt: 2020-03-13T21:24:58.324Z
publishedAt: 
firstPublishedAt: 2018-02-21T23:04:32.427Z
contentType: tutorial
productTeam: VTEX IO
author: authors_24
slug: criar-uma-app-react-estatica
locale: pt
legacySlug: criar-uma-app-react-estatica
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

O serviço __react__ do VTEX IO permite criar apps de front-end em React.

Veja o passo-a-passo para criar uma primeira app de exemplo:

1. Depois de usar o comando `vtex init`, você terá a estrutura básica de pastas e arquivos da app

2. Crie um novo arquivo .js (como _react/home.js_) e construa nele seu primeiro componente em React

3. Abra o arquivo pages.json e crie um novo placeholder (como _home_) dentro do objeto `extensions`, usando o mesmo modelo do placeholder já existente (_index_).

4. Defina o nome do componente (_/home.js_) e a rota que o servirá (como _/home_).

Com isso, a estrutura do pages.json ficaria assim:

```
{
  "pages": {
    "index": {
      "path": "/index"
    },
    "home": {
      "path": "/home"
    }
  },
  "extensions": {
    "index": {
      "component": "index"
    },
    "home": {
      "component": "home"
    },
  }
}
```

Seu fluxo de criação de apps front-end com o VTEX IO seguirá sempre este modelo:

- Criar o componente em React;
- Dentro de __extensions__, declarar o placeholder;
- Dentro de __pages__, declarar a rota que renderizará o placeholder.
