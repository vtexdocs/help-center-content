---
title: 'La creación de "custom fields" para "custom data" convierte los IDs a letras minúsculas'
id: 6oCXPldEYkC9HG1fw3G3RL
status: PUBLISHED
createdAt: 2019-02-19T18:52:45.049Z
updatedAt: 2019-12-31T15:16:46.219Z
publishedAt: 2019-12-31T15:16:46.219Z
firstPublishedAt: 2019-02-19T21:28:51.583Z
contentType: knownIssue
productTeam: Shopping
author: authors_4
tag: Checkout
slug: la-creacion-de-custom-fields-para-custom-data-convierte-los-ids-a-letras
locale: es
kiStatus: Closed
internalReference: 
---

## Sumario

Al crear "custom fields" en la sección de "custom data" a través de la API del checkout, los IDs de las apps informadas se convierten a letras minúsculas.

## Simulación

1. Utilizar la API [POST Update Custom Fields](https://documenter.getpostman.com/view/18468/vtex-checkout-api/6Z2QYJM#dc90afae-a4e5-59c5-1854-fc0fa81c99ee);
2. Enviar una "app" que tenga el "ID" con letra mayúscula (por ejemplo, "customFieldTest");
3. Observar en la respuesta del request que el "ID" fue convertido a letras minúsculas (en el ejemplo anterior, quedaría "customfieldtest").

## Workaround

Actualmente esta es una restricción de la API, no siendo posible solucionar el escenario. Los Custom Fields del Custom Data deben usarse con letras minúsculas.

