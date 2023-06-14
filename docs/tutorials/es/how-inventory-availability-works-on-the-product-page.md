---
title: 'Cómo funciona la disponibilidad de inventario en la página de producto'
id: gyVfuG5dTyUyGA02iiU0y
status: PUBLISHED
createdAt: 2019-01-24T20:45:34.673Z
updatedAt: 2023-03-29T00:39:08.136Z
publishedAt: 2023-03-29T00:39:08.136Z
firstPublishedAt: 2019-01-24T22:15:25.141Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_59
slug: como-funciona-la-disponibilidad-de-inventario-en-la-pagina-de-producto
locale: es
legacySlug: como-funciona-la-disponibilidad-de-inventario-en-la-pagina-de-producto
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido solo para tiendas CMS Portal Legado.
</div>

Para entender el funcionamiento de la disponibilidad de stock mostrada para el usuario, necesitamos saber un poco cómo funciona la arquitectura de llamadas que ofrece la información de stock en la página de producto.

En la página de producto, el **Layout**, el módulo que renderiza las páginas, realiza una llamada al __Checkout__. El Checkout es el módulo que tiene la información más actualizada sobre la disponibilidad en stock de un producto. El Checkout __siempre devuelve la información de stock más actualizada posible__.

De esta manera, el Layout utiliza esta información del Checkout y muestra en la página de producto si un determinado SKU está disponible o no.

## SKU mostrado como no disponible

Es posible, aunque no es común, que un producto aparezca como __indisponible__ para un usuario, __incluso si tiene stock disponible__.

Lo que pasa es que las páginas de producto utilizan la caché para guardar algunos datos y optimizar su rendimiento. Por lo tanto, los pedidos buscan cierta información de las [capas de caché](/es/tutorial/entendendo-o-funcionamento-do-cache) en lugar de solicitar la información directamente a los servidores. Este es un procedimiento común en la web para que las respuestas a las solicitudes sean más rápidas y los sitios web ganen en eficiencia.

Debido a estas capas de caché, la información de disponibilidad de inventario en la página de producto puede ser diferente a la devuelta por el Checkout en el mismo momento. Para que la página de producto vea la información más actualizada de Checkout, es necesario expirar la caché de la página de producto. Para expirar la caché, usted debe agregar un parámetro cualquier a la URL de la página de producto (por ejemplo, `utm_source=qualquerstring`) y actualizar la página.

## SKU mostrado como disponible

De la misma manera, es posible que una página de producto muestre un SKU como __disponible__, incluso sin stock disponible.

Estos son los escenarios de __estoque raso__. Un usuario puede quedar un cierto tiempo en una página de producto que muestra la información de SKU disponible, de acuerdo con la información pasada por el Checkout en el momento de la llamada. Sin embargo, este stock puede haber sido consumido por otro cliente en ese tiempo.
