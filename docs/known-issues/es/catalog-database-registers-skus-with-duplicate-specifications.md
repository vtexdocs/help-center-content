---
title: 'La base de datos del catálogo registra las SKU con especificaciones duplicadas'
id: zs3Gy1NQ9EYLpAlQ3aXXe
status: PUBLISHED
createdAt: 2022-03-04T18:24:48.159Z
updatedAt: 2022-11-25T21:45:32.139Z
publishedAt: 2022-11-25T21:45:32.139Z
firstPublishedAt: 2022-03-04T18:24:48.487Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-base-de-datos-del-catalogo-registra-las-sku-con-especificaciones-duplicadas
locale: es
kiStatus: Backlog
internalReference: 536133
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En algunas situaciones aleatorias, la base de datos del catálogo permite duplicar los valores de una especificación en la misma SKU.

Esto hace que el Portal no considere esta SKU como una variación, lo que provoca un comportamiento inesperado, como vistas erróneas en el Portal, que no funcione el controlador Let Me Know o que las SKU no obedezcan a la configuración de visualización de categorías.



## Simulación


No se puede simular. La duplicación sólo es visible desde la base de datos (no es visible desde la API o la interfaz de usuario)



## Workaround


N/A

