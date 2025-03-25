---
title: 'El precio del resultado de búsqueda es diferente de la página de producto'
id: 1108Xha3zw6ZvVUINfY7HR
status: ARCHIVED
createdAt: 2022-11-22T14:26:20.489Z
updatedAt: 2024-09-20T18:17:33.199Z
publishedAt: 
firstPublishedAt: 2022-11-22T14:42:50.738Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: the-price-in-the-search-result-is-different-from-the-product-page
locale: es
legacySlug: el-precio-del-resultado-de-busqueda-es-diferente-de-la-pagina-de-producto
subcategoryId: 23NGhMgqA1eCYad7kzRFGu
---

Durante la [actualización de precio de un SKU](https://help.vtex.com/es/tutorial/alteracao-de-preco-de-sku--tutorials_95), puede que el precio del resultado de búsqueda diverja del precio o stock de la página de producto si la tienda utiliza [Intelligent Search](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb).

Para utilizar Intelligent Search, se debe configurar la aplicación [Search Result](https://developers.vtex.com/vtex-developer-docs/docs/vtex-search-result). La propiedad `simulationBehavior`, que determina cómo se actualizan los datos de la búsqueda, se puede configurar como `skip`. Este ajuste permite que la carga de la búsqueda sea más rápida, sin embargo, puede generar la divergencia antes mencionada. La información de la página de búsqueda se actualizará automáticamente, pero la tienda puede configurar la propiedad `simulationBehavior` con el valor `default` para evitar divergencias futuras.
