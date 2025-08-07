---
title: "Validación de adjuntos obligatorios en el carrito de la tienda"
id: 5im16SzH3qkyeGCUW4UC2M
status: PUBLISHED
createdAt: 2018-10-10T17:35:48.675Z
updatedAt: 2022-12-22T20:43:13.901Z
publishedAt: 2022-12-22T20:43:13.901Z
firstPublishedAt: 2018-10-10T18:11:01.257Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: validacion-de-adjuntos-obligatorios-en-el-carrito-de-la-tienda
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

La validación de los adjuntos obligatorios se realiza sólo en el momento de la creación del pedido, en el último botón de "finalizar compra". Esta obligatoriedad de campos no se expresa en el carrito (`/checkout/#/cart`), donde los campos se muestran para relleno.

Esto es visible sólo en los adjuntos que no tienen valores predefinidos, entonces son campos de relleno manual. En el caso de adjuntos con valores predefinidos, se muestra una lista de selección, ya con algunos de ellos preseleccionados.

Idealmente la obligatoriedad de los campos debe ser expresada junto al mismo para que el cliente preste atención a esto antes de intentar cerrar el pedido, evitando el mensaje de error tardío.

## Simulación

1. Crear un SKU con adjuntos obligatorios;
2. Agregar este SKU en el carrito;
3. Seguir los pasos de la compra sin rellenar los campos de adjuntos;
4. Observar el mensaje de error al intentar completar el pedido.

## Workaround

Es posible hacer una validación personalizada de estos campos con el uso de Javascript en la página del carrito - si el campo obligatorio no está rellenado basta con hacer el bloqueo del botón de continuar el pedido.

