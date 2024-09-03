---
title: 'Erro na mensagem de erro de checkout'
id: 7jCEQoDRPvNwYCJmAt78im
status: PUBLISHED
createdAt: 2022-03-25T14:46:49.548Z
updatedAt: 2024-02-16T20:27:24.748Z
publishedAt: 2024-02-16T20:27:24.748Z
firstPublishedAt: 2022-03-25T15:30:16.292Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: erro-na-mensagem-de-erro-de-checkout
locale: pt
kiStatus: No Fix
internalReference: 409895
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando ocorre um erro na afiliação MercadoPagov2 Fluxo de pagamento na página de checkout, os detalhes da mensagem são exibidos sem formatação para acentos e caracteres especiais.



## Simulação



1. Configurar a afiliação MercadoPagoV2 Gateway
2. Configurar uma condição de pagamento com cartão de crédito para processar com MercadoPagoV2
3. Vá até a caixa e compre um item aleatório usando um cartão falso
4. O checkout retornará o erro com caracteres errados entre as letras da mensagem



## Workaround


N/A

