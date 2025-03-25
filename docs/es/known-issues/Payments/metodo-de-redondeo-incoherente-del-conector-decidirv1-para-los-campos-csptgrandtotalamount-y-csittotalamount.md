---
title: 'Método de redondeo incoherente del conector DecidirV1 para los campos CSPTGRANDTOTALAMOUNT y CSITTOTALAMOUNT.'
id: 6VcgLkWcGwMdkpuJQ14ZBt
status: PUBLISHED
createdAt: 2023-04-10T20:32:29.930Z
updatedAt: 2023-04-10T20:32:30.771Z
publishedAt: 2023-04-10T20:32:30.771Z
firstPublishedAt: 2023-04-10T20:32:30.771Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: decidirv1-connectors-inconsistent-rounding-method-for-csptgrandtotalamount-and-csittotalamount-fields
locale: es
kiStatus: Backlog
internalReference: 787367
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


El conector heredado DecidirV1 utiliza un método interno para calcular los campos `CSPTGRANDTOTALAMOUNT` y `CSITTOTALAMOUNT`, que es el producto entre el valor del producto y la cantidad. Este método da como resultado una cadena con dos decimales. En consecuencia, cuando el precio del producto contiene más de dos decimales, el valor del campo `CSPTGRANDTOTALAMOUNT` diverge, ya que es el propio valor del pago.


##

## Simulación


Realiza un pedido utilizando decidirV1 con un producto en el carrito con un precio que tiene más de 3 decimales.



## Workaround


Para evitar estas discrepancias, recomendamos utilizar productos con un máximo de dos decimales o modificar el carrito de la compra para eliminar el uso de decimales.





