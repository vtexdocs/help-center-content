---
title: 'La API de Regions no calcula correctamente el "seller 1" al solicitar sellers que no son white label'
id: 20sT9AMMi7Ob5IZc7FeiCB
status: PUBLISHED
createdAt: 2022-03-28T20:45:27.687Z
updatedAt: 2022-11-25T21:53:57.112Z
publishedAt: 2022-11-25T21:53:57.112Z
firstPublishedAt: 2022-03-28T20:45:28.144Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-api-de-regions-no-calcula-correctamente-el-seller-1-al-solicitar-sellers-que-no-son-white-label
locale: es
kiStatus: Backlog
internalReference: 551402
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



La API para recuperar el regionId para una dirección dada no está haciendo la solicitud interna de estimación de envío correctamente para el "vendedor 1", que se incluye al declarar "desiredSellerType" para los vendedores sin etiqueta blanca.

Como resultado, el "vendedor 1" puede aparecer como que no tiene cobertura de envío para la dirección dada.



## Simulación



- para consultar una dirección válida en la API "GET /api/checkout/pub/regions?country=XXX&postalCode=YYYY&sc=1&desiredSellerType=Default"
- tenga en cuenta que el "vendedor 1" puede no ser devuelto



## Workaround



N/A

