---
title: 'Item disponível quando a localização do cliente não está definida e não há estoque'
id: 7vDywP0WtfpJ4bCiNkXNfw
status: PUBLISHED
createdAt: 2024-07-30T22:51:30.425Z
updatedAt: 2024-07-30T22:54:29.056Z
publishedAt: 2024-07-30T22:54:29.056Z
firstPublishedAt: 2024-07-30T22:51:31.764Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: item-disponivel-quando-a-localizacao-do-cliente-nao-esta-definida-e-nao-ha-estoque
locale: pt
kiStatus: Backlog
internalReference: 1073363
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando a localização do cliente não é definida, os itens aparecem disponíveis mesmo quando não há estoque disponível e nenhuma etiqueta branca do vendedor é abrangente. Isso acontece somente se a SKU tiver estoque no vendedor de etiqueta branca em um depósito associado a um canal de vendas diferente daquele registrado no endpoint de atendimento do vendedor.

## Simulação



- Não há estoque para o vendedor 1;
- Nenhum vendedor abrangente configurado;
- Estoque em um vendedor de marca branca em um canal de vendas diferente do ponto de extremidade de atendimento, por exemplo:
Ponto de extremidade de atendimento com sc=1;
Estoque no vendedor para sc=2

## Workaround


N/A




