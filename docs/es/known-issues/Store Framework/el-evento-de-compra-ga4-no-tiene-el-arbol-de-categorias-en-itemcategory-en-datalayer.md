---
title: 'El evento de compra GA4 no tiene el árbol de categorías en item_category en dataLayer'
id: 6GCrgcG8PJHaZp80hi4Gb1
status: PUBLISHED
createdAt: 2023-07-12T16:42:17.087Z
updatedAt: 2023-07-12T16:43:37.976Z
publishedAt: 2023-07-12T16:43:37.976Z
firstPublishedAt: 2023-07-12T16:42:17.674Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: ga4-purchase-event-doesnt-have-the-category-tree-on-itemcategory-in-datalayer
locale: es
kiStatus: Backlog
internalReference: 860655
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


El evento de compra GA4 no tiene el árbol de categorías en item_category en dataLayer, por lo que la única categoría disponible es la categoría de último nivel del producto.


##

## Simulación



- Configurar la aplicación Google Tag Manager y activar "Enviar eventos de Google Analytics 4";
- Finalice una compra;
- En la consola, compruebe los eventos en dataLayer; sólo habrá la categoría de último nivel en item_category.



## Workaround


N/A



