---
title: 'Las transacciones de verificación al guardar la tarjeta en MyCards no se cancelan automáticamente'
id: 3VqRlcnzHqDEx7v1IIlBuf
status: PUBLISHED
createdAt: 2022-03-27T15:14:55.382Z
updatedAt: 2024-02-16T20:27:46.524Z
publishedAt: 2024-02-16T20:27:46.524Z
firstPublishedAt: 2022-03-27T15:14:56.630Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: las-transacciones-de-verificacion-al-guardar-la-tarjeta-en-mycards-no-se-cancelan-automaticamente
locale: es
kiStatus: No Fix
internalReference: 347084
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando se guarda una tarjeta en el módulo MyCards, se genera una transacción de verificación por un monto de R$ 1,50 que, después de seguir el flujo de autorización y aprobación, debe ser cancelada automáticamente. Esta transacción tiene el objetivo de validar que la tarjeta guardada es auténtica y que realiza las transacciones sin problemas.
Sin embargo, se identificó que en el caso de que la adquirente devuelva un indefinido en la comunicación, el Gateway no está llamando a la simulación



## Simulación


Este es un problema intermitente y depende del proveedor, por lo que no podemos determinar un paso a paso para reproducir este escenario



## Workaround


No se ha identificado ninguna solución, pero es posible cancelar manualmente la transacción de R$ 1,50 a través de la API

