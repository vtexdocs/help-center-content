---
title: 'Gestionar el inventario del kit'
id: frequentlyAskedQuestions_156
status: PUBLISHED
createdAt: 2019-01-24T20:45:51.252Z
updatedAt: 2025-06-12T17:07:35.215Z
publishedAt: 2025-06-12T17:07:35.215Z
firstPublishedAt: 2019-01-24T22:03:46.311Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-to-manage-the-kit-stock
locale: es
legacySlug: como-gestionar-el-inventario-del-kit
subcategoryId: 17Lkzo2rGBE1Bt7dXjE0tV
---

Es posible construir el Kit de dos formas. Siguen consideraciones sobre cada una de ellas:

## Producto kit sin componente

Normalmente es un Kit que en el CD del Tendero ya se encuentra en una estructura de Kit (diversos componentes) y en VTEX él sólo señala este Producto, sin la necesidad de catastro de sus componentes. Esto es, tanto el Precio como el Inventario son señalados directamente en SKU Kit.

## Producto kit con componente

El kit con componentes se fundamenta en un Producto kit que posee un SKU que es nada más nada mismo que una “agrupación” de otros SKUs. Se utiliza normalmente este tipo cuando el kit se constituye de otros productos que ya se encuentran en la Tienda y son vendidos separadamente por origen. Esto es, usted selecciona aquellos SKUs de su tienda y señala que será el Precio y el Inventario necesario de cada SKU para componer 1 Kit de este Producto. 

Por ejemplo, un producto Kit Colorido se compone por otros diez SKUs. Cada uno con su precio y la cantidad necesaria de 1 ítem de cada SKU para que se pueda componer el Kit:

![](https://images.contentful.com/alneenqid6w5/2zwcLWeIX2kwsiQ0GCYm6G/b11fa6ded4ffb56faed9bc0158e980ae/kitcolorido.png)

En este tipo de kit, el precio y el Inventario del kit en sí es la suma de estos valores de sus respectivos componentes. Esto es, no se actualiza directamente el SKU del kit, pero sus respectivos componentes.

La cantidad en stock del kit es la cantidad máxima posible que puede obtenerse con la cantidad de ítems disponibles.
