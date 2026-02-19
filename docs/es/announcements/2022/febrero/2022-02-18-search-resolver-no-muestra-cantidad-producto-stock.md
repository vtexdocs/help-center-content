---
title: 'Search resolver ha dejado de mostrar el número de productos en el stock de la tienda'
id: 7Ah6ou3RCoNmMeedZaBeJS
status: PUBLISHED
createdAt: 2022-02-18T15:51:53.790Z
updatedAt: 2022-02-21T16:30:53.405Z
publishedAt: 2022-02-21T16:30:53.405Z
contentType: updates
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: 2022-02-18-search-resolve-hides-number-product-stock
locale: es
legacySlug: search-resolver-no-muestra-cantidad-producto-stock
announcementImageID: 'undefined'
announcementSynopsisES: 'Para mejorar la privacidad de los datos, el search-resolver ha dejado de mostrar la cantidad de productos en stock'
---

Hemos actualizado la API de [`search-resolver@0.x`](https://github.com/vtex-apps/search-resolver), una aplicación necesaria para el funcionamiento de la búsqueda en la tienda, para que oculte datos sensibles relacionados con el _stock_ de los productos de la tienda. A partir del 20/03/22, la cantidad de productos disponibles en el _stock_ de la tienda ya no se mostrará por [VTEX Search GraphQL](https://github.com/vtex-apps/search-graphql).

Las tiendas que utilizan [VTEX Intelligent Search](/es/docs/tracks/vision-general-intelligent-search) no se verán afectadas.

## ¿Qué cambió?

Hemos eliminado la opción de mostrar la cantidad exacta de productos en el _stock_ de la tienda mediante `search-resolver@0.x` para los clientes que utilizan la búsqueda nativa de VTEX. Ahora, este campo se omitirá en la respuesta recibida por VTEX Search GraphQL. 

Para más detalles, consulta nuestra [nota de publicación](https://developers.vtex.com/vtex-developer-docs/changelog/update-on-search-resolver0x-api-response) sobre esta actualización.

## ¿Por qué realizamos este cambio?

Anteriormente, era posible ver la cantidad de un producto en _stock_ mediante la API de `search-resolver@0.x`. Sin embargo, dado que el _stock_ es un dato sensible y la API es pública, decidimos ocultar esta información.

## ¿Qué se necesita hacer?

Esta actualización es automática, no se requiere ninguna acción.  

Si utilizas estos datos en tu tienda (para indicar que un producto tiene pocas unidades en _stock_, por ejemplo) debes contactar con [nuestro equipo de soporte](https://support.vtex.com/hc/es-419/requests) para seguir mostrando esta información.

> ⚠️ Es importante señalar que, si la tienda decide mostrar la cantidad de productos en stock, esta información será pública y se podrá acceder a ella mediante [VTEX Search GraphQL](https://github.com/vtex-apps/search-graphql).

