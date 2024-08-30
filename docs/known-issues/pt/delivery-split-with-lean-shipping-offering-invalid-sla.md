---
title: 'Divisão da entrega com o Lean Shipping oferecendo SLA inválido'
id: 61Yq1WhmCclFtcum3YMtXn
status: PUBLISHED
createdAt: 2024-02-27T19:21:21.615Z
updatedAt: 2024-02-27T19:26:27.513Z
publishedAt: 2024-02-27T19:26:27.513Z
firstPublishedAt: 2024-02-27T19:21:22.667Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: divisao-da-entrega-com-o-lean-shipping-oferecendo-sla-invalido
locale: pt
kiStatus: Backlog
internalReference: 990155
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando um carrinho de compras inclui produtos de diferentes vendedores, com diferentes canais de entrega e IDs de SLA entre eles, a interface do usuário do Checkout ativa o Lean Shipping, resumindo os SLAs disponíveis para exibir apenas as opções "mais rápida" e "mais barata" para cada item.

No entanto, se houver uma opção de entrega agendada, mas ela não for a mais rápida ou a mais barata, a alternância de agendamento ainda aparecerá na interface do usuário, embora o Lean Shipping não a selecione como uma opção viável.

## Simulação



- Monte um carrinho com pelo menos 2 vendedores diferentes, em que um item tenha 3 SLAs, em que o agendado não seja a opção mais rápida nem a mais barata (e, portanto, não será oferecido pelo Lean Shipping).
- Selecione a retirada na loja.
- Use a interface de agendamento da interface do usuário para a entrega do outro item.
- Observe que ele ainda aplica o SLA mais rápido/mais barato (não programado), em vez do programado, ignorando efetivamente a seleção da janela de entrega da etapa anterior

## Workaround


N/A





