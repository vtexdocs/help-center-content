---
title: "MELI valor incorrecto cuando el cliente tiene Cupón en MELI"
id: 3PvNKqG2BMZDBLLVuriIHy
status: PUBLISHED
createdAt: 2024-01-22T11:58:00.747Z
updatedAt: 2024-10-01T12:14:48.088Z
publishedAt: 2024-10-01T12:14:48.088Z
firstPublishedAt: 2024-01-22T11:58:01.431Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-valor-incorrecto-cuando-el-cliente-tiene-cupon-en-meli
locale: es
kiStatus: Fixed
internalReference: 969297
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Actualmente el cliente utiliza un cupón en MELI, hay una variedad de tipos de cupones en MELI. Y algunos de ellos no están incluidos en los cálculos de VTEX OMS.


##

## Simulación



En VTEX OMS, el valor de la orden puede ser diferente de lo que MELI vendió al cliente, debido a que algunos tipos de cupones no están siendo considerados al crear la orden en VTEX.



## Workaround



Para los pedidos ME1, si el vendedor necesita tener el valor correcto del pedido, con el fin de enviar el valor de la factura a MELI, puede utilizar el campo en VTEX OMS llamado "total_paid_amount", este campo está considerando actualmente todos los valores de los cupones.





