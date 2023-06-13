---
title: Hacer transacción de pedido recurrente por tokenización de la tarjeta
id: ONKkNx2M8KQOcCYySOm6S
status: DRAFT
createdAt: 2017-10-29T16:22:10.308Z
updatedAt: 2020-02-11T15:10:58.194Z
publishedAt: 
firstPublishedAt: 2017-10-29T16:26:41.089Z
contentType: tutorial
productTeam: Post-purchase
author: authors_39
slug: hacer-transaccion-de-pedido-recurrente-por-tokenizacion-de-la-tarjeta
legacySlug: hacer-transaccion-de-pedido-recurrente-por-tokenizacion-de-la-tarjeta
subcategory: 1rA9wuuskW3PpjvMrhatAM
---

La tokenización de la tarjeta funciona de la siguiente manera: cuando se cierra la primera compra marcando recurrencia, el Pagos se comunica con el adquiriente, que guarda los datos de la tarjeta y crea un token. Este token devuelve al Pagos, lo que hace que VTEX guarde esta información. 

Cada vez que se haga una transacción pasando este mismo token, el adquirente comprenderá que se trata de una recurrencia y no solicitará de nuevo los datos de la tarjeta, porque estos ya estarán guardados en su base. Ejemplos de adquirientes que utilizan este modelo son Braspag y Adyen.
