---
title: 'App de Admin: animação de Loading'
id: 8jxf1b43IW6QSg4IegCwY
status: ARCHIVED
createdAt: 2018-08-09T21:18:03.210Z
updatedAt: 2020-03-13T21:24:58.159Z
publishedAt: 
firstPublishedAt: 2018-08-09T21:48:41.449Z
contentType: tutorial
productTeam: VTEX IO
author: 5dYWGfGKUwkI86Gomk6AcQ
slug: admin-app-loading-animacao
locale: pt
legacySlug: admin-app-loading-animacao
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

## Barra de carregamento

Você pode utilizar esses dois eventos para iniciar ou parar a animação da topbar do admin:

```
componentDidMount() {
    window.postMessage({ action: { type: 'START_LOADING' } }, '*')

    this.handleGetData()
    .then(() => {
      window.postMessage({ action: { type: 'STOP_LOADING' } }, '*')
    })
  }
```

## Spinner

Para uma animação de spinner, você pode usar esse componente do react que utiliza o spinner padrão do Styleguide da VTEX:

```
import React, { Component } from 'react'
import {Spinner} from 'vtex.styleguide'

class PageLoading extends Component {
  render() {
    const style = {
      top: '0',
      left: '0',
    }
    const innerstyle = {
      top: '50%',
      left: '50%',
    }
    return (
      <div
        className="fixed w-100 h-100 tc bg-white-80 z-999 loading-container"
        style={style}
      >
        <div
          className="fl pa3 absolute loading-inner-container"
          style={innerstyle}
        >
          <Spinner />
        </div>
      </div>
    )
  }
}
export default PageLoading
```

Apenas lembre de adicionar `"vtex.styleguide": "4.x"` ou uma versão mais nova nas dependências do seu manifest.json

