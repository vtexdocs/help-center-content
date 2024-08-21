---
title: 'La falta del campo minicart.buyer.id hace que el antifraude cancele transacciones'
id: 6dvOH9b96qGAHXIzW3wBe1
status: PUBLISHED
createdAt: 2023-05-23T17:10:17.329Z
updatedAt: 2024-02-16T20:26:42.045Z
publishedAt: 2024-02-16T20:26:42.045Z
firstPublishedAt: 2023-05-23T17:10:17.964Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: la-falta-del-campo-minicartbuyerid-hace-que-el-antifraude-cancele-transacciones
locale: es
kiStatus: No Fix
internalReference: 514335
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Ha habido casos en los que ciertas transacciones han sido rechazadas durante el análisis antifraude debido al valor nulo en el campo `minicart.buyer.id`. Por lo tanto, se espera que el campo `minicart.buyer.id` se envíe desde la caja a la pasarela a través de `sendAdditionalData`. Sin embargo, de acuerdo con la arquitectura actual de la caja, no hay ningún requisito específico para proporcionar este campo en `sendAdditionalData`, y su definición puede o no estar disponible en una etapa posterior.


##

## Simulación


No es posible reproducir este comportamiento una vez que esto es intermitente.



## Workaround


Es posible enviar los datos adicionales después a través de nuestra API:
https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/additional-data





