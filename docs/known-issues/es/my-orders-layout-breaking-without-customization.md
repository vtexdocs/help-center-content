---
title: 'Layout de My Ordenes roto sin ninguna personalización'
id: 6o2E1VOSaW2Yso0Cg0uU8Q
status: PUBLISHED
createdAt: 2017-05-26T15:03:53.391Z
updatedAt: 2019-12-31T15:18:57.122Z
publishedAt: 2019-12-31T15:18:57.122Z
firstPublishedAt: 2017-05-26T15:06:46.244Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_6
tag: My Orders
slug: layout-de-my-ordenes-roto-sin-ninguna-personalizacion
kiStatus: Fixed
internalReference: 
---

## Sumario

<div class="alert alert-success">
  <div><strong>Fix:</strong></div>
  <div>El problema fue corregido con la propriedad <code>:root { font-size: 16px }</code> se entregando por el propio My Orders.</div>
</div>

---

![Screen Shot 2017-05-26 at 12.01.58](//images.contentful.com/alneenqid6w5/qUqOq8ZyGOCAAoiUM0600/66a6bf0fa60bbd65fa9abd1ca7c825ae/Screen_Shot_2017-05-26_at_12.01.58.png)

Si el layout del nuevo My Orders presenta problemas en su tienda _out of the box_, sin ninguna personalización, puede que el CSS de su tienda esté interfiriendo con él.

Algunas versiones de Bootstrap añaden el CSS `html {font-size: 10px}`, lo que interfiere con los tamaños de los elementos del nuevo My Orders.

## Simulación

1. Acceder a `{NOMBREDELATIENDA}.com/account/orders`;
2. Ver la lista de pedidos.

## Workaround

Personalizar el CSS de su tienda con la propriedad CSS `html { font-size: 16px }` en My Orders, para volver a la proporción original de los elementos.

