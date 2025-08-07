---
title: "Añadir una nueva dirección en Dirección de factura devuelve resultados nulos de la API"
id: 43eiz4YORQv1u4yDahZdvC
status: PUBLISHED
createdAt: 2023-02-07T13:15:36.832Z
updatedAt: 2024-07-01T18:48:46.296Z
publishedAt: 2024-07-01T18:48:46.296Z
firstPublishedAt: 2023-02-07T13:15:37.293Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: anadir-una-nueva-direccion-en-direccion-de-factura-devuelve-resultados-nulos-de-la-api
locale: es
kiStatus: No Fix
internalReference: 748668
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando hay más de una dirección registrada en el Sistema de Perfiles, se produce una petición "nula" al servicio de código postal si se añade una nueva dirección en "Dirección de Facturación".


##

## Simulación



- Tener más de 1 dirección registrada en el Sistema de Perfiles;
- Seleccione un punto de recogida;
- Haga clic en "Entregar en otra dirección" para añadir una nueva dirección en "Dirección de facturación" sin seleccionar ninguna otra opción.

La solicitud era `/api/checkout/pub/postal-code/null/postalcodenumber`, por lo que devuelve el error 500. Debido a este retorno, no autocompleta la dirección utilizando el servicio de código postal.



## Workaround


Seleccione una opción ya registrada antes de añadir una nueva dirección




