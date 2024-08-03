---
title: 'Cómo utilizar la clase de producto no disponible del control de selección de SKU'
id: 62t7maHVvyAsqkSmi62g82
status: PUBLISHED
createdAt: 2018-01-18T18:10:19.780Z
updatedAt: 2023-03-29T01:05:52.326Z
publishedAt: 2023-03-29T01:05:52.326Z
firstPublishedAt: 2018-01-22T12:58:23.819Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: como-utilizar-la-clase-de-producto-no-disponible
locale: es
legacySlug: como-utilizar-la-clase-de-producto-no-disponible
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido solo para tiendas CMS Portal Legado.
</div>

## Qué es la clase de producto no disponible

El control de selección de SKU (`<vtex.cmc:skuSelection />`) permite al usuario de la tienda seleccionar uno de los SKUs de un producto. En general, se aplica en el carrito, para que el cliente de la tienda elija, por ejemplo, una camisa entre las opciones de tamaño P, M o G; una nevera de 110v o 220v; o un teclado blanco o negro.

Es decir, dada una especificación del SKU (tamaño, voltaje, color, etc.), el selector de SKUs muestra las opciones de valores disponibles para el usuario elegir.

__Caso un SKU con determinada especificación no esté disponible en stock, la tienda puede informar esta indisponibilidad visualmente.__

En el ejemplo siguiente, los tamaños P y G del producto no están disponibles.

![classeIndisponivel](https://images.contentful.com/alneenqid6w5/6dTacclHvqeaMwws8kqU8K/2d0d79d95dc521626eb1ba5c1c056da2/classeIndisponivel.png)

## Incluir la clase de producto no disponible

Cuando el control de selección de SKU (`<vtex.cmc:skuSelection />`) se incluye en una página de producto, la clase de producto se agrega automáticamente cuando un SKU no está disponible.

Por ejemplo: un cliente de su tienda entró en la página del producto Pantalones Jeans, y para ese producto están disponibles en stock los SKUs con especificaciones de tamaño 38 y 40, pero no el de tamaño 42.

Si el template de su página de producto activo actualmente tiene el control de selección de SKU, el SKU con especificación de tamaño 42 recibirá automáticamente la clase de indisponibilidad.

Usted puede personalizar su archivo CSS para que esta clase muestre, por ejemplo, el número cortado, o gris, o como desee.

## Determinar amqué especificación se asignará la clase

<div class="alert alert-warning">>
La clase de producto sólo se asigna a la especificación que aparece por último en la lista de especificaciones de SKU en el módulo Catalog.
</div>

Por ejemplo, en el caso del SKU, solo la especificación `Tamanho` recibirá la clase de indisponibilidad.

Si, en este caso, se desea que - en su lugar - la especificación `Faixa` reciba la clase, basta con invertir el orden de las especificaciones.
