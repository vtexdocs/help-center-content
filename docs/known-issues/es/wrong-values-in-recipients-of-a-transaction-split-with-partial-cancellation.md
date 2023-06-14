---
title: 'Valores erróneos en los destinatarios de una transacción dividida con cancelación parcial.'
id: 5srb8YPqWIn5D5ZpJVs1u7
status: PUBLISHED
createdAt: 2022-03-03T18:38:02.299Z
updatedAt: 2023-05-25T15:06:30.437Z
publishedAt: 2023-05-25T15:06:30.437Z
firstPublishedAt: 2022-03-03T18:38:02.666Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: valores-erroneos-en-los-destinatarios-de-una-transaccion-dividida-con-cancelacion-parcial
kiStatus: Backlog
internalReference: 489481
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En un escenario de Payout Split, cuando hay una cancelación parcial antes de la captura, no cambiamos los campos de destinatarios para que los valores de cuándo recibirá cada participante sean diferentes a los correctos, es decir, los valores dentro de los destinatarios de la liquidación aparecen como si no hubiera habido una cancelación parcial.

##


## Simulación


1. Hacer una compra con el producto de un vendedor en un marketplace.
2. Hacer una cancelación parcial después de la aprobación pero antes de la captura.
3. Comprobar que los valores de los destinatarios dentro de la solicitud de liquidación son los originales, sin contar la anulación parcial




## Workaround


No hay ninguna solución.

