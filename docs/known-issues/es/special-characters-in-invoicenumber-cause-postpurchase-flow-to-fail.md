---
title: 'Los caracteres especiales en invoiceNumber hacen que falle el flujo posterior a la compra'
id: 1tVPSLsB9SSZIF1KrNn3k2
status: PUBLISHED
createdAt: 2023-12-14T18:31:27.213Z
updatedAt: 2023-12-14T18:31:27.801Z
publishedAt: 2023-12-14T18:31:27.801Z
firstPublishedAt: 2023-12-14T18:31:27.801Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: los-caracteres-especiales-en-invoicenumber-hacen-que-falle-el-flujo-posterior-a-la-compra
locale: es
kiStatus: Backlog
internalReference: 953285
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, SNO (Shipping Notification Order) acepta que se envíe un número de factura (invoiceNumber) a través de API y UI con un "carácter especial" al final o al principio de los datos, por ejemplo: "#123456".

Sin embargo, cuando se reciben facturas en este formato, algunos flujos llevados a cabo por el sistema implicado en el flujo posterior a la compra acaban devolviendo un error porque son incapaces de procesar o pasar el importe recibido. Algunos ejemplos de flujos que pueden fallar son las actualizaciones de seguimiento, las actualizaciones del estado de los pedidos facturados, la comunicación con el sistema gifcard hub, y cualquier otro sistema que utilice datos invoiceNumber puede ver comprometido su flujo debido al uso de caracteres especiales en el campo invoiceNumber.


##

## Simulación


1- Facture un pedido introduciendo el siguiente número de factura de ejemplo: "#123456"; (caracteres especiales al principio del número o al final)

2- Tenga en cuenta que el pedido no se actualizará al estado facturado

3- En el caso de flujos que impliquen a un vendedor, en el Obtener Pedido del pedido del vendedor será posible ver la factura guardada, pero aún así el pedido del marketplace no se actualizará a facturado, ya que el sistema no podrá pasar la factura.



## Workaround


Para estos casos, la solución alternativa es no utilizar los "caracteres especiales" en la composición invoiceNumber.






