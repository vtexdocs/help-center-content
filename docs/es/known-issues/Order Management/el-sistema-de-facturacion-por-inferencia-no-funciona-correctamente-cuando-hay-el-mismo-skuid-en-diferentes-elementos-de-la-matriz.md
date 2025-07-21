---
title: "El sistema de facturación por inferencia no funciona correctamente cuando hay el mismo SKUid en diferentes elementos de la matriz."
id: 3fSQGwIPj0ekewMuaxPPEe
status: PUBLISHED
createdAt: 2024-03-28T19:00:12.852Z
updatedAt: 2024-04-04T13:33:04.775Z
publishedAt: 2024-04-04T13:33:04.775Z
firstPublishedAt: 2024-03-28T19:00:14.053Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: el-sistema-de-facturacion-por-inferencia-no-funciona-correctamente-cuando-hay-el-mismo-skuid-en-diferentes-elementos-de-la-matriz
locale: es
kiStatus: Backlog
internalReference: 1008459
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Algunos pedidos tienen el mismo SKUid en un conjunto separado de artículos, esto ocurre en el momento de la compra en la caja por diferentes razones como el descuento a aplicar, por ejemplo.
Esto no es un problema sino una condición para el cálculo de la compra.

El problema está en la fase de facturación de esos artículos. A veces el sistema de inferencia no puede hacer coincidir los itens a insertar correctamente en los artículos de referencia en packageAttachment, debido a la misma SKUid y precios de venta.
Incluso si el cliente envía la cantidad de itens correctamente, la inferencia será incorrecta.

¿Es posible ver la diferencia entre el sistema SNO y los artículos del packageAttachment en el pedido?



## Simulación


Cree un pedido con más de una cantidad de artículos y aplique algún descuento, creando un pedido con más de un conjunto de artículos con diferentes precios de venta. Después de eso, intente facturar todos los artículos del pedido.




## Workaround


No hay ninguna solución.





