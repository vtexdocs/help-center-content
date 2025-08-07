---
title: "En algunos casos en los que hay un descuento en el pedido, tenemos una discrepancia en el valor total del campo Artículos a facturar en la interfaz de usuario del pedido."
id: 20xiOKxpvdCODmDJDKunST
status: PUBLISHED
createdAt: 2024-05-06T20:17:01.162Z
updatedAt: 2024-05-06T20:17:01.968Z
publishedAt: 2024-05-06T20:17:01.968Z
firstPublishedAt: 2024-05-06T20:17:01.968Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: en-algunos-casos-en-los-que-hay-un-descuento-en-el-pedido-tenemos-una-discrepancia-en-el-valor-total-del-campo-articulos-a-facturar-en-la-interfaz-de-usuario-del-pedido
locale: es
kiStatus: Backlog
internalReference: 1028210
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Se ha detectado que en algunos pedidos en los que existe un descuento asociado a uno o varios artículos, podemos tener una discrepancia en el valor total del campo "artículos a facturar" en la interfaz de usuario del pedido, ya que el cálculo de este campo tiene en cuenta el parámetro "precioVenta", en lugar del parámetro "precioDefiniciones". Por lo tanto, es posible notar diferencias de 0,01 o un poco más del valor total del pedido.

Hacemos hincapié en que este campo es ilustrativo, ya que el campo principal es el valor total (importe) del pedido y NO hay discrepancias en este campo.


##

## Simulación


No es posible simular este escenario.



## Workaround


No sería una solución, sólo un consejo para facturar el pedido con el importe total, informado en el campo "importe", o en el caso de facturas parciales, informar del valor del artículo(s).





