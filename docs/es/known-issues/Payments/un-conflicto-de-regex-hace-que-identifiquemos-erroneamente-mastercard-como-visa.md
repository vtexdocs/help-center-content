---
title: 'Un conflicto de Regex hace que identifiquemos erróneamente Mastercard como Visa'
id: MzUm8xH6vDeGxWcj6GCbZ
status: PUBLISHED
createdAt: 2023-09-04T17:51:08.019Z
updatedAt: 2023-11-30T15:25:47.066Z
publishedAt: 2023-11-30T15:25:47.066Z
firstPublishedAt: 2023-09-04T17:51:09.705Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: regex-conflict-causes-us-to-misidentify-mastercard-as-visa
locale: es
kiStatus: Backlog
internalReference: 893588
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Un conflicto de Regex hace que identifiquemos erróneamente la marca de las tarjetas en la caja.


##

## Simulación



1. Configure dos Condiciones de Pago una para el procesamiento de tarjetas de crédito Visa y otra para el procesamiento de tarjetas de crédito Mastercard
2. Compra un artículo al azar en la tienda y elige pagarlo con tarjeta de crédito.
3. Rellene el número de tarjeta con el BIN 523431 de Mastercard y complete con números aleatorios.
4. Rellena el resto de información de la tarjeta con datos falsos
5. Finalizar la compra
6. Vaya a admin y busque la transacción ya creada y el pago se identificará como Visa en lugar de Mastercard



## Workaround


N/D





