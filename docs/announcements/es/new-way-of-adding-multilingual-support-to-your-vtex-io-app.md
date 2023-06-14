---
title: 'Nueva forma de organizar los archivos de traducción en su app IO'
id: 5ihajfKsWkq6Mc0gm2cQUK
status: DRAFT
createdAt: 2018-12-13T19:55:38.654Z
updatedAt: 2020-03-13T21:24:39.328Z
publishedAt: 
contentType: updates
productTeam: VTEX IO
author: TnXcuQydAAOuwWACo864E
slug: nueva-forma-de-organizar-los-archivos-de-traduccion-en-su-app-io
legacySlug: nueva-forma-de-organizar-los-archivos-de-traduccion-en-su-app-io
announcementImageID: ''
announcementSynopsisES: 'En la nueva versión de VTEX.IO, los archivos JSON de traducción deben permanecer en una carpeta en el directorio raíz.'
---

En breve, vamos a lanzar una nueva versión de VTEX.IO que, entre otras mejoras, trae una forma más eficiente de servir archivos de localización. Este nuevo método utiliza el builder `messages 0.x` para crear una nueva estructura de carpetas. En ella, los archivos JSON de traducción se colocan en la carpeta `messages`, que se encuentra en el directorio raíz.


## ¿Cuál es el cambio?
__Antes, las carpetas se organizaban de la siguiente manera:__

```/
 /
 +-- GraphQL
 +-- React
     |
     +-- Locales
         |
         +--en_us.json
         +--pt_bt.json
     +-- ...

```


__Con el nuevo formato de organización, las carpetas deberán seguir el siguiente modelo:__

```/
 /
 +-- GraphQL
 +-- React
 +-- Messages
     |
     +--en_us.json
     +--pt_bt.json
     +-- ...

```


## ¿Cuál es el impacto?
__Por el momento, no hay impacto.__ El método de la versión más reciente de VTEX.IO (que requiere la inclusión de los archivos de localización en la carpeta `react/locales`) todavía se puede utilizar normalmente. Pero, __cuando se lanza la nueva versión, sólo el método nuevo (usando el builder `messages 0.x` y la nueva estructura de carpetas) será soportado__.



## Cómo realizar la actualización
Para utilizar el nuevo método, basta con seguir dos sencillos pasos:

1. Actualice el `manifest.json` de su aplicación para incluir el builder `messages 0.x`.
2. Mueva la carpeta `locales` a la raíz y cambie su nombre a `messages`.
