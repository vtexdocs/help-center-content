---
title: 'Cómo crear una app multilingüe'
id: 7kxGvpbS8MkaMAS4UqIoKs
status: ARCHIVED
createdAt: 2018-03-06T15:12:14.213Z
updatedAt: 2020-03-13T21:24:57.355Z
publishedAt: 
firstPublishedAt: 2018-03-06T15:46:31.018Z
contentType: tutorial
productTeam: VTEX IO
author: 1iryp847AQgmKGKIASeW8Y
slug: como-construir-um-app-multilingue
locale: es
legacySlug: como-construir-um-app-multilingue
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

Todas las aplicaciones VTEX deben estar preparadas para mostrarse en múltiples idiomas. Eso quiere decir que todos los mensajes que aparecerán en las pantallas, incluyendo mensajes de error, deben estar en un archivo separado según las especificaciones de la funcionalidad de _localization_ del VTEX IO. 

Recomendamos crear todas las apps en inglés, portugués y español para aprovechar al máximo el ecosistema de clientes VTEX. Siga los siguientes pasos para utilizar este recurso:

1. En la carpeta `/react` cree una carpeta llamada `/locales` (si ya no existe). Esta carpeta debe contener los archivos con las strings de mensajes utilizadas por el código React
 
2. Cree un archivo con nombre según el código IETF de cada idioma que se va a utilizar. Por ejemplo: `pt-BR.json`, `en-US.json`, `es-ES.json`, etc. Este archivo sólo debe contener un objeto anónimo con pares clave-valor según el ejemplo siguiente:


``` 
{ 
"getting-started.greeting": "Bem-vindo ao seu primeiro App VTEX!",
...
}
```

La clave es el nombre universal de su mensaje, que puede ser referenciado por el código utilizando la tag `FormattedMessage`:

```
...
<h1>
  <FormattedMessage id="getting-started.greeting"/>
</h1>
...
```

La app va a asumir automáticamente el idioma de la tienda donde se está ejecutando y llamará a los mensajes correspondientes.

Si desea ver un código que se ejecuta de esta manera, el app de ejemplo [Render Getting Started](https://github.com/vtex-apps/render-getting-started) que demuestra este recurso en acción.
