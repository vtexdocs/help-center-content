---
title: 'A rota /transaction do sistema atual de cartões-presente retorna um código de status 200 OK ao adicionar ou remover créditos, mesmo que o cartão esteja inativo.'
id: 4d5oeiLIvxLqmA1uHtZmrw
status: PUBLISHED
createdAt: 2023-04-24T20:31:14.640Z
updatedAt: 2023-05-08T17:54:43.745Z
publishedAt: 2023-05-08T17:54:43.745Z
firstPublishedAt: 2023-04-24T20:31:15.517Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: a-rota-transaction-do-sistema-atual-de-cartoespresente-retorna-um-codigo-de-status-200-ok-ao-adicionar-ou-remover-creditos-mesmo-que-o-cartao-esteja-inativo
locale: pt
kiStatus: Backlog
internalReference: 795997
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, nosso sistema de cartão-presente não inclui uma verificação para verificar se um cartão-presente está ativo antes de adicionar ou remover créditos. Embora essa rota se refira apenas à realização de transações com cartão-presente, é a única maneira de fazê-lo, portanto, espera-se que alguma validação seja feita.

Portanto, para resolver esse problema, pode ser útil atualizar a rota /transaction para retornar um código de status mais informativo, como 400 Bad Request ou 404 Not Found, ao tentar adicionar ou remover créditos de um cartão-presente inativo. Além disso, o fornecimento de mensagens de erro claras para o usuário pode ajudar a evitar mal-entendidos e garantir que as transações sejam processadas com precisão

## Simulação


Faça uma solicitação à rota /transaction para adicionar ou remover créditos usando um cartão-presente desativado.



## Workaround


N/A





