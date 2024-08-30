---
title: 'El artículo deja de estar disponible si las opciones de montaje posibles no coinciden con el canal de venta del carrito.'
id: 36TbVrK9qcFFNUaIdN7JTH
status: PUBLISHED
createdAt: 2024-08-20T12:43:01.364Z
updatedAt: 2024-08-26T13:50:42.246Z
publishedAt: 2024-08-26T13:50:42.246Z
firstPublishedAt: 2024-08-20T12:43:02.653Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: el-articulo-deja-de-estar-disponible-si-las-opciones-de-montaje-posibles-no-coinciden-con-el-canal-de-venta-del-carrito
locale: es
kiStatus: Fixed
internalReference: 1083848
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Si un artículo tiene alguna opción de montaje posible que no está disponible para el canal de ventas utilizado en el carrito, el artículo deja de estar disponible.
Esto ocurre incluso si la opción de montaje en sí no es necesaria y no se ha añadido al carrito.



## Simulación



1. Crear una SKU padre, y una SKU hija que funcione como opción de montaje.
2. 2. Establezca que la opción de montaje sea opcional (cantidad mínima de cero, cantidad seleccionada por defecto de cero).
3. Establezca el canal de ventas de la SKU padre en uno que no esté disponible para la SKU hija.
4. 4. Intente añadir la SKU padre a un carro utilizando ese canal de ventas.



## Workaround


Si es posible, asegúrese de que las SKU de opción de montaje coinciden con todos los canales de venta utilizados por sus artículos de nivel superior.




