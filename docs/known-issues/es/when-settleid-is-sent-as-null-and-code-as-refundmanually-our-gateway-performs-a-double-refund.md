---
title: 'Cuando settleId se envía como null y el código como "refund-manually" nuestra pasarela realiza un doble reembolso.'
id: 2PdRRjHDODY2Tk0VItO4Fo
status: PUBLISHED
createdAt: 2022-07-11T17:37:43.961Z
updatedAt: 2022-11-25T22:04:38.681Z
publishedAt: 2022-11-25T22:04:38.681Z
firstPublishedAt: 2022-07-11T17:37:44.954Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: cuando-settleid-se-envia-como-null-y-el-codigo-como-refundmanually-nuestra-pasarela-realiza-un-doble-reembolso
locale: es
kiStatus: Backlog
internalReference: 615050
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La documentación de la APP indica que cuando el proceso de reembolso no ha funcionado, el proveedor debe responder con un `null` a este campo, y también cuando el reembolso debe realizarse manualmente, el campo de código debe tener el valor "refund-manually".

El problema es que cada uno de ellos desencadena un reembolso, haciendo que se duplique.



## Simulación


Enviar code="refund-manually" y settled=null en la respuesta de liquidación con PPP.



## Workaround


No envíe "reembolso-manual" en el campo de código, sino que envíe simplemente lo establecido como nulo.

