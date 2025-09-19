---
title: 'Crear un punto de recogida de contingencia para garantizarlo como opción en el checkout'
id: 3mowqWEfjyM2g6WoWgE0Ao
status: PUBLISHED
createdAt: 2018-04-01T16:02:02.437Z
updatedAt: 2023-08-01T21:35:48.449Z
publishedAt: 2023-08-01T21:35:48.449Z
firstPublishedAt: 2019-01-25T17:26:19.150Z
contentType: tutorial
productTeam: Shopping
author: authors_35
slugEN: creating-a-contingency-pickup-point-to-guarantee-it-as-an-option-at-checkout
legacySlug: crear-punto-de-recogida-de-contingencia-como-opcion-en-el-checkout
locale: es
subcategoryId: 8AGXmtpbTqUE2KQu0Swwk
---

En un escenario omnichannel en el que su tienda utiliza puntos de recogida configurados en cuentas franquicia, puede ser útil crear puntos de recogida de contingencia. Este artículo explica qué es esta configuración, para qué sirve y cómo implementarla.

Si su cliente final compra un producto en cualquiera de sus canales (en línea o tiendas físicas) y desea recogerlo en una tienda específica, por defecto esa tienda solo aparece como una opción de punto de recogida en el checkout si tiene stock del producto.

Sin embargo, usted puede preferir que esa tienda funcione como un punto de recogida __ incluso si no tiene stock__. Para esto, su logística necesita asegurar que el producto llegará a esa tienda desde otro stock, por ejemplo, desde el stock del comercio electrónico. En este caso, necesita tener una política de envío en el comercio electrónico en el que esté configurado el punto de recogida de la tienda física.

![Crear punto de retiro de contingencia para garantizarlo como opción en checkout](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/visi%C3%B3n-de-conjunto-de-checkout/crear-punto-de-recogida-de-contingencia-como-opcion-en-el-checkout_1.jpg)

## Cómo implementar un punto de recogida de contingencia

Para implementar un punto de recogida de contingencia, es necesario configurar los siguientes pasos:

1. En el Admin VTEX, [agrega un nuevo](/es/tutorial/cadastro-de-pontos-de-retirada--2R5ClQiwe4KoSQgsuiOw4E) punto de recogida en la tienda, con stock para suministrar los ítems que abastecerán dicho punto de recogida.
2. [Crea una nueva política de envío](/es/tutorial/politica-de-envio--tutorials_140) cuya estrategia de envío coincida con la estrategia de envío previamente configurada en la política que utiliza la tienda física donde se recogerán los productos.
3. Asocia esta nueva política al punto de recogida recién creado.

De esta forma, tendrás dos rutas logísticas: una que utilizará el stock de la tienda física, y otra logística que utilizará el stock de una tienda diferente.

Cuando el cliente elija este punto de recogida en el checkout, el sistema procederá de la siguiente manera:

- Si hay stock local, el plazo de entrega será más corto. En este caso, se seleccionará el punto de recogida principal.
- Si no hay stock local, se seleccionará la ruta logística configurada como contingencia.
