---
title: 'Cálculo de la facturación de pedidos utilizando el valor de la factura de entrada en la validación de la factura de salida'
id: kEjeBKkJMpUDR0JdX6fZv
status: PUBLISHED
createdAt: 2023-11-06T11:39:27.169Z
updatedAt: 2023-11-09T20:47:52.250Z
publishedAt: 2023-11-09T20:47:52.250Z
firstPublishedAt: 2023-11-06T11:39:28.035Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: calculo-de-la-facturacion-de-pedidos-utilizando-el-valor-de-la-factura-de-entrada-en-la-validacion-de-la-factura-de-salida
locale: es
kiStatus: Fixed
internalReference: 930491
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Durante el proceso de envío de facturas, es posible que el usuario envíe facturas de salida y de entrada, pero si en un pedido se realizan dos facturas parciales, una de salida y otra de entrada, el sistema suma estos valores para validar si el pedido puede recibir una nueva factura, imposibilitando que los pedidos cuyo artículo fue facturado y luego devuelto no tengan facturado su valor total.

Esto se debe a que actualmente la API de Pedidos realiza una validación de valores para determinar si debe permitir que se realice una nueva factura de salida para el pedido, pero el cálculo está considerando la suma de todas las facturas independientemente de su tipo (entrada o salida), haciendo que el sistema entienda que no hay más valor a facturar.


##

## Simulación



1- Crear un pedido con dos unidades de la misma SKU
2- Factura sólo una de estas unidades
3- Realiza ahora una nueva factura de entrada por la unidad facturada en el paso anterior.
4- Ahora intenta facturar la unidad restante del pedido.
5- En este punto recibirás un mensaje genérico en la interfaz de usuario indicando que no es posible facturar el artículo.




## Workaround


No hay ninguna solución disponible.





