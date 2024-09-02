---
title: 'Redondeo incorrecto del precio cuando el multiplicador de la unidad es diferente de 1'
id: 1L5RNoTBkoJxq2c22KDTRU
status: PUBLISHED
createdAt: 2022-03-21T17:43:03.979Z
updatedAt: 2022-11-25T22:14:03.772Z
publishedAt: 2022-11-25T22:14:03.772Z
firstPublishedAt: 2022-03-21T17:43:04.349Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: redondeo-incorrecto-del-precio-cuando-el-multiplicador-de-la-unidad-es-diferente-de-1
locale: es
kiStatus: Backlog
internalReference: 426275
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El precio mostrado por el bloque vtex.product-price diverge debido a los redondeos de la multiplicación de unidades.

En el siguiente ejemplo, el precio del producto es de 47,50 dólares y su multiplicador unitario es de 0,25.

Por lo tanto, para una unidad (0,25), el precio individual es 47,50*0,25 = 11,875.

Sin embargo, cuando se realiza una simulación de pago para este producto, el precio de venta devuelto se redondea a sólo 2 decimales: 1187.

Este precio redondeado se utiliza para calcular el precio de venta del componente, que es el precio de una unidad entera, sin considerar el multiplicador. Como se redondea antes del cálculo, el precio de venta final es incorrecto.
En este caso, 11,87*4 = 47,48.

Un efecto secundario causado por este problema es que el precio de venta se considera diferente al precio de lista del producto, y entonces el precio de lista se muestra también.

 ![](https://vtexhelp.zendesk.com/attachments/token/7K0amWgevdGtQcfZd1UdYaFkn/?name=inline1146427484.png)

Este comportamiento sólo se produce en el contexto de búsqueda, pero no en el PDP. En este caso, el precio de venta es correcto.



## Simulación


En un contexto de búsqueda, cargue un producto que tenga un multiplicador unitario diferente de 1 y cuyo unitMultiplier*price resulte en un número con más de 2 decimales.



## Workaround


Es posible desarrollar un componente personalizado para evitar este problema.

Además, existe una posibilidad menos viable que es la de registrar sólo los valores de los precios que al ser multiplicados por el unitMultiplier no resulten en fracciones de más de 3 decimales.

