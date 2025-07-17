---
title: "[Mercado Livre] En algunos casos, un pedido cancelado en el mercado no actualiza las existencias en el catálogo"
id: 3kQYK7ZAGtYGf2yf9rcgBD
status: PUBLISHED
createdAt: 2024-12-06T12:41:47.689Z
updatedAt: 2024-12-06T14:19:08.943Z
publishedAt: 2024-12-06T14:19:08.943Z
firstPublishedAt: 2024-12-06T14:19:08.943Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: mercado-livre-en-algunos-casos-un-pedido-cancelado-en-el-mercado-no-actualiza-las-existencias-en-el-catalogo
locale: es
kiStatus: Backlog
internalReference: 1146768
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En algunos casos, un pedido cancelado en el marketplace no actualiza el stock en el catálogo. Este escenario afecta a cuentas que trabajan con pocas unidades en stock (1 / 2 unidades)



##

## Simulación



Escenario
Anuncio con una unidad en stock
Cuando se completa un pedido con la última unidad en stock > Mercado Livre restablece el stock del anuncio y lo pausa

En algunas situaciones
Pedido creado en Mercado Livre > Mercado Livre borra stock y pausa anuncio
Minutos después este pedido se cancela en Mercado Livre
Pedido cancelado > Mercado Livre devuelve stock y activa el anuncio en Mercado Livre
Pero el stock no vuelve al inventario del Catálogo VTEX




## Workaround


Anuncio para tener más de 2 unidades en stock





