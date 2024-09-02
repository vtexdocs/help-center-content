---
title: 'O regex desatualizado do Mastercard Debit está nos levando a identificar incorretamente alguns BINs'
id: 5gx4dSY2P5gGE0JI661hGL
status: PUBLISHED
createdAt: 2022-08-20T00:03:11.640Z
updatedAt: 2024-04-02T19:13:02.839Z
publishedAt: 2024-04-02T19:13:02.839Z
firstPublishedAt: 2022-08-20T00:03:12.490Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: o-regex-desatualizado-do-mastercard-debit-esta-nos-levando-a-identificar-incorretamente-alguns-bins
locale: pt
kiStatus: Backlog
internalReference: 642136
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Alguns BINs não estão sendo identificados corretamente no checkout. A bandeira do cartão é determinada por um regex que pode eventualmente estar desatualizado, fazendo com que a bandeira do cartão não seja identificada ou seja identificada incorretamente.

## Simulação



1. Configure duas condições de pagamento, uma para débito Mastercard
2. Adicione um item aleatório ao seu carrinho na loja e escolha pagá-lo com cartão de débito
3. Preencha o número do cartão com o Mastercard Debit BIN 551898 e complete-o com números aleatórios
4. Preencha as demais informações do cartão com dados falsos
5. Como o cartão não pôde ser identificado, o caixa solicitará a confirmação do número do cartão e a marca do cartão já pode ser selecionada como outra marca de cartão



## Workaround


Não há solução alternativa.




