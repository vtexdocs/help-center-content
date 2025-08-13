---
title: 'Cómo se realiza el prorrateo del flete'
id: frequentlyAskedQuestions_155
status: PUBLISHED
createdAt: 2019-01-24T20:45:51.013Z
updatedAt: 2021-09-01T13:37:27.000Z
publishedAt: 2021-09-01T13:37:27.000Z
firstPublishedAt: 2019-01-24T22:13:11.668Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: how-proportional-shipping-costs-are-calculated
legacySlug: como-se-realiza-el-rateo-de-flete
locale: es
subcategoryId: 8AGXmtpbTqUE2KQu0Swwk
---

El prorrateo del flete es la división del valor total del flete entre los productos del carrito de compras. Se realiza para diferenciar el valor del flete de cada producto en la factura y justificar el cobro del valor total del flete. 

El cálculo se efectúa considerando el peso de cada ítem con relación al peso total del carrito de compras, de forma porcentual. Con esos porcentajes se realiza la división del valor total del flete entre cada producto del carrito. 

Por ejemplo, en un carrito de compras se calculó que el valor total del flete es USD 25,00 para cinco ítems (producto A, producto B, producto C, producto D y producto E) que sumados pesan 10 kg. El valor total del flete es USD 25,00 porque es la suma de los resultados del cálculo de los fletes de cada producto como se detalla a continuación:

*   El producto A pesa 2 kg, que equivale al 20% del peso del carrito. El valor del flete para ese ítem es USD 5,00 (que corresponde al 20% del valor total del flete).
*   El producto B pesa 1,75 kg, que equivale al 17,50% del peso del carrito. El valor del flete para ese ítem es USD 4,38 (que corresponde al 17,50% del valor total del flete).
*   El producto C pesa 500 kg, que equivale al 5% del peso del carrito. El valor del flete para ese ítem es USD 1,25 (que corresponde al 5% del valor total del flete).
*   El producto D pesa 4,5 kg, que equivale al 45% del peso del carrito. El valor del flete para ese ítem es USD 11,25 (que corresponde al 45% del valor total del flete).
*   El producto E pesa 1,25 kg, que equivale al 12,5% del peso del carrito. El valor del flete para ese ítem es USD 3,13 (que corresponde al 12,50% del valor total del flete).

Para facilitar la compresión a los usuarios, utilizamos el término «peso» en vez de «masa» en nuestra documentación, a pesar de que existe una diferencia entre ambos términos y un uso correcto.

> ❗ El peso del producto no puede ser cero. Esto puede provocar problemas en los costos del cálculo del flete.

## Cómo visualizar el prorrateo del flete

Es posible visualizar cómo se prorratea el valor del flete en el cálculo del flete. Puede ver la división de tales valores en el módulo Inventario y envío en el Admin (al simular un envío, los valores del flete se muestran de forma detallada) o por API (visualizar los valores en el JSON del pedido, tal y como lo devuelve la ruta [Get order](https://developers.vtex.com/vtex-developer-docs/reference/orders#getorder), dentro del detalle de cada ítem en el campo logisticsInfo).

Para saber más sobre cómo funciona la simulación de flete, lea el artículo [Simulador de envío](https://help.vtex.com/es/tutorial/simulacao-de-frete--tutorials_144).

