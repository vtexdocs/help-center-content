---
title: Orden de compraColocada Boleto Factura bancaria MOIP
id: 6LfWcVU6fgXalUXslYATIc
status: PUBLISHED
createdAt: 2022-05-18T18:35:54.748Z
updatedAt: 2022-11-25T22:01:04.364Z
publishedAt: 2022-11-25T22:01:04.364Z
firstPublishedAt: 2022-05-18T18:35:55.124Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: orden-de-compracolocada-boleto-factura-bancaria-moip
kiStatus: Backlog
internalReference: 376951
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El orderPlaced tiene una función automática que inyecta el PDF del "Boleto - Factura Bancaria" en un iframe dentro de la página de pedido terminado.
Pero especialmente el tipo Moip no permite incrustar el archivo en otra página.

También vemos este error a continuación, donde no será posible mostrar el boleto.
"`porque su tipo MIME ('text/html') no es una hoja de estilo de tipo MIME soportada, y la comprobación MIME estricta está activada.`"



## Simulación


Factura Bancaria como tipo MOIP es la forma de pago que se debe seleccionar para realizar una compra.
Y no verá la factura bancaria tipo Moip porque no es posible ver el archivo en la página de pedido.




## Workaround


No hay solución, la forma de evitarlo para los que usan moip es ocultar el "Boleto - Factura Bancaria" con CSS.

