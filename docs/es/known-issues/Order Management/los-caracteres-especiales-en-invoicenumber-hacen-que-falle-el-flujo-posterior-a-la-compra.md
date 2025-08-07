---
title: "Los caracteres especiales en invoiceNumber hacen que falle el flujo posterior a la compra"
id: 1tVPSLsB9SSZIF1KrNn3k2
status: PUBLISHED
createdAt: 2023-12-14T18:31:27.213Z
updatedAt: 2025-05-06T13:18:29.032Z
publishedAt: 2025-05-06T13:18:29.032Z
firstPublishedAt: 2023-12-14T18:31:27.801Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: los-caracteres-especiales-en-invoicenumber-hacen-que-falle-el-flujo-posterior-a-la-compra
locale: es
kiStatus: Fixed
internalReference: 953285
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Durante el flujo de facturas, el sistema de Pedidos permite introducir valores en el campo "`invoiceNumber`" (vía UI o API) que contengan caracteres especiales, ya sea al principio, en medio o al final, por ejemplo: `"#123456"`, `"123/456"` o `"123456/"`.

Sin embargo, el sistema SNO encargado de registrar la factura no puede procesar correctamente estos valores, lo que puede repercutir en diversos flujos posteriores a la compra. Esto puede dar lugar a errores o fallos en la ejecución de procesos como:


- Actualizaciones de seguimiento;
- Cambio del estado del pedido a "Facturado";
- Comunicación con el sistema GiftCardHub;
- Y cualquier otro flujo que dependa del campo "invoiceNumber".



## Simulación


1- Facture un pedido introduciendo el siguiente número de factura de ejemplo: "#123456"; (caracteres especiales al principio, en medio del número o al final)

2- Tenga en cuenta que el pedido no se actualizará al estado facturado

3- En el caso de los flujos que impliquen a un vendedor, en el Obtener Pedido del pedido del vendedor será posible ver la factura guardada, pero aún así el pedido del marketplace no se actualizará a facturado, ya que el sistema no podrá pasar la factura.



## Workaround


Los pedidos con facturas que contengan caracteres especiales no podrán ajustarse posteriormente. Para evitar interrupciones durante el flujo de pedidos, recomendamos utilizar únicamente caracteres alfanuméricos en el campo `invoiceNumber`.


