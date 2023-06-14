---
title: Renderizar mais de um componente na mesma rota
id: 1ZmJCD1eycemCeeKoCoa8e
status: DRAFT
createdAt: 2018-02-21T23:07:00.476Z
updatedAt: 2020-03-06T13:57:14.211Z
publishedAt: 
firstPublishedAt: 2018-02-21T23:07:44.321Z
contentType: tutorial
productTeam: VTEX IO
author: authors_24
slug: renderizar-mais-de-um-componente-na-mesma-rota
legacySlug: renderizar-mais-de-um-componente-na-mesma-rota
subcategory: Z46a6rHVAaAucoiW0skQQ
---

No arquivo __pages.json__, você deve declarar uma rota para servir cada componente. Mas, então, como renderizar mais de um componente na mesma rota?

Para isso, você deve usar uma estrutura de componente pai importando componentes filhos.

### Exemplo

__child.js__
```
import React from 'react'

export default function ChildComponent () {
  return (
    <h1>Hello world!</h1>
  )
}
```

__index.js__
```
import React from 'react'
import ChildComponent from './child'

export default function HelloWorld () {
  return (
    <div><ChildComponent /></div>
  )
}
```

__pages/pages.json__
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

Quando a rota "/index" renderizar o componente index.js, qualquer componente filho importado dentro dele (neste caso, child.js) será renderizado também.
