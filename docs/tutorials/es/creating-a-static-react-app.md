---
title: Crear una app React estática
id: 1obR8EKcuMCqouWMMksIM2
status: DRAFT
createdAt: 2018-02-21T23:03:04.114Z
updatedAt: 2020-03-13T21:24:58.324Z
publishedAt: 
firstPublishedAt: 2018-02-21T23:04:32.427Z
contentType: tutorial
productTeam: VTEX IO
author: authors_24
slug: crear-una-app-react-estatica
legacySlug: crear-una-app-react-estatica
subcategory: Z46a6rHVAaAucoiW0skQQ
---

El servicio __react__ del VTEX IO permite crear aplicaciones front-end en React.

Vea el paso a paso para crear una primera aplicación de ejemplo:

1. Después de usar el comando `vtex init`, usted tendrá la estructura básica de carpetas y archivos de la aplicación

2. Cree un nuevo archivo js (por ejemplo, _react/home.js_) y construya en él su primer componente en React

3. Abra el archivo pages.json y cree un nuevo _placeholder_ (por ejemplo, _home_) dentro del objeto `extensions`, usando el mismo modelo del _placeholder_ ya existente (_index_)

4. Defina el nombre del componente (_/home.js_) y la ruta que le servirá (por ejemplo, _/home_).

Con eso, la estructura del pages.json quedaría así:

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
Su flujo de creación de aplicaciones _front-end_ con el VTEX IO seguirá siempre este modelo:

- Crear el componente en React;
- Dentro de `extensions`, declarar el _placeholder_;
- Dentro de `pages`, declarar la ruta que renderizará el _placeholder_.
