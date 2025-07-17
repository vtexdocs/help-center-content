---
title: "Error al actualizar el límite de crédito del cliente"
id: 5JFf84sPhezlexXG7HvQrV
status: PUBLISHED
createdAt: 2024-09-06T13:22:57.385Z
updatedAt: 2024-09-06T13:22:58.275Z
publishedAt: 2024-09-06T13:22:58.275Z
firstPublishedAt: 2024-09-06T13:22:58.275Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-al-actualizar-el-limite-de-credito-del-cliente
locale: es
kiStatus: Backlog
internalReference: 1093711
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al intentar cambiar el Límite de Crédito (aumentar o disminuir) de una creditAccount puede producirse un error (vía Admin y API) con el mensaje:

`Solicitud fallida con código de estado 500`.


##

## Simulación


No hemos podido simular o identificar la causa.



## Workaround


Si la acción sigue fallando, aconsejamos borrar la creditAccount y crear una nueva.




