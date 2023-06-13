---
title: Publicar e instalar
id: 4q2yXHthMsey0iEuMUuCGi
status: DRAFT
createdAt: 2018-04-26T19:31:45.275Z
updatedAt: 2020-03-13T21:24:44.370Z
publishedAt: 
firstPublishedAt: 2018-05-03T20:34:34.311Z
contentType: trackArticle
productTeam: VTEX IO
slug: publicar-e-instalar
trackId: 2qYWraccosS2ayg2kusaUo
trackSlugES: vtex-io-getting-started
---

Si desea que su aplicación esté disponible en la producción, __linkarla no es suficiente__. Para ello, la aplicación debe estar __instalada en el workspace master__. Pero no se puede instalar una aplicación que sólo existe en su ambiente local.

Cuando [publica](/es/faq/que-significa-publicar-una-app) una aplicación, usted la deja disponible para ser [instalada](/es/faq/que-significa-instalar-una-app) por otras personas, incluyendo usted.

## Publicar

Para publicar una aplicación en el registro de la cuenta en la que está trabajando, simplemente ejecute este comando:

`vtex publish`

## Instalar

Como usted ha publicado su aplicación sin [Modelo de Cobranza](/es/tutorial/modelos-de-cobranca-de-apps), sólo su cuenta puede instalarla. Para ello, hay que ejecutar:

`vtex install` si ya está en la carpeta de la aplicación

o

`vtex install {vendor}.{appName}` de lo contrario.
