---
title: 'Conozca el nuevo sistema de traducción de VTEX IO'
id: CLDXiPt21R0R4lklbksqF
status: ARCHIVED
createdAt: 2019-02-18T21:18:44.129Z
updatedAt: 2020-03-13T21:24:39.126Z
publishedAt: 
contentType: updates
productTeam: VTEX IO
author: TnXcuQydAAOuwWACo864E
slugEN: vtex-ios-new-translation-system
locale: es
legacySlug: conozca-el-nuevo-sistema-de-traduccion-de-vtex-io
announcementImageID: ''
announcementSynopsisES: 'El nuevo Messages App (y los cambios en MessagesBuilder) facilitan y amplían la traducción de apps front y back-end.'
---

Estamos lanzando el nuevo __Messages App__ al mismo tiempo que implementamos cambios significativos en el `MessagesBuilder`. Las nuevas features atienden a las necesidades de los desarrolladores interesados en un sistema de traducción más completo, capaz de añadir soporte a varios idiomas (sea en aplicaciones front-end o respuestas de apps back-end).


## ¿Cómo era antes?
Desarrollar aplicaciones en varios idiomas siempre se consideró un proceso largo, especialmente con aplicaciones back-end. Mientras que las aplicaciones front-end se pueden traducir con bibliotecas de internacionalización (como `react-intl`), las apps back-end todavía requieren que cada string sea traducida en un JSON dentro de la carpeta `/messages`.

Además, es común que el soporte de idiomas esté limitado al conocimiento del desarrollador: es decir, rara vez va más allá de inglés, portugués, español y su lengua materna (si no es ninguna de estas).


## ¿Que ha cambiado?
__Messages App__ es responsable de la traducción de las strings de toda la plataforma de IO. En primer lugar, el trata de traducir el contenido de las traducciones definidas por el usuario. Después, va a buscar las traducciones de la propia aplicación (definidas en la carpeta `/messages`). Por último, todavía puede realizar un fallback en nuestro sistema automático de traducción.


## Principales ventajas del nuevo Messages App
- Permite tanto traducciones del desarrollador (humanas) y automáticas (máquina) para todas las strings en la plataforma de VTEX IO.
- Soporte a todos los idiomas disponibles en la web.
- Libera usted para enfocar en las strings más críticas, mientras que el sistema automático se encarga del resto.
- Entrada facilitada en mercados extranjeros.
- Ciclos de desarrollo más rápidos, posibilitados por la traducción automática.

Añada el __Messages App__ a su aplicación en VTEX IO usando [este artículo del Help (texto en inglés)](/en/tutorial/how-to-use-messages-on-your-io-apps).
