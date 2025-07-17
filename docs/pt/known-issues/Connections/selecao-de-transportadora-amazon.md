---
title: "Seleção de transportadora [Amazon]"
id: 7jaH0Pl8gfyQjZTXGPdk6A
status: PUBLISHED
createdAt: 2025-02-27T12:51:31.732Z
updatedAt: 2025-02-27T12:51:32.614Z
publishedAt: 2025-02-27T12:51:32.614Z
firstPublishedAt: 2025-02-27T12:51:32.614Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: selecao-de-transportadora-amazon
locale: pt
kiStatus: Backlog
internalReference: 1186908
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Divergência no tipo de método de entrega selecionado
Isso ocorre porque a integração, quando não solicitada dos EUA, na verdade envia null para a simulação.

## Simulação




1. A simulação retorna uma lista de SLAs.
2. A integração filtra para usar o SLA de menor valor.
3. A reserva é criada.
4. Ao fazer o pedido, o SLA da reserva é usado, ou seja, aquele com o valor mais baixo.

Entendemos que há uma divergência entre a escolha do comprador ao fazer o pedido e a forma como o pedido entra no OMS

## Workaround


N/A





