---
title: 'Integración de Amazon reservas de stock para KITS'
id: 6ZEvHuGCOEcuQTya1oDOyu
status: PUBLISHED
createdAt: 2023-05-22T14:28:54.846Z
updatedAt: 2023-05-22T14:28:55.337Z
publishedAt: 2023-05-22T14:28:55.337Z
firstPublishedAt: 2023-05-22T14:28:55.337Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: integracion-de-amazon-reservas-de-stock-para-kits
locale: es
kiStatus: Backlog
internalReference: 829583
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Actualmente tenemos un problema para la reserva de stock en la integración con Amazon, lo que ocurre es que antes de crear el pedido hacemos una reserva de stock, y para los itens que son KITS estamos teniendo un problema en la reserva de stock, pero cuando se crea el Pedido el stock se está reservando sin ningún error.


##

## Simulación



Esto solo se aplicara para los KITS en la Integracion de Amazon, y para la reserva de stock, dentro del menu puente - Pedidos. podemos ver un aviso:

Reserva de pedido fallida: ANS no disponible



## Workaround



Una vez creado el pedido el stock se reserva con éxito.





