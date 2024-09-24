---
title: 'As condições de pagamento definidas para processar transações em parcelas diferentes de 1x estão processando transações como pré-pagas integralmente'
id: 2z9cDiCAovzKVFZO7RSqOD
status: PUBLISHED
createdAt: 2024-05-09T18:47:33.319Z
updatedAt: 2024-05-09T18:47:34.221Z
publishedAt: 2024-05-09T18:47:34.221Z
firstPublishedAt: 2024-05-09T18:47:34.221Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-conditions-set-to-process-transactions-in-installments-other-than-1x-are-processing-transactions-as-prepaid-in-full
locale: pt
kiStatus: Backlog
internalReference: 1030652
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


As condições de pagamento configuradas para processar transações em um número de parcelas diferente de 1x estão sendo capazes de processar pagamentos em 1x. O problema ocorre apenas para pagamentos em que o usuário optou por pagar como pré-pago integralmente.

## Simulação



1. Configure 3 condições de pagamento para cartões de crédito de qualquer marca: Condição de Pagamento A - com parcelamento em 1x, Condição de Pagamento B - com parcelamento em 2x, e Condição de Pagamento C - com parcelamento em 3x.
2. Vá para a página Checkout adicionando qualquer item ao carrinho e prossiga para a tela de pagamento. Escolha pagar com um cartão de crédito em 1x e conclua a compra.
3. Vá até o admin e abra a transação recém-criada, clique no botão "+ Information" e observe que o campo `AvailableRules` conterá uma lista com todos os IDs das Condições de Pagamento, Condição de Pagamento A, Condição de Pagamento B e Condição de Pagamento C, como sendo capazes de processar a transação em questão

## Workaround


É possível definir a condição de pagamento 1x como padrão, de modo que, quando houver um empate entre todas as condições de pagamento, o gateway priorizará a regra padrão.





