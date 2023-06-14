---
title: No se puede seleccionar el punto de recogida en los mercados con vendedores multinivel
id: 1DGiyBrbw9qXGVMhX3k5gs
status: PUBLISHED
createdAt: 2023-01-11T19:57:54.964Z
updatedAt: 2023-01-11T19:57:55.883Z
publishedAt: 2023-01-11T19:57:55.883Z
firstPublishedAt: 2023-01-11T19:57:55.883Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: no-se-puede-seleccionar-el-punto-de-recogida-en-los-mercados-con-vendedores-multinivel
kiStatus: Backlog
internalReference: 524073
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En un mercado con una relación multinivel (MOI), cuando se selecciona un punto de recogida, el mercado devuelve un error de comunicación con el vendedor, impidiendo el uso de puntos de recogida en el mercado junto con esos vendedores.

En el 2º nivel (vendedor directo), el error interno es "La dirección no puede utilizarse para el canal de entrega dado (código de estado: 400)".

Este comportamiento se produce porque la interfaz de usuario envía la solicitud con una combinación de `"selectedDeliveryChannel": null` y `"addressType": "search"`.


##

## Simulación



- Accede a una cuenta de mercado que tenga vendedores habituales utilizando la relación multinivel (MOI)
- Busque una dirección que tenga recogidas que cubran la ubicación
- Aparecerá un mensaje de error de comunicación con el vendedor



## Workaround


N/A




