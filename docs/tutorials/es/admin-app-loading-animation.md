---
title: 'App de Admin: Animación de Loading'
id: 8jxf1b43IW6QSg4IegCwY
status: DRAFT
createdAt: 2018-08-09T21:18:03.210Z
updatedAt: 2020-03-13T21:24:58.159Z
publishedAt: 
firstPublishedAt: 2018-08-09T21:48:41.449Z
contentType: tutorial
productTeam: VTEX IO
author: 5dYWGfGKUwkI86Gomk6AcQ
slug: app-de-admin-animacion-de-loading
locale: es
legacySlug: 
subcategory: Z46a6rHVAaAucoiW0skQQ
---

## Barra de carga

Usted puede utilizar estos dos eventos para iniciar o detener la animación de la topbar del Admin:

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

Para una animación de spinner, es posible utilizar este componente de react que utiliza el spinner estándar del Styleguide de VTEX:

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

Recuerde añadir `"vtex.styleguide": "4.x"` o una versión más reciente en las dependencias de su manifest.json
