---
title: 'Campos no válidos: Código de seguridad de la tarjeta. SecurityCodeLength: 0 SecurityCodeIsNumeric: true'
id: 8VlvruNr0pp9zKKSaPLGZ
status: PUBLISHED
createdAt: 2022-03-27T22:58:34.329Z
updatedAt: 2022-11-25T22:07:42.877Z
publishedAt: 2022-11-25T22:07:42.877Z
firstPublishedAt: 2022-03-27T22:58:34.959Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: campos-no-validos-codigo-de-seguridad-de-la-tarjeta-securitycodelength-0-securitycodeisnumeric-true
locale: es
kiStatus: Backlog
internalReference: 442772
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


El error ocurre en un escenario específico en el que se rellena la información de la tarjeta, luego se cambia el método de pago a otro (MercadoPago por ejemplo) y luego se vuelve de nuevo al método de pago con tarjeta de crédito y luego se confirma el pago.
Se generará un pedido incompleto con el mensaje "*No se ha podido validar el pago de una transacción. Campos no válidos: Código de seguridad de la tarjeta. SecurityCodeLength: 0 SecurityCodeIsNumeric: true*"



## Simulación


N/A



## Workaround


N/A

