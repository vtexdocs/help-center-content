---
title: 'La ruta /transaction del sistema actual de tarjetas regalo devuelve un código de estado 200 OK al añadir o eliminar créditos, aunque la tarjeta esté inactiva.'
id: 4d5oeiLIvxLqmA1uHtZmrw
status: PUBLISHED
createdAt: 2023-04-24T20:31:14.640Z
updatedAt: 2023-05-08T17:54:43.745Z
publishedAt: 2023-05-08T17:54:43.745Z
firstPublishedAt: 2023-04-24T20:31:15.517Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: la-ruta-transaction-del-sistema-actual-de-tarjetas-regalo-devuelve-un-codigo-de-estado-200-ok-al-anadir-o-eliminar-creditos-aunque-la-tarjeta-este-inactiva
locale: es
kiStatus: Backlog
internalReference: 795997
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, nuestro sistema de tarjetas regalo no incluye una comprobación para verificar si una tarjeta regalo está activa antes de añadir o eliminar créditos. Aunque esta ruta solo afecta a la realización de transacciones con tarjetas regalo, es la única forma de hacerlo, por lo que se espera que se realice alguna validación.

Por lo tanto, para solucionar este problema, puede ser útil actualizar la ruta /transaction para que devuelva un código de estado más informativo, como 400 Bad Request o 404 Not Found, al intentar añadir o eliminar créditos de una tarjeta regalo inactiva. Además, proporcionar mensajes de error claros al usuario puede ayudar a evitar malentendidos y garantizar que las transacciones se procesen correctamente.



## Simulación


Realice una solicitud a /transaction route para añadir o eliminar créditos utilizando una tarjeta regalo desactivada.



## Workaround


N/A





