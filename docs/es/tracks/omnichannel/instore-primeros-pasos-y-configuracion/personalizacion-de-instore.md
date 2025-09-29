---
title: 'Personalización de VTEX Sales App'
id: Rby973h1l9tEM4C1YrzwZ
status: PUBLISHED
createdAt: 2021-09-16T00:55:10.885Z
updatedAt: 2023-07-24T23:04:49.692Z
publishedAt: 2023-07-24T23:04:49.692Z
firstPublishedAt: 2021-09-16T01:00:39.153Z
contentType: trackArticle
productTeam: Shopping
slugEN: customizing-instore
locale: es
trackId: zav76TFEZlAjnyBVL5tRc
trackSlugEN: instore-primeros-pasos-y-configuracion
order: 8
---

La experiencia VTEX Sales App es personalizable. Puede aplicar funcionalidades y configuraciones específicas según las necesidades de su negocio, así como adaptar el _layout_ de la aplicación para que se ajuste a la identidad de su marca.

Para ello, es necesario editar archivos JavaScript y CSS, tal y como se describe en la guía para desarrolladores[ How to customize VTEX Sales App](https://developers.vtex.com/docs/guides/how-to-customize-vtex-sales-app).

> ⚠️ La personalización de VTEX Sales App debe ser realizada por personas con experiencia en programación, ya que modificaciones incorrectas en estos archivos pueden provocar errores críticos.

Vea a continuación las personalizaciones disponibles en VTEX Sales App. Puede hacer clic en el nombre de cada una para acceder a su respectiva guía de implementación.

* [Personalizar opciones de inicio de sesión en VTEX Sales App](https://developers.vtex.com/docs/guides/how-to-customize-vtex-sales-app#list-of-customizations): permitir a los usuarios iniciar sesión en VTEX Sales App con su cuenta de Google o Facebook. 
* [Cambiar el idioma de VTEX Sales App](https://developers.vtex.com/docs/guides/change-vtex-sales-app-language): cambiar el idioma de VTEX Sales App a inglés o español. El idioma estándar de la aplicación es el portugués.
* [Habilitar el campo Observación en la página del pedido](https://developers.vtex.com/vtex-rest-api/docs/enable-the-remarks-field-in-the-order-screen): activar un campo para registrar información adicional sobre el pedido. Los datos introducidos en este campo se envían al módulo **Gestión de pedidos**.
    * [Habilitar el código del vendedor](https://developers.vtex.com/vtex-rest-api/docs/sales-associate-code): activar el código del vendedor, es decir, una personalización adicional del campo **Observación** para convertirlo en un campo obligatorio en el que los vendedores deben introducir sus códigos personales durante el flujo de compra.
* [Habilitar transferencia y captura del carrito entre dispositivos:](https://developers.vtex.com/vtex-rest-api/docs/enable-cart-transfer-between-devices) permitir que una compra iniciada en un dispositivo se finalice en cualquier otro dispositivo presente en el flujo de compra, sin necesidad de volver a añadir productos al carrito. Para más información, consulte [este artículo](/es/tracks/instore-usando-o-app--4BYzQIwyOHvnmnCYQgLzdr/2hlBqxHlxgFo2o4R52pbsk).
* [Habilitar el filtro de pedidos por vendedor: ](https://developers.vtex.com/vtex-rest-api/docs/enable-order-filter-by-sales-associate)definir que cada vendedor solo pueda ver los pedidos realizados por él, en lugar de mostrar todos los pedidos de la tienda por defecto.
* [Forzar disponibilidad de stock: ](https://developers.vtex.com/vtex-rest-api/docs/force-stock-availability)permitir la venta de ítems que no están disponibles en el stock del ecommerce. Por defecto, si un ítem no tiene stock en el catálogo de la tienda, no puede venderse en VTEX Sales App. Sin embargo, hay casos en los que el ítem está disponible en la tienda física. Esta personalización permite la venta en estos casos.
* [Configurar la impresión del resumen del pedido](https://developers.vtex.com/docs/guides/how-to-customize-vtex-sales-app#list-of-customizations): habilitar la impresión de un resumen del pedido al finalizarlo utilizando VTEX Sales App.
    * [Añadir texto adicional a la impresión del pedido](https://developers.vtex.com/vtex-rest-api/docs/add-extra-text-to-the-order-print): añadir un texto personalizado a la impresión del resumen del pedido.

## Sepa más

* [How to customize VTEX Sales App](https://developers.vtex.com/docs/guides/how-to-customize-vtex-sales-app)
