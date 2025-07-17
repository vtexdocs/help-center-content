---
title: "Descuento nominal + Más por menos + Dividir por segundo artículo --> descuento incorrecto"
id: 4hxRWUY6P8aDR9T1KHd3Yf
status: PUBLISHED
createdAt: 2024-07-25T16:48:26.511Z
updatedAt: 2024-07-25T16:48:27.336Z
publishedAt: 2024-07-25T16:48:27.336Z
firstPublishedAt: 2024-07-25T16:48:27.336Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: descuento-nominal-mas-por-menos-dividir-por-segundo-articulo-descuento-incorrecto
locale: es
kiStatus: Backlog
internalReference: 1071119
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al configurar una promoción de descuento nominal que se acumula con la promoción más por menos, cuando hay un descuento en la promoción más por menos sólo para 1 de 2 artículos, se produce un descuento incorrecto en el artículo del segundo pedido debido a la división de la caja.

Por ejemplo, digamos que hay un 50% de descuento sólo para 1 de 2 artículos en un compra y gana y luego un -$300 de descuento, con ambas promociones acumulándose.

Digamos que el artículo cuesta $200 y se insertan 2.

Los descuentos **esperados** serían:

Artículo (1) ---> -$100 + -$100 --> el 2º artículo es sólo $100 porque no hay "espacio" adicional para ser reducido de su precio.
Artículo (2) --> -$200 ---> el resto del descuento para componer el total -$300

Sin embargo, el escenario que **actualmente ocurre** es:

Artículo (1) ---> -$100 + -$100 --> el segundo artículo es sólo $100 porque no hay "espacio" adicional para ser reducido de su precio.
Artículo (2) --> **-$100 ---> el precio del 1er artículo, a partir de la división se replica**.

Esto sólo ocurre si los artículos rebajados son 2+ unidades del mismo SKU y el "combo" de promociones especificado arriba.


##

## Simulación


1 - crear una promoción porcentual
2 - crear una promoción "comprar y ganar" que ofrezca descuento sólo para el 2º artículo
3 - introducir 2 unidades de dicho artículo en el carrito

OBS: la combinación de precios y descuentos debe ser tal que el "importe a descontar" del precio del 1er artículo no sea suficiente para componer el 50%+ del valor nominal del descuento



## Workaround


-






