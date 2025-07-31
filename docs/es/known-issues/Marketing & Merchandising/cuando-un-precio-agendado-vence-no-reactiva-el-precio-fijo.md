---
title: "Cuando un precio agendado vence, no reactiva el precio fijo"
id: 75RY8MaDPaiOGOoY2mwycg
status: PUBLISHED
createdAt: 2017-06-23T16:23:03.818Z
updatedAt: 2022-12-22T15:18:16.938Z
publishedAt: 2022-12-22T15:18:16.938Z
firstPublishedAt: 2017-06-23T17:43:31.782Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 5fYXkMJagMwcSAeMAsAuOI
tag: Pricing & Promotions
slugEN: cuando-un-precio-agendado-vence-no-reactiva-el-precio-fijo
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Se cuentan con dos precios: un precio fijo que siempre permanece vigente y un precio agendado que tiene validez para un rango acotado de fechas, que estará activo a la par del precio fijo.

![precio-agendado-no-reactiva](//images.contentful.com/alneenqid6w5/28x1hbS9l2QgsyIcYyUoSM/bf1eecf7c1a429f8fc0070040f6fc2ac/precio-agendado-no-reactiva.png)

Cuando el precio agendado vence, debería reactivar el precio fijo, ya que será el nuevo y único precio válido para ese SKU. Esta reactivación ocurre para la mayoría de los precios, pero no está ocurriendo en todos los casos y el producto queda publicado en la web, generalmente con un precio más económico que el precio fijo que no se reactivó automáticamente.

Reindexar manualmente el precio tampoco funciona. Suelen ser múltiples los casos en los que no se reactiva el precio fijo y se deben revisar uno a uno todos los precios para saber a cuales actualizarle la fecha a mano para que se muestre el nuevo precio.

## Simulación

1. Acceder a la página del precio del SKU ingresando a {nombredelatienda}.vtexcommercestable.com.br/admin/Site/SkuTabelaValor.aspx?id={IdDelSKU};
2. Crear un **precio AA** para una política comercial XX, válido desde el año 1000 hasta el año 4000;
3. Crear un segundo **precio BB** más económico que el **precio AA**, para la misma política comercial XX, válido desde el día de ayer hasta el día de mañana;
4. Cuando el **precio BB** se haya vencido, se debería reactivar el precio **AA** y hacerse visible en la ficha de producto de la tienda (escenario intermitente).

## Workaround

Este es un escenario intermitente. La solución momentánea es modificar la fecha al precio fijo (marcado como válido hasta la fecha 1/1/4000, cambiarla a 2/1/4000) y salvarlo. Luego el precio reindexará y se actualizará el precio en la publicación del producto en la web.

