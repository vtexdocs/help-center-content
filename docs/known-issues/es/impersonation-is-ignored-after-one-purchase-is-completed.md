---
title: 'La suplantación de identidad se ignora después de completar una compra'
id: 4mHKOlwaLwfIEf8HFh4y4Y
status: PUBLISHED
createdAt: 2024-03-20T20:10:26.200Z
updatedAt: 2024-03-20T20:10:27.029Z
publishedAt: 2024-03-20T20:10:27.029Z
firstPublishedAt: 2024-03-20T20:10:27.029Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-suplantacion-de-identidad-se-ignora-despues-de-completar-una-compra
locale: es
kiStatus: Backlog
internalReference: 1003545
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando un operador del centro de llamadas se hace pasar por un comprador, completa una compra y es enviado a la página orderPlaced, se generará un nuevo orderForm.

Este nuevo orderForm tendrá su clientProfileData adjunto con el email del operador del call center en lugar del comprador suplantado, aunque los datos de suplantación se persisten normalmente dentro de la Sesión.


##

## Simulación



1. Inicie sesión en el entorno myvtex como operador de un centro de llamadas.
2. Hacerse pasar por un comprador y completar una compra.
3. Después, mientras sigue suplantando al usuario, inicie una nueva compra, y observe como los datos del carrito contendrán el email de su operador de call center dentro de clientProfileData.



## Workaround


Si necesita crear más de un pedido para el mismo comprador, asegúrese de volver a realizar el proceso de suplantación entre pedidos.





