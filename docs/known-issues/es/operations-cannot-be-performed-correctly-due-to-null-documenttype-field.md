---
title: 'Las operaciones no pueden realizarse correctamente debido a que el campo documentType es nulo.'
id: 5cZWkKc0ZXnMZCw4bvXJjA
status: PUBLISHED
createdAt: 2023-05-11T17:33:04.077Z
updatedAt: 2023-12-06T15:21:16.013Z
publishedAt: 2023-12-06T15:21:16.013Z
firstPublishedAt: 2023-05-11T17:33:04.511Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: las-operaciones-no-pueden-realizarse-correctamente-debido-a-que-el-campo-documenttype-es-nulo
locale: es
kiStatus: Backlog
internalReference: 697107
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



## Simulación


Este problema se produce cuando un cliente utiliza información de una empresa para completar un pedido.
Si se utiliza el nombre de la empresa para completar la transacción, el campo `documentType` queda sin rellenar, causando problemas con la aprobación del pago.



## Workaround



En el primer caso, es posible utilizar una API interna para omitir el paso de análisis antifraude.
A pesar de estar totalmente desaconsejado, es una operación posible.

