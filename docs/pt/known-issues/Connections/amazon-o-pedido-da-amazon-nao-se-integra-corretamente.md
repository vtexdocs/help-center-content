---
title: "[Amazon] O pedido da Amazon não se integra corretamente"
id: 76AsvaidpYs285YXs3GkyJ
status: PUBLISHED
createdAt: 2024-10-02T13:52:36.821Z
updatedAt: 2025-03-12T19:20:30.278Z
publishedAt: 2025-03-12T19:20:30.278Z
firstPublishedAt: 2024-10-02T13:52:37.755Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-o-pedido-da-amazon-nao-se-integra-corretamente
locale: pt
kiStatus: Fixed
internalReference: 1109828
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O pedido da Amazon não é enviado corretamente para o OMS ou não segue todo o fluxo de trabalho corretamente, ficando preso em algum estágio.


## Simulação


Para fazer a reserva de pedidos da Amazon, a integração não configura as informações do deliveryChannel.

Na maioria das vezes, a falta dessa informação não tem impacto sobre o pedido, mas em alguns cenários de erro (como timeout para confirmar a reserva) o sistema de logística precisa dessa informação para reprocessar o pedido

## Workaround


N/A





