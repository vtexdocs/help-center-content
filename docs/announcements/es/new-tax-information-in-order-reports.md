---
title: 'Nueva información sobre tasas en el informe de pedidos'
id: 5w4kBsXd6DIzBjyGMe5Tmy
status: PUBLISHED
createdAt: 2021-04-08T18:19:51.100Z
updatedAt: 2021-04-09T13:56:32.437Z
publishedAt: 2021-04-09T13:56:32.437Z
contentType: updates
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slug: nueva-informacion-sobre-tasas-en-el-informe-de-pedidos
locale: es
legacySlug: nueva-informacion-sobre-tasas-en-el-informe-de-pedidos
announcementImageID: ''
announcementSynopsisES: 'La columna Taxes del informe de pedidos ha sido modificada para ofrecer visibilidad sobre el valor total de impuestos.'
---

La exportación de los informes de pedidos permite realizar acciones externas, como analizar el desempeño de promociones o utilizarlos como nota de entrega para facilitar la logística de la tienda.

La columna **Taxes** del [informe de pedidos](https://help.vtex.com/es/tutorial/planilla-de-pedidos--31m1ewsmsEe0WS4So2aGMY) ha sido modificada para ofrecer a los administradores de tienda más visibilidad sobre el valor total de impuestos cobrados en cada pedido.

## ¿Qué cambió?

Anteriormente, la columna **Taxes** del informe de pedidos solo mostraba las tasas [introducidas en el Checkout](https://help.vtex.com/es/tutorial/ingresar-tasas-en-el-carrito--2wY5ePTTRz17EBhO3F7XBQ), es decir, los valores identificados como `Tax`. El informe no tenía en cuenta las tasas personalizadas [creadas en Tasas y Promociones en el admin](https://help.vtex.com/es/tutorial/creando-la-tasaimpuesto--tutorials_321), es decir, no contenía los valores identificados como `CustomTax`.

Ahora, la columna **Taxes** muestra la suma de los valores de las tasas introducidas en el Checkout (`Tax`) y de las tasas creadas en **Tasas y Promociones** (`CustomTax`).

Para las tiendas que no utilizan tasas o cuya suma de valores es 0, el informe generado mostrará la columna **Taxes** vacía, para no afectar a la experiencia de los clientes que utilizan esta estructura de datos.

## ¿Por qué realizamos este cambio?

El informe anterior no mostraba la información de las tasas personalizadas creadas en **Tasas y Promociones** (`CustomTax`), lo que impedía a los administradores de la tienda que utilizan esta configuración conocer el valor total de los impuestos que se cobran.

Con el cambio, el valor total de los impuestos aplicados a cada pedido se informa en la columna **Taxes**, lo que contribuye a que los datos sean más precisos para la creación de notas de entrega de la tienda.

## ¿Qué se necesita hacer?

No se requiere ninguna acción, el cambio es automático para todas las tiendas VTEX. Todos los informes de pedidos generados a partir de hoy ya reflejan este cambio.

Para entender cómo exportar pedidos, consulte el tutorial [Exportar pedidos en Gestión de pedidos](https://help.vtex.com/es/tutorial/exportacion-de-pedidos-en-gestion-de-pedidos--tutorials_6417), y para saber más sobre la estructura del informe de pedidos, consulte el artículo [Informe de pedidos](https://help.vtex.com/es/tutorial/planilla-de-pedidos--31m1ewsmsEe0WS4So2aGMY).

