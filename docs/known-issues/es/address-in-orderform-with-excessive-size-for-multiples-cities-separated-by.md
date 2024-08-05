---
title: "Dirección en orderForm con tamaño excesivo para múltiples ciudades separadas por '::'"
id: 7E6x4O56SxcSeU2qv09GBt
status: PUBLISHED
createdAt: 2023-01-06T11:52:36.229Z
updatedAt: 2023-01-06T13:36:37.250Z
publishedAt: 2023-01-06T13:36:37.250Z
firstPublishedAt: 2023-01-06T13:29:34.607Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: direccion-en-orderform-con-tamano-excesivo-para-multiples-ciudades-separadas-por
locale: es
kiStatus: Backlog
internalReference: 287854
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>

En algunos casos, la API de Checkout utiliza "::" como separador cuando hay varias posibilidades de ciudades desde el servicio de código postal, provocando un error por tamaño excesivo en el campo dirección, afectando a la realización del pedido. Este comportamiento ocurre porque la API tiene un autocompletado para la dirección


## Simulación

Considerando Argentina como un ejemplo que se ajusta a esta condición, al añadir el código postal 4427 vía "vtexjs" o API se puede ver la dirección definida en el orderForm separada por "::"


## Workaround

Vía API: enviar el parámetro `"clearAddressIfPostalCodeNotFound": false` en la petición para evitar que se autocomplete la dirección.
A través de "vtexjs": utilice la función "sendAttachment()" en lugar de "calculateShipping()" para que sea posible utilizar el parámetro mencionado anteriormente.

