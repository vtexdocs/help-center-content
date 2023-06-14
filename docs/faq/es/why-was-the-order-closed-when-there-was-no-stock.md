---
title: '¿Por qué el pedido fue cerrado por el marketplace sin stock?'
id: frequentlyAskedQuestions_710
status: DRAFT
createdAt: 2017-04-27T22:28:42.230Z
updatedAt: 2021-06-28T20:41:42.563Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:02:34.065Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_3
slug: por-que-el-pedido-fue-cerrado-sin-stock
locale: es
legacySlug: por-que-el-pedido-fue-cerrado-sin-stock
---

El Integraciones informa el status de los pedidos cerrados por marketplaces. Algunas veces, el motivo para que no se haya integrado un pedido es porque está sin stock. El mensaje exhibido es como el abajo:

__No hay SLA disponible para uno o más ítems del pedido. Posibles causas:Falta de stock.Producto(s) no está(n) en la colección.Producto(s) inactivo(s).El CP de entrega no es atendido.__

Este artículo tiene como objeto aclarar el motivo de que ocurra ese escenario. Existen dos posibilidades:

## Stock raso

Stock raso es cuando existe una cantidad de ítems disponibles menor que la cantidad de canales en que se pueden vender esos ítems. O sea, es cuando la cantidad de ítems es pequeña y los canales de venta concurran por él. Generalmente, ocurre cuando existe solamente un ítem en stock, pero, en casos de promoción, por ejemplo, puede ocurrir con más de un ítem.

Eso es, el escenario se da cuando más de un canal (tienda y marketplace, por ejemplo) venden en un corto espacio de tiempo o igual ítem del SKU.

Ejemplo:

1. El marketplace consulta el stock en VTEX y él está positivo: __1 unidad__.
2. La tienda principal cierra una compra con este mismo ítem.
3. El marketplace termina el proceso de compra e intenta la integración del pedido.
4. En este momento, ya se ha vendido en el paso 2, luego, no es podrá integrar el pedido sin la acción en el Integraciones.

## Interrupción de la consulta al stock

Eso ocurre cuando la consulta al flete, ya sea al valor o al stock, sufre alguna interrupción. O sea, cuando el marketplace no pudo realizar la consulta al stock en VTEX. Normalmente, eso ocurre cuando el marketplace hace una consulta http y no tiene la respuesta en el tiempo previsto, asumiendo, entonces, su propio valor para stock.

## Cómo resolver

En sendos los casos, se podrá integrar el pedido [reprocesándolo en el Integraciones](/es/tutorial/como-verificar-la-integracion-en-bridge).
