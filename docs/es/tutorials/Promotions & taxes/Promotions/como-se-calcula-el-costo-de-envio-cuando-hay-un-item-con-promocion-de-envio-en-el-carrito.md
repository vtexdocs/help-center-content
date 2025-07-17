---
title: '¿Cómo se calcula el costo de envío cuando hay un ítem con promoción de envío en el carrito?'
id: 3EaQjxkErC6OKAWCWYSMiw
status: PUBLISHED
createdAt: 2019-01-24T20:45:34.018Z
updatedAt: 2023-03-29T19:56:11.668Z
publishedAt: 2023-03-29T19:56:11.668Z
firstPublishedAt: 2019-01-24T22:04:11.324Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_59
slugEN: how-is-shipping-cost-calculated-when-theres-an-item-with-shipping-benefit-on-the-cart
locale: es
legacySlug: como-se-calcula-el-costo-de-envio-cuando-hay-un-item-con-promocion-de-envio-en-el-carrito
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

Este artículo tiene como objetivo aclarar cómo funciona el prorrateo del costo de flete entre los ítems de un carrito cuando uno de estos ítems tiene una promoción de flete.

## División del costo de envío entre los elementos

El costo de envío tiene en cuenta el __peso de los productos__ añadidos a un carrito. Estos pesos están registrados en la [planilla de envío de un transportista](/es/tutorial/como-montar-la-plantilla-de-flete).

Cuando hay más de un elemento en el carrito, el costo del envío dividido por cada ítem es __proporcional a su peso, teniendo como referencia el peso total del carrito.

Vamos a analizar cómo se calcula la división del costo de envío en un carro con 5 ítems, con un costo total de envío de 200 unidades monetarias:

<div class="alert alert-info">
Para descubrir el costo de envío de un carrito, haga una <a href="http://help.vtex.com/es/tutorial/simulacion-de-flete"> simulación de flete </a>. Para saber el peso de un SKU, acceda a <strong>Productos y SKUs</strong> en el menú Catálogo y busque por <strong>Peso para Envío</strong>.
</div>

- __Costo total de envío: __ 200
- __Peso del producto A: __ 20
- __Peso del producto B: __ 25
- __Peso del producto C__: 15
- __Peso del producto D__: 10
- __Peso del producto E__: 30
- __PESO TOTAL__ = 100

El cálculo del costo de envío de cada ítem será dado por la siguiente fórmula:

__Costo total de envío x (peso del producto / PESO TOTAL) __

Aplicando la fórmula anterior, tenemos:

__200 x (20/100) = 40__

* El costo total de envío * es __200__. Vemos que el * Peso del Producto A * representa __20% __ del peso total del carro (__20 / 100__).

Por lo tanto, el * Coste de Envío del Producto A * será __40__.

## División del costo de envío cuando hay promoción de flete en el carrito

Cuando hay una __promoción de flete__ para algunos ítems en el carrito, el cálculo de prorrateo del costo de envío ocurre como se describe en la sección anterior.

Vamos a suponer un escenario donde el __Producto B__ reciba una promoción de * 10% en el valor de su flete *.

Aplicando la fórmula, tenemos:

__200 x (25/100) = 50__

* El costo total de envío * es __200__. Vemos que el __Peso del Producto A__ representa __25% __ del peso total del carro (__25 / 100__).

Por lo tanto, el * Coste de Envío del Producto B * será __50__.

Como el producto B posee una promoción del 10% en el valor de su flete, el costo de envío será:

__50 - (50 x 10%) = 45__

Si el producto B tuviera una promoción de Envío Gratuito, su costo de envío sería __zero__:

__50 - (50 x 100%) = 0__

Por lo tanto, para calcular el impacto de una promoción de flete en el costo de envío de un ítem, es necesario calcular el costo de envío proporcional al peso del ítem y aplicar el porcentaje de descuento a este valor.
