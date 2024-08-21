---
title: 'limitaciones del campo isValueChangeable para transacciones con valor mínimo de 0,01'
id: 3Upg1JbyotDHZwfCLAD7v4
status: PUBLISHED
createdAt: 2023-05-12T19:59:34.646Z
updatedAt: 2023-05-12T19:59:35.064Z
publishedAt: 2023-05-12T19:59:35.064Z
firstPublishedAt: 2023-05-12T19:59:35.064Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: limitaciones-del-campo-isvaluechangeable-para-transacciones-con-valor-minimo-de-001
locale: es
kiStatus: Backlog
internalReference: 825122
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Sólo hay dos formas de cambiar el campo `isValueChangeable` de una transacción: cuando se produce una división, y cuando el `maximumValue` es igual al `minimumValue`. Además, hay que tener en cuenta que todas las transacciones se crean con un "valor mínimo" de 0,01. Por lo tanto, cuando una transacción se divide, el campo "isValueChangeable" no se modifica. En consecuencia, cuando se crea una transacción con un valor de 0,01, el campo "isValueChangeable" se establece automáticamente en "false".



## Simulación


Cree una transacción con un valor de 0.01 y acceda a la ruta /capabilities.



## Workaround


N/A





