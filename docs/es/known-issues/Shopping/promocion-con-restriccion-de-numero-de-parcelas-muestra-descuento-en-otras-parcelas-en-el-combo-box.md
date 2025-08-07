---
title: "Promoción con restricción de número de parcelas muestra descuento en otras parcelas en el combo box"
id: 4oKJDg0ygC40oiOAx2lkdG
status: PUBLISHED
createdAt: 2019-03-18T14:30:33.359Z
updatedAt: 2022-12-22T20:46:18.368Z
publishedAt: 2022-12-22T20:46:18.368Z
firstPublishedAt: 2019-03-18T14:34:47.612Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: promocion-con-restriccion-de-numero-de-parcelas-muestra-descuento-en-otras-parcelas-en-el-combo-box
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Al registrar una promoción para pagos con tarjeta, con limitaciones de cantidad de parcelas (por ejemplo, "10% en efectivo"), el descuento se presenta después de la selección de esa cantidad de parcelas en el checkout. Sin embargo, ese valor con descuento pasa a ser el nuevo valor total, en que los demás parcelamientos van a basarse para la exhibición de los valores. Luego, en el campo de selección, al abrir las opciones, se visualizan las demás parcelas calculadas con base en el valor total __con el descuento__. Al seleccionar un parcelamiento diferente, sin embargo, el valor mostrado pasa a ser el correcto.

Este escenario ocurre sólo para descuentos en tarjeta y en el momento de la selección. La compra __nunca es cerrada con el valor equivocado__.

## Simulación

1. Cree una promoción con restricción en cantidad de parcelas;
2. Acceda a la tienda y cierre un carrito;
3. Seleccione la cantidad de parcelas en que se aplica la promoción;
4. Note que, al abrir nuevamente el campo de selección de parcelas, las demás opciones también exhiben el descuento;
5. Seleccione otra parcelación y vea que el valor se ajusta.

## Workaround

No hay workaround para este escenario.

