---
title: "Transacciones atascadas en el análisis de riesgos"
id: 5yUSXenLjlEdESoj5VVvoH
status: PUBLISHED
createdAt: 2022-03-11T18:56:45.293Z
updatedAt: 2025-03-06T13:20:48.406Z
publishedAt: 2025-03-06T13:20:48.406Z
firstPublishedAt: 2022-03-11T18:56:45.712Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transacciones-atascadas-en-el-analisis-de-riesgos
locale: es
kiStatus: Backlog
internalReference: 541149
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Los reintentos automáticos se están atascando en algunas transacciones que utilizan un proveedor antifraude, esto tiene dos posibles escenarios:

1. Tardar más de lo esperado en solicitar un nuevo reintento para cambiar su estado.
2. No llamar al siguiente reintento, lo que deja la transacción atascada.

Esto bloquea el inventario de los clientes.


##

## Simulación


No se puede simular, este comportamiento ocurre intermitentemente.



## Workaround


N/A

