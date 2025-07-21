---
title: "Transações de cartões-presente que retornam vazias"
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
slugEN: transacoes-de-cartoespresente-que-retornam-vazias
locale: pt
kiStatus: Backlog
internalReference: 384430
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Os pontos de extremidade da API Get Giftcard Transaction e Get GiftCard do provedor de GiftCard sempre retornam uma resposta vazia

## Simulação



1. Em uma conta com Giftcards nativos, selecione uma transação já paga com um gift card
2. Copie o giftcardId e chame o endpoint Get Giftcard Transaction ou Get GiftCard from GiftCard Provider
3. A resposta estará vazi

## Workaround


N/A





