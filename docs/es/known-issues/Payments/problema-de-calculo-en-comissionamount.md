---
title: "Problema de cálculo en comissionAmount"
id: 1E8DRneWHVncTu5bZ9hNtF
status: PUBLISHED
createdAt: 2024-03-15T21:13:28.729Z
updatedAt: 2024-03-15T21:13:29.705Z
publishedAt: 2024-03-15T21:13:29.705Z
firstPublishedAt: 2024-03-15T21:13:29.705Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: problema-de-calculo-en-comissionamount
locale: es
kiStatus: Backlog
internalReference: 1001005
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Esto ocurre en un escenario específico de división de pagos con múltiples pagos y vendedores (donde ambos son responsables de los gastos de procesamiento de pagos y devoluciones). La suma de `comissionAmount` de los vendedores no es igual a `amount` del mercado (problema de redondeo), esta diferencia puede causar una denegación de liquidación por parte de la entidad adquirente.



## Simulación


No hemos podido simular este problema, ya que implica varias condiciones.



## Workaround


NA




