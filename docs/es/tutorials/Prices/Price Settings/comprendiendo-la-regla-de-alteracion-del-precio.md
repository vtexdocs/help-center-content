---
title: 'Cómo funciona la regla de alteración del precio'
id: tutorials_752
status: ARCHIVED
createdAt: 2017-04-27T21:58:25.042Z
updatedAt: 2021-05-26T15:26:54.825Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:42.161Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: understanding-the-price-change-rule
locale: es
legacySlug: comprendiendo-la-regla-de-alteracion-del-precio
subcategoryId: 3O1NvPgBPqE0qU88MSQaie
---

La alteración de precios de su tienda es una tarea delicada y que puede ser realizada por diferentes caminos. Para aumentar la seguridad de esta acción, más allá de los logs de alteraciones, es posible configurar un porcentaje aceptable de variaciones en el precio de un item. Esta función asegura que los valores de los productos no sean alterados de forma prejudicial para la operación de la tienda.

Por defecto, este límite de variación viene configurado para aumento máximo de 70% y disminución máxima de 30% del valor.
En las configuraciones nativas, por ejemplo, un SKU con el valor de $100,00 podrá tener su valor elevado hasta, como máximo, $170,00 (70% de 100) y disminuido hasta $70,00 (30% de 100).

En el caso de que intente alterar el precio del SKU sin respetar este rango, por la **API REST** retornará el siguiente mensaje: `“The price is outside the range set, sku: 123, original price: 100.0000, maximum price: 170.0000, minimun price:70.0000″`

Este bloqueo se realiza también para todas las demás formas de alteración del precio.

El porcentaje de limite de precio puede ser retirado o reformulado en la pestaña __Configuración__ del módulo __Precios__. 

![trava-variação-preço es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Prices/Price Settings/comprendiendo-la-regla-de-alteracion-del-precio_1.png)

Algunos marketplaces también utilizan este límite de variación de precios. Si desea cambiar los precios más allá de los límites configurados, basta ponerse en contacto con el marketplace solicitando el cambio.
