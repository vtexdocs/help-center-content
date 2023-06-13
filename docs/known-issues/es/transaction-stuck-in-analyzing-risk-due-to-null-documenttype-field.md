---
title: Transacción bloqueada en Análisis de Riesgo debido a que el campo documentType es nulo.
id: 5cZWkKc0ZXnMZCw4bvXJjA
status: PUBLISHED
createdAt: 2023-05-11T17:33:04.077Z
updatedAt: 2023-05-11T17:33:04.511Z
publishedAt: 2023-05-11T17:33:04.511Z
firstPublishedAt: 2023-05-11T17:33:04.511Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: transaccion-bloqueada-en-analisis-de-riesgo-debido-a-que-el-campo-documenttype-es-nulo
kiStatus: Backlog
internalReference: 697107
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Las transacciones se están atascando en la etapa de "Análisis de Riesgo" porque el campo `documentType` es nulo.


##

## Simulación


Este problema se produce cuando un cliente utiliza información de una empresa para completar un pedido. Si se utiliza el nombre de la empresa para completar la transacción, el campo `documentType` queda sin rellenar, lo que causa problemas con la aprobación antifraude de la transacción.



## Workaround



N/A

