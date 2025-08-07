---
title: "La tarjeta de regalo no se reembolsa después de la cancelación de la transacción"
id: lWW0jvEty50Pphr3JFYt7
status: PUBLISHED
createdAt: 2022-06-28T17:06:16.141Z
updatedAt: 2022-11-25T22:05:08.090Z
publishedAt: 2022-11-25T22:05:08.090Z
firstPublishedAt: 2022-06-29T12:49:40.594Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: la-tarjeta-de-regalo-no-se-reembolsa-despues-de-la-cancelacion-de-la-transaccion
locale: es
kiStatus: Backlog
internalReference: 491195
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando el pago es una tarjeta regalo y se produce un error durante el proceso de realización del pedido y éste queda incompleto, no se reembolsa la CG una vez cancelada la transacción.

Este problema se discutió por primera vez en este hilo y, básicamente, hay 2 operaciones gestionadas por el sistema de CG en las que puede ocurrir este problema:

1. Cuando se carga el importe de la tarjeta regalo;
2. Luego se guarda la información de la transacción en el SimpleDB.



## Simulación





## Workaround


Reembolso manual a través de la interfaz de usuario de la tarjeta regalo.

