---
title: "La importación de productos&SKUs no es compatible con 'lb'"
id: 1OjtnFf9MpY1IFzQa8Ua2t
status: PUBLISHED
createdAt: 2022-06-17T19:38:17.726Z
updatedAt: 2023-01-05T20:03:49.367Z
publishedAt: 2023-01-05T20:03:49.367Z
firstPublishedAt: 2022-06-17T19:38:18.052Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-importacion-de-productosskus-no-es-compatible-con-lb
kiStatus: Backlog
internalReference: 337860
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, la hoja de catálogo de Productos y SKUs no soporta la unidad de medida 'lb'. `/admin/Site/Relatorio_Skus.aspx`

En realidad se trata de una unidad de lb en nuestro SKU UI que es configurable:

 ![](https://vtexhelp.zendesk.com/attachments/token/IYCZqjQWduAKjhP73hd7Uqaho/?name=inline1704074446.png)

Sin embargo, la importación de productos&sku actualmente devuelve un mensaje de error cada vez que un usuario intenta importar cualquier sku que contenga este valor, independientemente de si los otros campos son válidos:

 ![](https://vtexhelp.zendesk.com/attachments/token/1v8a6RWRFaqwAHilwADBdnw7z/?name=inline802930792.png)







## Simulación


1) Establecer "lb" como unidad de medida de un sku

2) Exportar una hoja de productos y skus para este sku filtrado

3) Intente importar de nuevo haciendo un pequeño cambio en, digamos, el nombre del sku. Recibirá el error.







## Workaround


Establecer los valores a través de la API y/o directamente a través del administrador.

