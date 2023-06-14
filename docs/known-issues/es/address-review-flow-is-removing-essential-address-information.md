---
title: El flujo de revisión de direcciones está eliminando la información esencial de la dirección
id: 416pFRk6KsWIfgPr8pzWii
status: PUBLISHED
createdAt: 2022-08-11T18:33:49.548Z
updatedAt: 2022-11-25T21:50:56.733Z
publishedAt: 2022-11-25T21:50:56.733Z
firstPublishedAt: 2022-08-11T18:33:50.049Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: el-flujo-de-revision-de-direcciones-esta-eliminando-la-informacion-esencial-de-la-direccion
kiStatus: Backlog
internalReference: 618756
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La validación de la dirección en el modo de geolocalización (dirección insertada a través de Google Maps) está eliminando información esencial, como la calle y el número, de las direcciones válidas, afectando al flujo de compra.

El botón "calcular el envío", utilizado para la validación de la dirección en el modo de geolocalización (dirección insertada a través de Google Maps), se está mostrando incluso para las direcciones completas. Debería mostrarse sólo para las direcciones editadas -por cambio de información o por direcciones que estaban incompletas en un primer momento- para asegurar que son válidas, pero no para las direcciones completas.



## Simulación



- En una tienda que esté utilizando el modo de geolocalización, inserte una dirección incompleta (sin el número, como ejemplo)
- Rellene los campos que faltan (número)
- Se mostrará el botón "calcular el envío", que validará la dirección editada a lo largo de Google Maps para asegurar las geocoordenadas.

En este momento, la compra puede ir al paso de selección de envío, pero la dirección puede perder información.

Puede que no ocurra para todos los países o direcciones.



## Workaround


N/A

