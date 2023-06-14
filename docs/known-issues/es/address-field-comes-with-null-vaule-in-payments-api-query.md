---
title: 'Campo "address" trae valor "null" en la consulta de la API del Pagos'
id: 7oEEc24umACsOoy4Ceso2W
status: PUBLISHED
createdAt: 2018-01-11T16:33:01.231Z
updatedAt: 2022-12-22T20:45:31.741Z
publishedAt: 2022-12-22T20:45:31.741Z
firstPublishedAt: 2018-01-11T16:44:36.751Z
contentType: knownIssue
productTeam: Financial
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: campo-address-trae-valor-null-en-la-consulta-de-la-api-del-pagos
kiStatus: Backlog
internalReference: 
---

## Sumario

El campo `address` trae valor `null` cuando consultamos la API del Pagos.

## Simulación

El problema no sucede todo el tiempo, sin embargo, para probar debes cerrar una compra y validar en la API de consulta del Pagos, si el campo "Address" fue llenado correctamente.

API para la prueba: 
`https://{AccountName}.vtexpayments.com.br/api/pvt/transactions/{TransactionId}/payments`

## Workaround

Actualmente no hay workaround para este problema.

