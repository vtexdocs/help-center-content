---
title: 'El HUB de la tarjeta regalo acepta un ID no válido/vacío como respuesta para crear una transacción.'
id: 3ODSXijmpvkk55FUqMcGvQ
status: PUBLISHED
createdAt: 2023-07-05T12:50:36.661Z
updatedAt: 2023-07-05T12:51:07.938Z
publishedAt: 2023-07-05T12:51:07.938Z
firstPublishedAt: 2023-07-05T12:50:37.274Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: el-hub-de-la-tarjeta-regalo-acepta-un-id-no-validovacio-como-respuesta-para-crear-una-transaccion
locale: es
kiStatus: Backlog
internalReference: 855864
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La documentación de nuestro protocolo para proveedores de tarjetas regalo especifica que la API de creación de transacciones debe incluir un ID válido en la respuesta. Sin embargo, la implementación actual del protocolo permite a los proveedores responder a esta solicitud con un ID vacío o no válido. Como resultado, al intentar liquidar el pago, la transacción se bloquea porque falta el ID requerido. Esto provoca que se lance un error y que la transacción se quede atascada en el proceso.



## Simulación


Responder a la llamada de crear transacción con un ID no válido e intentar finalizar una transacción.



## Workaround


N/A





