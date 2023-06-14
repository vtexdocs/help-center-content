---
title: 'Rateo incorrecto del valor del kit cuando se aplica un descuento'
id: mZLhWgjrvEa0eISE4syUE
status: PUBLISHED
createdAt: 2017-04-06T17:27:01.147Z
updatedAt: 2022-12-22T20:45:25.176Z
publishedAt: 2022-12-22T20:45:25.176Z
firstPublishedAt: 2017-05-18T19:56:56.627Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: rateo-incorrecto-del-valor-del-kit-cuando-se-aplica-un-descuento
kiStatus: Backlog
internalReference: 
---

## Sumario

Cuando se aplica un descuento, hay una divergencia entre el valor total de un kit y la suma de los valores de sus componentes.

### Ejemplo 1:

Un kit tiene el precio de R$ 7,72. Este kit recibe un descuento de R$ 1,16. Cuando el valor del precio del kit se realiza entre sus componentes, la suma del precio de los componentes queda en R$ 7,70.

### Ejemplo 2:

Un kit tiene el precio de R$ 7,72. Este kit recibe un descuento de R$ 1,16. Cuando el rateo del descuento se realiza entre sus componentes, la suma del descuento de los componentes queda en R$ 1,40.

Este error se produce por el redondeo realizado en las divisiones de los valores.

Con esta diferencia de valores, los comerciantes no consiguen insertar la factura en sus sistemas.

## Simulación

1. En el módulo **Catalog**, registrar un kit con 4 componentes;
2. En el módulo **Pricing**, crear una promoción para ese kit;
3. Cerrar un pedido con este kit con la promoción aplicada;
4. El JSON o XML del pedido mostrará la divergencia entre el valor total y el valor de la suma de las partes.

## Workaround

Este es un escenario intermitente. La solución momentánea es introducir manualmente los valores para que el ERP consiga generar la factura con el valor correcto.

