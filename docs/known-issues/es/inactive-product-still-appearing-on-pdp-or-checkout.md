---
title: 'El producto inactivo sigue apareciendo en la PDP o en la caja'
id: 567gsup9oQGoMmj5utCra9
status: PUBLISHED
createdAt: 2022-03-14T19:50:43.917Z
updatedAt: 2022-11-25T21:46:31.635Z
publishedAt: 2022-11-25T21:46:31.635Z
firstPublishedAt: 2022-03-14T19:50:44.487Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: el-producto-inactivo-sigue-apareciendo-en-la-pdp-o-en-la-caja
locale: es
kiStatus: Backlog
internalReference: 542264
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Desactivar sólo el producto por API hace que el producto permanezca activo para el PDP y la caja



## Simulación



- Dado un producto activo, enviar vía API la bandera `isActive` como **false**.
- Ver que en el administrador del catálogo el producto está escrito como inactivo
- Abrir la información del índice del producto.
- Ver que el producto aún está disponible para PDP y checkout



## Workaround


Desactivar todas las referencias de productos.

