---
title: "[Amazon] Selección de transportistas"
id: 7jaH0Pl8gfyQjZTXGPdk6A
status: PUBLISHED
createdAt: 2025-02-27T12:51:31.732Z
updatedAt: 2025-02-27T12:51:32.614Z
publishedAt: 2025-02-27T12:51:32.614Z
firstPublishedAt: 2025-02-27T12:51:32.614Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-seleccion-de-transportistas
locale: es
kiStatus: Backlog
internalReference: 1186908
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Divergencia en el tipo de método de entrega seleccionado
Esto ocurre porque la integración, cuando no se solicita a los EE.UU., en realidad envía null a la simulación.


##

## Simulación




1. La simulación devuelve una lista de ANS.
2. La integración filtra para utilizar el ANS de menor valor.
3. Se crea la reserva.
4. Al realizar el pedido, se utiliza el ANS de la reserva, es decir, el de menor valor.

Entendemos que existe una divergencia entre la elección del comprador al realizar el pedido y la forma en que el pedido entra en la OMS.



## Workaround


N/A





