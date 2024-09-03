---
title: 'El estado en la lista de pedidos es diferente del estado actual del pedido'
id: 2UBFdtXWtCIygv0SiObCTN
status: PUBLISHED
createdAt: 2022-05-11T18:25:07.711Z
updatedAt: 2023-06-07T17:52:27.382Z
publishedAt: 2023-06-07T17:52:27.382Z
firstPublishedAt: 2022-05-11T18:25:08.248Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: el-estado-en-la-lista-de-pedidos-es-diferente-del-estado-actual-del-pedido
locale: es
kiStatus: Backlog
internalReference: 577103
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


En algunos casos, la lista de pedidos muestra un estado diferente del estado actual del pedido (tarjeta).

La causa se debe a la indexación de la información del pedido, recordando que la lista de pedidos es una información indexada del pedido, que permite por ejemplo el uso de filtros y búsqueda. El desacuerdo puede ocurrir en momentos, por lo que genera esta divergencia.

También es importante recordar que esto no afecta a la información de la orden en absoluto.


##

## Simulación


No es posible simular el caso, pero cuando falla la indexación, el listado de pedidos debe mostrar un estado diferente (inferior) al que se muestra al abrir el detalle del pedido (ficha). He aquí un ejemplo del comportamiento:

> Estado de la lista de pedidos = Tramitación
>
> Estado del detalle del pedido = Facturado




## Workaround


En este momento, todos los casos que presenten esta divergencia en la lista de pedidos y en el detalle del pedido deben ser notificados para poder actuar sobre ellos.

Así mismo, lo que se hace es simplemente reindexar la información del pedido para solucionar este comportamiento.




