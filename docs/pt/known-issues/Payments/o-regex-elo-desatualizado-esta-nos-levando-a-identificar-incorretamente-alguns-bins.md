---
title: "O regex Elo desatualizado está nos levando a identificar incorretamente alguns BINs"
id: 45vx88VCQ0yZynkVxGqSq8
status: PUBLISHED
createdAt: 2024-04-10T17:25:57.376Z
updatedAt: 2024-04-10T17:25:58.309Z
publishedAt: 2024-04-10T17:25:58.309Z
firstPublishedAt: 2024-04-10T17:25:58.309Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: o-regex-elo-desatualizado-esta-nos-levando-a-identificar-incorretamente-alguns-bins
locale: pt
kiStatus: Backlog
internalReference: 1015043
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Alguns BINs não estão sendo identificados corretamente no checkout. A bandeira do cartão é determinada por um regex que pode ficar desatualizado, levando a marcas de cartão não identificadas ou identificadas incorretamente.

## Simulação



1. Configure duas condições de pagamento, uma para a Elo
2. Adicione um item aleatório ao seu carrinho na loja e opte por pagá-lo com cartão de crédito
3. Preencha o número do cartão com o Elo BIN 65057000 e complete-o com números aleatórios
4. Preencha o restante das informações do cartão com dados falsos
5. Como o cartão não pôde ser identificado, o caixa solicitará a confirmação do número do cartão e a marca do cartão já pode ser selecionada como outra marca de cartã

## Workaround



O usuário deve alterar a bandeira do cartão selecionada no checkout clicando na bandeira correta.




