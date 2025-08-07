---
title: "API de tiempo de espera Obtener la configuración de aprobación de la cuenta"
id: 5dalpuBbuRYXj5WSal8UqR
status: PUBLISHED
createdAt: 2023-03-16T19:26:12.430Z
updatedAt: 2023-03-21T17:28:51.737Z
publishedAt: 2023-03-21T17:28:51.737Z
firstPublishedAt: 2023-03-16T19:26:12.826Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: api-de-tiempo-de-espera-obtener-la-configuracion-de-aprobacion-de-la-cuenta
locale: es
kiStatus: Fixed
internalReference: 772840
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Esta ruta devuelve "Maximum response size reached" cuando la respuesta JSON tiene más de 100MB.


##

## Simulación



Para cuentas con mucha información en el matcher o en el objeto de mapeo de especificaciones, esta respuesta ocurrirá en esta API
GET https://api.vtex.com//suggestions/configuration



## Workaround



N/A





