---
title: "El enlace al pedido en la página de la tarjeta regalo lleva a una página inexistente (404)"
id: 7dvqilr4AjHhPeasWXFtW6
status: PUBLISHED
createdAt: 2025-03-19T12:42:28.749Z
updatedAt: 2025-03-19T12:42:29.713Z
publishedAt: 2025-03-19T12:42:29.713Z
firstPublishedAt: 2025-03-19T12:42:29.713Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: el-enlace-al-pedido-en-la-pagina-de-la-tarjeta-regalo-lleva-a-una-pagina-inexistente-404
locale: es
kiStatus: Backlog
internalReference: 1196298
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En algunos extractos de tarjetas regalo, no es posible acceder directamente al pedido. El problema es que el enlace tiene el siguiente formato
`https://.myvtex.com/admin/checkout#/orders/`

Sin embargo, el formato correcto debería ser:
`https://.myvtex.com/admin/orders/`


##

## Simulación


No se puede reproducir.



## Workaround


Recopile el `orderId` deseado y utilice la ruta correcta: `https://.myvtex.com/admin/orders/`





