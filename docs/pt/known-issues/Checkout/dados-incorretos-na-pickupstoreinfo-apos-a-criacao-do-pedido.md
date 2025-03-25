---
title: 'Dados incorretos na pickupStoreInfo após a criação do pedido'
id: 3OJzisIkFTyo97LCuiaytR
status: PUBLISHED
createdAt: 2023-03-28T16:11:55.486Z
updatedAt: 2023-03-31T14:08:27.755Z
publishedAt: 2023-03-31T14:08:27.755Z
firstPublishedAt: 2023-03-28T16:11:56.262Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: incorrect-data-in-pickupstoreinfo-after-order-creation
locale: pt
kiStatus: Fixed
internalReference: 347155
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Em algumas ocasiões, onde temos 1 item com opção de entrega e o outro item com opção de retirada. Os dados da `pickupStoreInfo` são preenchidos incorretamente após o término do pedido.

Lembrando que esta ocorrência é um pouco incomum, dado que não temos mais detalhes, registros ou outras ocorrências. Por isso, chegar a ser inconclusivo.


##

## Simulação


Dentro das informações do pedido, as informações da loja de retirada estão incompletas com informações nulas.



##

## Workaround


N/A




