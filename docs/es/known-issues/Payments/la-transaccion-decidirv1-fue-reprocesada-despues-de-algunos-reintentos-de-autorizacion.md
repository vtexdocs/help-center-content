---
title: "La transacción DecidirV1 fue 'reprocesada' después de algunos reintentos de autorización"
id: 2fxfg1IlnFUxAjo9E47HPq
status: PUBLISHED
createdAt: 2022-03-03T21:19:22.471Z
updatedAt: 2022-11-25T22:04:50.821Z
publishedAt: 2022-11-25T22:04:50.821Z
firstPublishedAt: 2022-03-03T21:19:23.075Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: decidirv1-transaction-got-reprocessed-after-some-retries-to-authorization
locale: es
kiStatus: Backlog
internalReference: 384009
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Esto sucede cuando una transacción obtiene el estado 480 que significa "REVISIÓN", y comienza a reintentar hasta que recibe una carga útil nula. Entonces, después de eso, "reprocesamos" la transacción lo que provoca un fallo y la cancelación.



## Simulación


No hay manera de simular esto.



## Workaround


No hay ninguna solución disponible en este momento

