---
title: 'En Payout Split no se envía el objeto recipiens en el método de pago Apple Pay'
id: MPafkQI7w3q5kGLxQTgjG
status: PUBLISHED
createdAt: 2024-09-09T17:54:39.877Z
updatedAt: 2024-09-09T17:54:41.227Z
publishedAt: 2024-09-09T17:54:41.227Z
firstPublishedAt: 2024-09-09T17:54:41.227Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: en-payout-split-no-se-envia-el-objeto-recipiens-en-el-metodo-de-pago-apple-pay
locale: es
kiStatus: Backlog
internalReference: 1094952
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


No es posible construir/enviar destinatarios objeto para el método de pago Apple Pay, incluso con todos los ajustes necesarios habilitados.


##

## Simulación



1. Habilitar el fraccionamiento de cobros en un conector que permita el fraccionamiento mediante el método de pago Apple Pay;
2. Realizar una compra con un artículo del vendedor, que tiene una comisión;
3. Comprobar que en el proceso en el que se deben enviar los destinatarios, en la autorización o captura, no existe el objeto.



## Workaround


N/A





