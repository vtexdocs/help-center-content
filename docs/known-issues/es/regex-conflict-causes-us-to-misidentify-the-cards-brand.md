---
title: 'El conflicto de Regex hace que identifiquemos mal la marca de las tarjetas'
id: 338SA4RpmfHwaqoY62uRjS
status: PUBLISHED
createdAt: 2022-03-25T22:11:51.426Z
updatedAt: 2022-11-25T22:09:01.048Z
publishedAt: 2022-11-25T22:09:01.048Z
firstPublishedAt: 2022-03-25T22:11:51.852Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: el-conflicto-de-regex-hace-que-identifiquemos-mal-la-marca-de-las-tarjetas
locale: es
kiStatus: Backlog
internalReference: 316213
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



El conflicto de Regex hace que identifiquemos mal la marca de las tarjetas



## Simulación



1. Configure dos condiciones de pago, una para el procesamiento de tarjetas de crédito Elo y otra para el procesamiento de tarjetas de crédito Mastercard
2. Compre un artículo al azar en la tienda y elija pagarlo con tarjeta de crédito.
3. Rellene el número de tarjeta con el BIN 506731 de Elo y complete con números aleatorios.
4. Rellenar el resto de la información de la tarjeta con datos falsos
5. Finalizar la compra
6. Ir al administrador y buscar la transacción ya creada y el pago será identificado como Mastercard en lugar de Elo




## Workaround



N/A

