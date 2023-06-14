---
title: '[Revista Luiza] [Ordem cancelada no Marketplace não foi cancelada na VTEX]'
id: 2HVJfeuKd74BYRpUKlpsQN
status: PUBLISHED
createdAt: 2023-04-18T16:53:18.470Z
updatedAt: 2023-04-18T16:53:19.166Z
publishedAt: 2023-04-18T16:53:19.166Z
firstPublishedAt: 2023-04-18T16:53:19.166Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: revista-luiza-ordem-cancelada-no-marketplace-nao-foi-cancelada-na-vtex
kiStatus: Backlog
internalReference: 792618
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O pedido foi cancelado no mercado, mas na OMS foi cancelado e ainda está no status "Aguardando autorização para despacho".


##

## Simulação


- Pedido cancelado em Makertplace;
- O status do pedido não foi atualizado para Canceled in OMS;
- O log não mostra nenhum erro no fluxo;
- Ponte não mostra nenhum erro;

Precisamos rever o fluxo de ordens canceladas e o trabalhador que busca o status dessas ordens no mercado.


##

## Workaround


É possível cancelar o pedido utilizando uma rota interna




