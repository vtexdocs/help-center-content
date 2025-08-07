---
title: "La búsqueda de direcciones en Google Maps no filtra por el país seleccionado en algunos casos."
id: 4zv3tvCMRBiZEWrQZnLViA
status: PUBLISHED
createdAt: 2023-01-04T21:02:55.874Z
updatedAt: 2023-01-04T21:02:56.479Z
publishedAt: 2023-01-04T21:02:56.479Z
firstPublishedAt: 2023-01-04T21:02:56.479Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: la-busqueda-de-direcciones-en-google-maps-no-filtra-por-el-pais-seleccionado-en-algunos-casos
locale: es
kiStatus: Backlog
internalReference: 727408
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Las búsquedas de direcciones de Google Maps para países sin reglas internas específicas no se filtran para devolver sólo este país seleccionado.


##

## Simulación


Considerando Panamá como país que cumple esta condición interna, estando en modo geolocalización y buscando "calle", el componente trae direcciones de España en lugar de filtrar estrictamente a direcciones de Panamá.


##

## Workaround


N/A




