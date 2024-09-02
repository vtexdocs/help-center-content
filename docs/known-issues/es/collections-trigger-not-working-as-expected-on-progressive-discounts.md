---
title: 'El activador de cobros no funciona como se esperaba en los Descuentos Progresivos'
id: 78b9yQnTm1bxgOM2cfMlql
status: PUBLISHED
createdAt: 2023-11-06T16:42:53.081Z
updatedAt: 2023-11-06T16:42:53.722Z
publishedAt: 2023-11-06T16:42:53.722Z
firstPublishedAt: 2023-11-06T16:42:53.722Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: el-activador-de-cobros-no-funciona-como-se-esperaba-en-los-descuentos-progresivos
locale: es
kiStatus: Backlog
internalReference: 930849
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al crear una promoción de descuento progresivo el cliente puede establecer el activador por colección, por una lista de SKU o por ambas.

Sin embargo, cuando ambos están configurados en la promoción, la condición que debería ser o bien la colección o bien la lista de SKU desencadena la promoción se comporta en realidad como si sólo la lista de SKU fuera el desencadenante.



## Simulación



1. Crear una promoción de descuento progresivo;
2. En los activadores de la promoción, seleccione una colección y una lista de SKU con un sku que no pertenezca a la colección;
3. 3. Compruebe en el carrito que la promoción sólo está activa cuando la SKU que pertenece a la lista de SKU está presente.



## Workaround


Para activar ambos activadores al mismo tiempo no hay solución.





