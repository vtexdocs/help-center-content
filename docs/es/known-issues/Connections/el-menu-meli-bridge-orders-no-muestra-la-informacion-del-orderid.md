---
title: "El menú MELI Bridge Orders no muestra la información del OrderID"
id: ZBc9ny043rVpYFqkZIQ1K
status: PUBLISHED
createdAt: 2023-08-16T10:46:52.015Z
updatedAt: 2023-10-05T18:51:13.700Z
publishedAt: 2023-10-05T18:51:13.700Z
firstPublishedAt: 2023-08-16T10:46:53.089Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: el-menu-meli-bridge-orders-no-muestra-la-informacion-del-orderid
locale: es
kiStatus: Fixed
internalReference: 881733
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Actualmente tenemos un problema que solo afecta a la visibilidad de algunos Pedidos MELI, lo que ocurre es que actualmente estamos registrando el ShipmentID en el menu del puente de pedidos, pero en algunos mensajes de error falta el OrderID, y es necesario para algunos casos ya que el orderID es la informacion que los vendedores tienen en el Portal MELI


##

## Simulación



Dentro del menú de pedidos puente, algunos mensajes de error no están registrando el OrderID, lo que da la impresión de que algunos pedidos no están en el brige VTEX, pero los vendedores pueden encontrar los pedidos buscando el shipmentID.



## Workaround


Buscar el shipmentID en lugar del orderID





