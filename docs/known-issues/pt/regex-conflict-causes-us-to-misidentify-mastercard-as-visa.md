---
title: 'O conflito de regex nos faz identificar erroneamente Mastercard como Visa'
id: MzUm8xH6vDeGxWcj6GCbZ
status: PUBLISHED
createdAt: 2023-09-04T17:51:08.019Z
updatedAt: 2023-11-30T15:25:47.066Z
publishedAt: 2023-11-30T15:25:47.066Z
firstPublishedAt: 2023-09-04T17:51:09.705Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: o-conflito-de-regex-nos-faz-identificar-erroneamente-mastercard-como-visa
locale: pt
kiStatus: Backlog
internalReference: 893588
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O conflito de regex nos faz identificar incorretamente a marca dos cartões no checkout.

## Simulação



1. Configure duas condições de pagamento, uma para processamento de cartão de crédito Visa e outra para processamento de cartão de crédito Mastercard
2. Compre um item aleatório na loja e opte por pagá-lo com cartão de crédito.
3. Preencha o número do cartão com o Mastercard BIN 523431 e complete com números aleatórios.
4. Preencha as demais informações do cartão com dados falsos
5. Finalize a compra
6. Vá para o admin e procure a transação já criada e o pagamento será identificado como Visa em vez de Mastercard



## Workaround


N/a





