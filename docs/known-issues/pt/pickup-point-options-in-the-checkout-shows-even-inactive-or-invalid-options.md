---
title: 'As opções de pontos de retirada na caixa mostram até mesmo opções inativas ou inválidas'
id: 4LF45BWQxDh6r7Bk7chu4P
status: PUBLISHED
createdAt: 2022-05-31T18:07:23.568Z
updatedAt: 2022-11-25T21:52:19.067Z
publishedAt: 2022-11-25T21:52:19.067Z
firstPublishedAt: 2022-05-31T18:07:24.033Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: as-opcoes-de-pontos-de-retirada-na-caixa-mostram-ate-mesmo-opcoes-inativas-ou-invalidas
locale: pt
kiStatus: Backlog
internalReference: 328464
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O modal de pontos de coleta, do checkout, mostra em azul as opções válidas como SLA calculado para o carrinho e em cinza outras opções que não foram previamente calculadas como SLA, para que o comprador possa saber sobre essas opções e até mesmo verificar sua disponibilidade sob demanda. Estas opções vêm da API `/api/checkout/pub/pickup-points' (que é apenas um proxy para o serviço de Logística), que listará cada ponto de pickup da loja.

O problema é que esta API não filtra:
- pickups desativados
- sua relação entre as docas de carga e as políticas de embarque
- e se forem válidos para o atual canal de vendas/política comercial

Desta forma, listará opções inválidas para o comprador.



## Simulação


Ter uma loja com algumas pickups desativadas e/ou sem relação com o canal de vendas atual.



## Workaround


Não há nenhuma solução conhecida.

