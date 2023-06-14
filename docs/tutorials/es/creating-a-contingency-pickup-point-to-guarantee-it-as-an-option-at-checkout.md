---
title: 'Crear un punto de recogida de contingencia para garantizarlo como opción en el checkout  '
id: 3mowqWEfjyM2g6WoWgE0Ao
status: CHANGED
createdAt: 2018-04-01T16:02:02.437Z
updatedAt: 2020-06-20T04:56:48.306Z
publishedAt: 2020-06-14T22:20:33.622Z
firstPublishedAt: 2019-01-25T17:26:19.150Z
contentType: tutorial
productTeam: Shopping
author: authors_35
slug: crear-punto-de-recogida-de-contingencia-como-opcion-en-el-checkout  
legacySlug: crear-punto-de-recogida-de-contingencia-como-opcion-en-el-checkout  
subcategory: 8AGXmtpbTqUE2KQu0Swwk
---

En un escenario omnichannel en el que su tienda utiliza puntos de recogida configurados en cuentas franquicia, puede ser útil crear puntos de recogida de contingencia. Este artículo explica qué es esta configuración, para qué sirve y cómo implementarla.

Si su cliente final compra un producto en cualquiera de sus canales (en línea o tiendas físicas) y desea recogerlo en una tienda específica, por defecto esa tienda solo aparece como una opción de punto de recogida en el checkout si tiene stock del producto.

Sin embargo, usted puede preferir que esa tienda funcione como un punto de recogida __ incluso si no tiene stock__. Para esto, su logística necesita asegurar que el producto llegará a esa tienda desde otro stock, por ejemplo, desde el stock del comercio electrónico. En este caso, necesita tener una política de envío en el comercio electrónico en el que esté configurado el punto de recogida de la tienda física.

![contingency pickup](//images.ctfassets.net/alneenqid6w5/7sxWH5eDPpCmNlEPfHiZF1/7a10b60e1273d58d9c2ca7610a9ba888/contingency_pickup.png)

## Cómo implementar un punto de recogida de contingencia

Siga estos pasos para implementar un stock de contingencia:
- En el panel administrativo del comercio electrónico o de la tienda que desee utilizar como fallback, es decir, la tienda de cuyo stock saldrán los productos para abastecer el punto de recogida, configure un nuevo punto de recogida con la información de la tienda física deseada.
- Aún en el comercio electrónico o en la tienda de fallback, cree una nueva política de envío. Esta política de envío debe tener exactamente el __mismo tipo de entrega__ ya configurado en la logística de recogida que se utiliza en la tienda física donde los productos serán retirados.
- Asocie el nuevo punto de recogida creado con esta política de envío.

<div class="alert alert-info">
Con esto, tendrá dos rutas logísticas con el mismo punto de recogida: una con el stock local de la tienda física y la otra con el stock de otro canal (comercio electrónico u otra tienda física). Cuando un cliente elige este punto de recogida en el checkout, las dos rutas competirán. Siempre que haya stock local, su SLA será más ventajoso y por lo tanto ganará. Cuando no haya stock local, el pedido caerá en la ruta que usted configuró a partir de este artículo.
</div>
