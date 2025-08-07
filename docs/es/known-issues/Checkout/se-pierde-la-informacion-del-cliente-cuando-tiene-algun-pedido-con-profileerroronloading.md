---
title: 'Se pierde la información del cliente cuando tiene algún pedido con "profileErrorOnLoading'
id: 7B0eutLBOCKOun4iwALVpq
status: PUBLISHED
createdAt: 2023-06-27T12:51:33.790Z
updatedAt: 2023-06-27T12:51:34.237Z
publishedAt: 2023-06-27T12:51:34.237Z
firstPublishedAt: 2023-06-27T12:51:34.237Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: se-pierde-la-informacion-del-cliente-cuando-tiene-algun-pedido-con-profileerroronloading
locale: es
kiStatus: Backlog
internalReference: 340036
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando el pedido tiene "profileErrorOnLoading=true", el comportamiento esperado es que el perfil del cliente, la dirección y la tarjeta de crédito no se guarden/actualicen en el Sistema de Perfiles.

El problema es que el checkout sigue haciendo algunas peticiones para registrar el e-mail del comprador, naturalmente, sin enviar otros campos como nombre y teléfono. Por lo tanto, si el cliente ya está registrado en la tienda, estos campos se borran, y los datos del cliente se pierden.


##

## Simulación


No podemos simular el comportamiento ya que el "profileErrorOnLoading" es sólo para excepciones inesperadas.



## Workaround


N/A



