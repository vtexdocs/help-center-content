---
title: 'Renderizar más de un componente en la misma ruta'
id: 1ZmJCD1eycemCeeKoCoa8e
status: DRAFT
createdAt: 2018-02-21T23:07:00.476Z
updatedAt: 2020-03-06T13:57:14.211Z
publishedAt: 
firstPublishedAt: 2018-02-21T23:07:44.321Z
contentType: tutorial
productTeam: VTEX IO
author: authors_24
slug: renderizar-mas-de-un-componente-en-la-misma-ruta
locale: es
legacySlug: renderizar-mais-de-um-componente-na-mesma-rota
subcategory: Z46a6rHVAaAucoiW0skQQ
---

En el archivo __pages.json__, usted debe declarar una ruta para servir cada componente. Pero ¿cómo renderizar más de un componente en la misma ruta?

Para ello, es necesario utilizar una estructura de componente padre importando componentes hijos.

### Ejemplo

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
    <div>
      <ChildComponent />
    </div>
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

Cuando la ruta "/index" renderize el componente index.js, cualquier componente hijo importado dentro de él (en este caso, child.js) se renderizará también.
