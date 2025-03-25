---
title: 'Rendering more than one component with the same route'
id: 1ZmJCD1eycemCeeKoCoa8e
status: ARCHIVED
createdAt: 2018-02-21T23:07:00.476Z
updatedAt: 2020-03-06T13:57:14.211Z
publishedAt: 
firstPublishedAt: 2018-02-21T23:07:44.321Z
contentType: tutorial
productTeam: VTEX IO
author: authors_24
slugEN: rendering-more-than-one-component-with-the-same-route
locale: en
legacySlug: rendering-more-than-one-component-with-the-same-route
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

In the __pages.json__ file, you must declare a route to serve each component. So how would you render more than one component with the same route?

To do this, you must use a parent/childs structure, by importing child components into a parent component.

### Example

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

When the "/index" route renders the index.js component, any child component imported into it (in this case child.js) will also be rendered.
