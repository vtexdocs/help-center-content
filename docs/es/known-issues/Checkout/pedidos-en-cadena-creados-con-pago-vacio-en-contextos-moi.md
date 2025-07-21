---
title: "Pedidos en cadena creados con pago vacío en contextos MOI"
id: 57ULJg1QFDH2vCMKWmScjU
status: PUBLISHED
createdAt: 2025-01-22T14:15:25.529Z
updatedAt: 2025-01-22T14:15:26.185Z
publishedAt: 2025-01-22T14:15:26.185Z
firstPublishedAt: 2025-01-22T14:15:26.185Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: pedidos-en-cadena-creados-con-pago-vacio-en-contextos-moi
locale: es
kiStatus: Backlog
internalReference: 1167363
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Los pedidos creados en una configuración de Inventario Omnicanal Multinivel (MOI) a nivel de `cadena` se crean con dos pagos, uno de ellos vacío con valor `0`.


##

## Simulación



- Crear un pedido en un contexto MOI;
- El pedido en cadena tendrá dos pagos en su transacción, uno de ellos vacío con valor `0`.



## Workaround


N/A





