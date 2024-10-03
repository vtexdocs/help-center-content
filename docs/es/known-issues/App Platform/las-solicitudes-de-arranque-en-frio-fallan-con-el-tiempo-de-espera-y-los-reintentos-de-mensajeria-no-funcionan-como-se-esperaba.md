---
title: 'Las solicitudes de arranque en frío fallan con el tiempo de espera y los reintentos de mensajería no funcionan como se esperaba.'
id: 61zSmTqfPSZTjL7PrAH737
status: PUBLISHED
createdAt: 2023-04-13T12:42:46.846Z
updatedAt: 2023-05-08T17:40:53.055Z
publishedAt: 2023-05-08T17:40:53.055Z
firstPublishedAt: 2023-04-13T12:42:47.259Z
contentType: knownIssue
productTeam: App Platform
author: 2mXZkbi0oi061KicTExNjo
tag: App Platform
slugEN: cold-start-requests-failing-with-timeout-and-courier-retries-not-working-as-expected
locale: es
kiStatus: Backlog
internalReference: 789499
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando una app no recibe peticiones durante un tiempo, entra en cold start. Courier entonces hace varios intentos de enviar eventos hasta que la app "despierta". Cuando la app no "despierta" las peticiones a la misma pueden fallar debido a un timeout. Como resultado, resulta que algunos eventos parecen no enviarse nunca. Se trata de un comportamiento intermitente.


##

## Simulación


Encuentra una aplicación que está en el arranque en frío
Siga sus registros a través de OpenSearch
A veces es posible ver que uno o más eventos nunca serán enviados.



## Workaround


No hay ninguna solución disponible.





