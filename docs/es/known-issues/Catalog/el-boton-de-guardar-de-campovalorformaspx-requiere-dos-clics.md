---
title: 'El botón de guardar de CampoValorForm.aspx requiere dos clics'
id: G0YtmOpdB4nNdw8w87ZNz
status: PUBLISHED
createdAt: 2022-02-16T13:28:52.922Z
updatedAt: 2024-02-16T20:26:25.672Z
publishedAt: 2024-02-16T20:26:25.672Z
firstPublishedAt: 2022-02-16T13:28:53.505Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: campovalorformaspx-save-button-requires-two-clicks
locale: es
kiStatus: No Fix
internalReference: 525616
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Actualmente, al acceder a la interfaz de usuario de la página del catálogo para guardar los valores de las especificaciones (https://myaccount.myvtex.com/admin/Site/CampoValor.aspx), el botón de guardar sólo funciona cuando se hace clic dos veces, lo que podría, en el caso de las conexiones de Internet más lentas, inducir a error al usuario de que los datos no se guardan.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)





## Simulación


1) Vaya a Categorías -> Especificaciones SKU -> Valores -> Guardar nuevo valor
2) Intente hacer clic en el botón de guardar después de introducir un valor una vez, no pasará nada
3) Haga clic por segunda vez y los datos se guardarán





## Workaround


Tenga en cuenta este comportamiento y haga clic exactamente dos veces (y no más) y/o utilice las API de nuestro catálogo para los valores de especificación: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-sku-specification

