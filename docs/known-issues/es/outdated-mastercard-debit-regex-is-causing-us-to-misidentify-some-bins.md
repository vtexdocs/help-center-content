---
title: 'La regex de Mastercard no está actualizada, lo que hace que identifiquemos mal algunos BINs'
id: 5gx4dSY2P5gGE0JI661hGL
status: PUBLISHED
createdAt: 2022-08-20T00:03:11.640Z
updatedAt: 2022-11-25T22:04:24.418Z
publishedAt: 2022-11-25T22:04:24.418Z
firstPublishedAt: 2022-08-20T00:03:12.490Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: la-regex-de-mastercard-no-esta-actualizada-lo-que-hace-que-identifiquemos-mal-algunos-bins
kiStatus: Backlog
internalReference: 642136
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Algunos BINs no están siendo identificados correctamente en la caja. La marca de la tarjeta está determinada por una regex que eventualmente puede estar desactualizada, causando que la marca de la tarjeta no sea identificada o sea identificada erróneamente.



## Simulación



1. Configure dos condiciones de pago, una para Mastercard Débito
2. Añade un artículo al azar al carrito en la tienda y elige pagarlo con tarjeta de débito
3. Rellena el número de tarjeta con el BIN 551898 de Mastercard Débito y complétalo con números aleatorios
4. Rellena el resto de la información de la tarjeta con datos falsos
5. Como la tarjeta no ha podido ser identificada, la caja pedirá que se confirme el número de tarjeta y la marca de la tarjeta puede ser ya seleccionada como otra marca de tarjeta



## Workaround


No hay ninguna solución.

