---
title: Por que o status do pedido não atualiza?
id: frequentlyAskedQuestions_712
status: PUBLISHED
createdAt: 2017-04-27T22:28:34.393Z
updatedAt: 2019-12-31T14:24:04.173Z
publishedAt: 2019-12-31T14:24:04.173Z
firstPublishedAt: 2017-04-27T23:02:34.080Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_3
slug: por-que-o-status-do-pedido-nao-atualiza
legacySlug: por-que-o-status-do-pedido-nao-atualiza
---

Esse cenário pode ocorrer com três status, dois na VTEX e um no marketplace. Segue descrição abaixo.

## Aguardando autorização para despachar

Esse status ocorre quando o marketplace ainda não informou a confirmação de pagamento. O status só será alterado quando essa informação foi atualizada no marketplace, ou seja, apenas quando o pagamento for confirmado.

## Pronto para manuseio

Nesse ponto, o pedido está aguardando para descer para o ERP. Enquanto isso não for realizado, o pedido continuará neste status.

[Veja nosso tutorial para pedidos travados em pronto para manuseio](/pt/faq/meus-pedidos-estao-travados-em-pronto-para-manuseio/).

## Faturado no marketplace

[Entenda em nosso manual](/pt/faq/por-que-o-pedido-nao-fatura-no-marketplace).

## Preparando Entrega

Nesse ponto, o pedido já está integrado ao ERP da loja, aguardando todo o processo de separação, embalagem, faturamento e entrega à transportadora. Assim que o processo for concluído, a integração deve enviar para a VTEX os dados da nota fiscal, assim como os de rastreio.

Se o valor informado da NF não for igual ao valor total do pedido, o status do pedido não será alterado para **Faturado. **Nesse caso, a VTEX entende que ocorreu um faturamento parcial e o status só mudará para **Faturado** quando o soma das notas fiscais for igual ao valor total do pedido.
