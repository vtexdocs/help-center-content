---
title: "Transacciones con tarjeta regalo vacías"
id: 4p8G7gVm3MobrVDkDH9zy9
status: PUBLISHED
createdAt: 2022-03-27T18:55:45.429Z
updatedAt: 2024-12-13T19:35:54.624Z
publishedAt: 2024-12-13T19:35:54.624Z
firstPublishedAt: 2022-03-27T18:55:45.834Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transacciones-con-tarjeta-regalo-vacias
locale: es
kiStatus: Backlog
internalReference: 384430
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Los puntos finales de API Get Giftcard Transaction y Get GiftCard from GiftCard Provider siempre devuelven una respuesta vacía


##

## Simulación



1. En una cuenta con tarjetas regalo nativas, elige una transacción ya pagada con una tarjeta regalo
2. Copie el giftcardId y llame al punto final Get Giftcard Transaction o Get GiftCard from GiftCard Provider
3. La respuesta estará vacía



## Workaround


N/A





