---
title: 'Transacciones bloqueadas tras el rechazo del riesgo'
id: 4LKwXp4P9IEkUh02vNZKiA
status: PUBLISHED
createdAt: 2024-09-04T19:05:28.366Z
updatedAt: 2024-09-04T19:05:29.306Z
publishedAt: 2024-09-04T19:05:29.306Z
firstPublishedAt: 2024-09-04T19:05:29.306Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: transacciones-bloqueadas-tras-el-rechazo-del-riesgo
locale: es
kiStatus: Backlog
internalReference: 1092563
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Las transacciones con una respuesta RiskRejected del conector antifraude que ya tenían una liquidación se atascan en un bucle de cambio de estado.


##

## Simulación


Crear una transacción con validación antifraude
Liquidar la transacción antes de una respuesta final del antifraude
Recibir una respuesta RiskRejected del proveedor antifraude
La transacción se atascará en un bucle



## Workaround


N/A





