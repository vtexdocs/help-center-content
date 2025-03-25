---
title: 'La orden de cambio a través de la UI no tiene en cuenta el cálculo de las promociones Toma 3 paga 2.'
id: 3rvsDyCggYirvH7WT9rBVZ
status: PUBLISHED
createdAt: 2022-03-15T20:25:17.217Z
updatedAt: 2024-02-16T20:23:38.705Z
publishedAt: 2024-02-16T20:23:38.705Z
firstPublishedAt: 2022-03-15T20:25:17.513Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: change-order-through-the-ui-does-not-take-into-account-the-calculation-of-promotions-take-3-pay-2
locale: es
kiStatus: No Fix
internalReference: 472882
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


En los pedidos con la promoción "Más por menos", es posible modificar el pedido y eliminar uno o varios artículos en la interfaz de usuario, pero el descuento sigue aplicándose.



## Simulación


- Cree una promoción de Más por Menos
- Realizar una compra con esa promoción
- Hacer un cambio en el pedido y eliminar uno o más artículos
- Ver que el descuento se sigue aplicando



## Workaround


En este caso tenemos el Workaround que es hacer el cambio a través de la API "change on order". Para cambiar artículos y valores.

