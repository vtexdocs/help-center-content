---
title: 'Colocando un workspace en modo de producción'
id: 20rRlimYVKSsk6gwAaEceY
status: DRAFT
createdAt: 2018-02-22T01:36:37.169Z
updatedAt: 2020-03-13T21:24:57.591Z
publishedAt: 
firstPublishedAt: 2018-02-22T01:41:19.074Z
contentType: tutorial
productTeam: VTEX IO
author: authors_24
slug: colocando-un-workspace-en-modo-de-produccion
locale: es
legacySlug: colocando-un-workspace-en-modo-de-produccion
subcategory: Z46a6rHVAaAucoiW0skQQ
---


Una vez que el desarrollador esté seguro de sus cambios en el código, es decir, si su aplicación ya ha sido [instalada](https://help.vtex.com/es/tutorial/instalar-una-aplicaci%C3%B3n) y se ha probado, puede colocar el workspace en modo de producción.

Esto significa que, a partir de ese momento, este workspace estará listo para recibir tráfico.

La principal diferencia causada por el modo de producción en el comportamiento de IO es la manera de servir algunos archivos estáticos. Por ejemplo, JavaScript es minificado para ganar eficiencia, pero en ese modo se pierde el hot module replacement.

Para ello, utilice el siguiente comando:

`vtex workspace production true`
