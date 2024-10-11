---
title: 'Suscripciones no ejecutadas por fallo en la indexación de datos o en la consulta de datos maestros'
id: 1PspxNexEEz4GvJ5BpZZgH
status: PUBLISHED
createdAt: 2024-01-04T20:27:03.576Z
updatedAt: 2024-07-09T17:24:39.295Z
publishedAt: 2024-07-09T17:24:39.295Z
firstPublishedAt: 2024-01-04T20:27:04.193Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: subscriptions-not-executed-due-to-data-indexing-failure-or-masterdata-query-failure
locale: es
kiStatus: Backlog
internalReference: 961526
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La creación de solicitudes de suscripción depende del retorno de una consulta realizada a la base de datos de suscripciones, esta consulta se realiza periódicamente para identificar qué suscripciones deben ejecutarse en ese periodo, si esta consulta falla o no devuelve una suscripción en particular, su ciclo no se ejecuta, y no se registra ningún error, resultando así una suscripción con la próximaFechaDeCompra en el pasado.



## Simulación


No tenemos forma de simular este escenario debido a la dependencia de otros sistemas.



## Workaround


Para ajustar la `NextPurchaseDate`, el usuario final puede pausar la suscripción y reactivarla. Esta acción hará que el sistema de suscripción recalcule la fecha de ejecución y la `nextPurchaseDate` se actualizará correctamente.

O el cliente puede actualizar la `nextPurchaseDate` de la suscripción del usuario a una fecha futura a través de la API.





