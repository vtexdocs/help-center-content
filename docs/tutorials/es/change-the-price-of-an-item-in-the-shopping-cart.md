---
title: 'Cambiar el precio de un ítem en el carrito de compras'
id: 7Cd37aCAmtL1qmoZJJvjNf
status: PUBLISHED
createdAt: 2022-05-23T18:57:04.527Z
updatedAt: 2022-10-27T12:21:17.571Z
publishedAt: 2022-10-27T12:21:17.571Z
firstPublishedAt: 2022-05-23T22:23:55.815Z
contentType: tutorial
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slug: cambiar-el-precio-de-un-item-en-el-carrito-de-compras
locale: es
legacySlug: cambiar-el-precio-de-un-item-en-el-carrito-de-compras
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

En VTEX, las tiendas pueden configurar manualmente el precio de un artículo (SKU) disponible en el carrito de Checkout. Esta función se denomina **Manual Price** (Precio Manual) y solo puede ser realizada por personas que tengan los siguientes perfiles de acceso y permisos registrados en VTEX Admin:

- **Perfil de acceso**: Owner (Admin Super) o Call Center Operator (Telesales) 
- **Permiso**: Shopping Cart Full Access

<div class="alert alert-warning">
  Los pasos a continuación se deben realizar en el dominio <i>myvtex</i> de cada tienda ({accountName}.myvtex.com.br).
</div>

## Cambiar el precio del ítem

Después de [habilitar la funcionalidad](https://developers.vtex.com/vtex-rest-api/docs/enable-the-manual-price) en su tienda, el precio de un producto se puede configurar manualmente en el carrito, de la siguiente manera:

1. En el carrito, seleccione el producto deseado.
2. Haga doble clic en el valor del precio mostrado.
3. Cambie el precio al valor deseado y presione `ENTER`.
4. Haga clic en `Cerrar pedido`.

![manualprice](https://images.ctfassets.net/alneenqid6w5/6lKNt1yT41wOQCRv5Yv6ge/a2c63f9fd22cbc180cb95ca790ab7b61/manualprice.gif)

Además de la configuración en la pantalla de Checkout , el precio de un producto también se puede modificar a través de la API [Change Price](https://developers.vtex.com/vtex-rest-api/reference/pricechange), obtenga más información en [Setting the price of an item manually](https://developers.vtex.com/vtex-rest-api/docs/enable-the-manual-price#setting-the-price-of-an-item-manually).

## Control de modificaciones

La seguridad operativa de esta funcionalidad se basa en controlar el acceso de personas que tienen perfiles específicos (mencionados anteriormente), sin los cuales no se puede modificar manualmente el precio de un ítem. Además, todos los cambios de precios realizados se registran y se pueden rastrear. Obtenga más información en [Recording manual changes to item prices](https://developers.vtex.com/vtex-rest-api/docs/enable-the-manual-price#recording-manual-changes-to-item-prices).

Una vez que se cierra el pedido, el precio ingresado manualmente debe ser aprobado por el administrador de la tienda o un usuario con permiso en el sistema de [Autorización de pedidos](https://help.vtex.com/es/tutorial/how-order-authorization-works--3MBK6CmKHAuUjMBieDU0pn).

<div class = "alert alert-info">
Una vez validado el valor del precio manual, el pedido sigue el flujo de facturación normal.
</div>

