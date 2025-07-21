---
title: 'ViewPart "shippingValue" no muestra los plazos en horas correctamente'
id: 5hvl9eGxPLZAuNcFAFc9Vb
status: PUBLISHED
createdAt: 2019-09-09T20:07:14.796Z
updatedAt: 2024-12-26T19:37:53.602Z
publishedAt: 2024-12-26T19:37:53.602Z
firstPublishedAt: 2019-09-09T20:16:10.874Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: viewpart-shippingvalue-no-muestra-los-plazos-en-horas-correctamente
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Viewpart `<vtex.cmc: shippingValue />`, que se puede usar en la página de producto para calcular el valor del flete y el plazo de entrega, no muestra correctamente plazos en minutos u horas.

Por ejemplo, una transportadora llamada "Expreso" con plazo de hasta 4 horas para  la entrega se presentará con el siguiente texto:

`Flete Expreso, entrega en 4h para el código postal 130002.`

## Simulación

- Acceder a una página de producto que utilice tal ViewPart.
- Tener un producto con plazo de entrega de minutos u horas.
- Calcular el tiempo de entrega por medio de este componente.
- Observar el resultado.

## Workaround

__Este componente debe considerarse obsoleto.__

Actualmente, sugerimos que el cálculo de flete se realice por medio de la [API de simulación de carrito en el Checkout](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForms/simulation) o usando el endpoint [Calculate SLA](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping/calculate).

