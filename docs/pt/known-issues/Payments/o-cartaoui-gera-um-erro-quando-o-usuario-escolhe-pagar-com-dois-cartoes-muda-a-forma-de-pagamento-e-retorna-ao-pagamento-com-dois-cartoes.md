---
title: ' O cartão-ui gera um erro quando o usuário escolhe pagar com dois cartões, muda a forma de pagamento e retorna ao pagamento com dois cartões'
id: 1LZL3Gq40b7TRjCLnASacW
status: PUBLISHED
createdAt: 2022-11-30T19:03:35.002Z
updatedAt: 2022-12-01T19:01:19.135Z
publishedAt: 2022-12-01T19:01:19.135Z
firstPublishedAt: 2022-11-30T19:03:35.662Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-cardui-generates-an-error-when-the-user-chooses-to-pay-with-two-cards-changes-the-payment-method-and-returns-to-the-payment-with-two-cards
locale: pt
kiStatus: Fixed
internalReference: 670424
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando o usuário escolhe pagar com dois cartões, então muda o método de pagamento e volta a pagar com dois cartões, a mensagem "_Error inesperado"_ aparecerá na caixa de opção de pagamento._ _ _


##

## Simulação



1. Ir para o checkout com um item aleatório
2. Escolha pagar com cartão de crédito ou cartão de débito e selecione pagar com dois cartões
3. Alterar a forma de pagamento
4. Mude a forma de pagamento para a anterior
5. A mensagem "_Error inesperado"_ aparecerá na caixa do cartão


##

## Workaround


O método de pagamento funcionará novamente se a página de checkout for atualizada

