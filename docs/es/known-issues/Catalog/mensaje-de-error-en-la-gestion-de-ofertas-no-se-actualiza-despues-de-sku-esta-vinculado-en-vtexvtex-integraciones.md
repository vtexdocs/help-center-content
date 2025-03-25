---
title: 'Mensaje de error en la gestión de ofertas no se actualiza después de sku está vinculado en VTEX<>VTEX integraciones'
id: 5tMKDMsFTZlXQrkVM4WeJD
status: PUBLISHED
createdAt: 2022-12-08T14:02:22.948Z
updatedAt: 2024-02-16T20:24:16.785Z
publishedAt: 2024-02-16T20:24:16.785Z
firstPublishedAt: 2022-12-08T14:02:23.384Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: error-message-on-offers-management-does-not-update-after-sku-is-binded-on-vtexvtex-integrations
locale: es
kiStatus: No Fix
internalReference: 712956
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Cuando el sku es enviado al marketplace y hay un error en el proceso se abrirá una interacción como error en la UI de gestión de ofertas. De esta manera la oferta se establecerá como estado de error.

Sin embargo, si el error se corrige en el lado del vendedor y el sku se envía de nuevo al marketplace, esta vez con éxito, el mensaje de error no se actualiza a éxito, dando la impresión errónea al vendedor de que el sku todavía tiene problemas.

Este comportamiento ocurre en integraciones VTEX<>VTEX (vendedor y mercado son cuentas VTEX).


##

## Simulación



## Workaround



