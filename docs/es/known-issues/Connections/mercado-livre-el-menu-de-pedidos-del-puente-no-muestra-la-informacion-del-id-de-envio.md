---
title: '[Mercado Livre] El menú de pedidos del puente no muestra la información del ID de envío.'
id: 2fXDbejpPJ04NDfPCCcr0j
status: PUBLISHED
createdAt: 2024-03-18T20:56:17.859Z
updatedAt: 2024-03-18T20:56:18.697Z
publishedAt: 2024-03-18T20:56:18.697Z
firstPublishedAt: 2024-03-18T20:56:18.697Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: mercado-livre-bridge-orders-menu-not-showing-the-shippingid-information
locale: es
kiStatus: Backlog
internalReference: 1001903
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Actualmente tenemos un problema que solo afecta a la visibilidad de algunos Pedidos MELI, lo que ocurre es que actualmente estamos registrando el ShipmentID en el menu del puente de pedidos, pero en algunos mensajes de error falta el OrderID, y es necesario para algunos casos ya que el orderID es la informacion que los vendedores tienen en el Portal MELI

Mercado Livre > Puente > OrderId


##

## Simulación


Dentro del menú de pedidos del puente, algunos mensajes de error no están registrando el orderID, lo que da la impresión de que algunos pedidos no están en VTEX brige, pero los vendedores pueden encontrar los pedidos buscando por el shipmentID.

 ![](https://vtexhelp.zendesk.com/attachments/token/OZk1c79PgvKBKq6wGldvIbHM6/?name=image.png)



## Workaround


GET el OrderID, y obtener el ShipmentID y buscarlo en el puente





