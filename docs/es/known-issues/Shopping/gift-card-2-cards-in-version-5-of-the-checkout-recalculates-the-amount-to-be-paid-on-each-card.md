---
title: 'Gift Card + 2 tarjetas en la versión 5 del checkout recalcula el valor a ser pagado en cada tarjeta'
id: 2SHo3fuu0oqyiiyo4ME2Ca
status: PUBLISHED
createdAt: 2018-10-03T16:17:29.385Z
updatedAt: 2022-12-22T20:48:35.026Z
publishedAt: 2022-12-22T20:48:35.026Z
firstPublishedAt: 2018-10-03T16:21:32.472Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: gift-card-2-tarjetas-en-la-version-5-del-checkout-recalcula-el-valor-a-ser-pagado-en-cada-tarjeta
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

El escenario es muy específico y ocurre sólo en la versión 5 del checkout (versión sin las funcionalidades de omnichannel). El comportamiento ocurre en los carritos en que el cliente elige hacer el pago con Gift Card y 2 tarjetas. El valor a ser pagado por una de estas tarjetas se cambia inmediatamente después de ser introducido por el cliente.

## Simulación

1. Cree un carrito y navegue hasta el paso de pago;
2. Rellene/seleccione el Gift Card;
2. Seleccione el pago con 2 tarjetas;
3. Introduzca el valor a pagar en la primera tarjeta;
4. El valor se ha cambiado a un valor menor.

## Workaround

Actualmente, no tenemos workaround para este problema.

