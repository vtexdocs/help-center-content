---
title: 'Cómo identificar split de pedidos en omnichannel'
id: 5LuhsjJkEEqU0uysEuIUQO
status: PUBLISHED
createdAt: 2018-06-19T06:52:10.893Z
updatedAt: 2023-03-29T18:34:26.061Z
publishedAt: 2023-03-29T18:34:26.061Z
firstPublishedAt: 2019-01-25T17:29:55.002Z
contentType: tutorial
productTeam: Shopping
author: authors_35
slugEN: how-to-identify-an-order-split-from-omnichannel
legacySlug: como-identificar-split-de-pedidos-en-omnichannel
locale: es
subcategoryId: 3VNOhxDrvYxJThhuJClrYZ
---

Las tiendas que operan con estrategias de [Comercio unificado](/es/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv) y arquitectura _omnichannel_ deben gerenciar los pedidos junto con su conciliación financiera. El módulo **Pedidos** y la solución [Split de pagos](/es/docs/tutorials/split-de-pagos) permiten dividir el pedido de una tienda entre múltiples _sellers_, a lo que se le conoce como _split_ de pedidos.

Se puede saber si hubo un _split_ de pedido mediante el código identificador del pedido. Hay dos formatos de código para tiendas que operan como [marketplace](/es/docs/tutorials/configurar-marketplaces-vtex):

- Secuencia numérica compuesta de 12 dígitos. Ejemplo: `527103869572`.
- Secuencia alfanumérica, de forma predeterminada, compuesta por la letra "v", seguida de seis números y cuatro letras. Ejemplo: `v527103anml`.

Cuando hay un _split_ de pedido, se añade un sufijo al código, tal como `-01` o `-02`. Cada número representa un seller. El conteo comienza desde uno y se realiza de forma ascendente.

> Ejemplo: en el entorno del marketplace, el código de pedido con _split_ es `527103869572-01` o `v527103anml-01`.

> ℹ️ El pedido realizado en el marketplace tiene un código identificador en el entorno de los sellers. Cada seller tiene acceso restringido a su parte del pedido y no tiene ningún acceso a los pedidos de otros sellers.

El código identificador del pedido en el entorno del seller tiene como base la misma secuencia utilizada en el marketplace, más el prefijo adicional correspondiente al [ID de afiliado](/es/docs/tutorials/que-es-afiliado), el código de tres consonantes que identifica al seller en el marketplace.

> Ejemplo: si el código del pedido en el marketplace es `v527103anml-01`, en el entorno del seller corresponderá a `SLR-v527103anml-01`.

Puede que algunas tiendas que tengan [integraciones de ERP](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide) y otros sistemas tengan que realizar configuraciones adicionales o personalizaciones para recibir la información de _split_ de pedidos. Si la tienda tiene acceso al entorno del marketplace y del seller, puede acceder a la información mediante [API](https://developers.vtex.com/vtex-rest-api/reference/listorders).

## Más información

- [Cuidados al definir la numeración de pedido](/es/docs/tutorials/cuidados-al-definir-la-numeracion-de-pedido)
