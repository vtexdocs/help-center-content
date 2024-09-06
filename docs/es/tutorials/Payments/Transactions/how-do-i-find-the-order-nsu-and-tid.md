---
title: '¿Cómo encontrar NSU y TID del  pedido?'
id: frequentlyAskedQuestions_477
status: PUBLISHED
createdAt: 2019-01-24T20:45:53.477Z
updatedAt: 2023-03-30T15:22:23.805Z
publishedAt: 2023-03-30T15:22:23.805Z
firstPublishedAt: 2019-01-24T22:08:43.214Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: como-encontrar-nsu-y-tid-del-pedido
locale: es
legacySlug: como-encontrar-nsu-y-tid-del-pedido
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
---

NSU y TID son datos de pago que quedan guardados en Pedidos. Esta información es necesaria para queries en el operador o gateway de pago, por ejemplo. La definición de los dos conceptos está abajo:

- **NSU**: Número Secuencial Único es el número de identificación de una operación de venta realizada con tarjetas. Se lo asigna a cada documento fiscal emitido.
- **TID**: Transaction ID es un número de identificación (o de autorización) de la transacción de e-commerce en la operadora. Este código no se genera en VTEX, sino es enviado por la operadora en el momento de la autorización. Es decir, VTEX envía los datos del pedido y el gateway o la operadora devuelve la TID.

## Dónde encontrar

Esas informaciones son facilitadas a VTEX durante las transacciones y son organizadas para una simple visualización en **+ informaciones**, en el [detalle del pedido](/es/tutorial/como-visualizar-detalle-del-pedido).
