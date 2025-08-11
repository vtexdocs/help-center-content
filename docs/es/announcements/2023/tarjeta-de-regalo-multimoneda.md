---
title: 'Tarjeta de regalo multimoneda'
id: 4FUXWCaQrFHcgjir698onc
status: PUBLISHED
createdAt: 2023-07-27T15:01:02.025Z
updatedAt: 2023-07-27T16:13:02.651Z
publishedAt: 2023-07-27T16:13:02.651Z
contentType: updates
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: multi-currency-gift-card
locale: es
legacySlug: tarjeta-de-regalo-multimoneda
announcementImageID: ''
announcementSynopsisES: 'Configura las tarjetas de regalo de tu tienda en múltiples monedas'
---

VTEX presenta una nueva funcionalidad de configuración de las tarjetas de regalo que considera las monedas locales utilizadas en tu tienda.

## ¿Qué cambió?

Antes, todas las tarjetas de regalo se creaban sin una moneda específica asignada a su valor. Antes de finalizar la compra, el cliente aplicaba la tarjeta de regalo como uno de los medios de pago en el checkout y el valor se descontaba según la moneda configurada en los productos del carrito.

A partir de ahora, el administrador de la tienda podrá seleccionar en qué moneda se generará la tarjeta de regalo y hacer que solo esté disponible para compras realizadas en esa misma moneda. 

## ¿Por qué realizamos este cambio?

En algunas regiones, como Europa o Estados Unidos, hay tiendas que venden sus productos a más de un país y operan con tablas de precios que utilizan monedas diferentes. Como no tiene lugar ninguna operación de cambio de divisa al utilizar la tarjeta de regalo, el importe del descuento podría ser mayor o menor dependiendo de la moneda aplicada en el carrito en el momento de la compra.

## ¿Qué se necesita hacer?

La asignación de una moneda específica a cada tarjeta de regalo es una funcionalidad opcional. Si no deseas seleccionar en qué moneda debe crearse, la acción será la misma que para las tiendas que utilizan un solo tipo de moneda, donde los descuentos de un determinado valor se aplican sin conversión de moneda.

Para crear una tarjeta de regalo en una moneda concreta, sigue los pasos que se indican a continuación:

1. En el Admin VTEX, accede a **Promociones > Tarjetas de regalo** o escribe **Tarjetas de regalo** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en `Nuevo vale` o `Nuevos vales en masa` (para crear un lote de tarjetas de regalo).
3. En el campo **Código de moneda**, selecciona la moneda deseada.
4. Rellena los demás campos para crear la tarjeta de regalo.
5. Haz clic en `Guardar`.

![Tarjeta de regalo multimoneda](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2023/tarjeta-de-regalo-multimoneda_1.PNG)

Las monedas disponibles serán las mismas que las registradas en las [políticas comerciales](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) de cada tienda.

> ⚠️ La elección de la moneda debe hacerse durante la creación de cada tarjeta de regalo o de un lote de tarjetas de regalo. No es posible cambiar la moneda asignada a una tarjeta de regalo una vez creada.
