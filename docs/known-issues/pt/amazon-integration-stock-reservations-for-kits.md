---
title: 'Reservas de estoque de integração da Amazon para KITS'
id: 6ZEvHuGCOEcuQTya1oDOyu
status: PUBLISHED
createdAt: 2023-05-22T14:28:54.846Z
updatedAt: 2023-05-22T14:28:55.337Z
publishedAt: 2023-05-22T14:28:55.337Z
firstPublishedAt: 2023-05-22T14:28:55.337Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: reservas-de-estoque-de-integracao-da-amazon-para-kits
kiStatus: Backlog
internalReference: 829583
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Atualmente temos um problema de reserva de estoque na integração com a Amazon, o que acontece é que antes de criar o pedido fazemos uma reserva de estoque, e para itens que são KITS estamos tendo um problema na reserva de estoque, mas quando o pedido é criado o estoque está sendo reservado sem nenhum erro.

## Simulação



Isso só será aplicado para KITS na integração com a Amazon, e para a reserva de estoque, dentro do menu bridge - Orders, podemos ver um aviso:

Order reservation failed: SLA não disponíve

## Workaround



Depois que o pedido é criado, o estoque é reservado com sucesso.





