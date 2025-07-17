---
title: "La tarjeta regalo Native está sumando crédito aunque devuelve 500"
id: 1EngiQGhpPorgURRsszMX4
status: PUBLISHED
createdAt: 2023-02-27T20:40:44.824Z
updatedAt: 2023-05-11T16:25:34.547Z
publishedAt: 2023-05-11T16:25:34.547Z
firstPublishedAt: 2023-02-27T20:40:45.470Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: la-tarjeta-regalo-native-esta-sumando-credito-aunque-devuelve-500
locale: es
kiStatus: Backlog
internalReference: 760896
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Tras realizar algunas pruebas empíricas, hemos observado que la ruta /transaction de la API nativa de tarjetas regalo, devuelve en ocasiones un código de error 500 al añadir el crédito solicitado, lo cual es un comportamiento inesperado. Además, hemos observado que la solicitud está tardando más de lo esperado en recibir una respuesta, lo que indica un comportamiento de tiempo de espera. Como resultado, no existe un bloqueo efectivo que garantice que el saldo de la tarjeta no se abonará en este caso.



## Simulación


Comportamiento intermitente.



## Workaround


N/A





