---
title: 'A falsificação de identidade é ignorada após a conclusão de uma compra'
id: 4mHKOlwaLwfIEf8HFh4y4Y
status: PUBLISHED
createdAt: 2024-03-20T20:10:26.200Z
updatedAt: 2024-03-20T20:10:27.029Z
publishedAt: 2024-03-20T20:10:27.029Z
firstPublishedAt: 2024-03-20T20:10:27.029Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: impersonation-is-ignored-after-one-purchase-is-completed
locale: pt
kiStatus: Backlog
internalReference: 1003545
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando um operador de call center se faz passar por um comprador, conclui uma compra e é enviado para a página orderPlaced, um novo orderForm será gerado.

Esse novo orderForm terá seu anexo clientProfileData com o e-mail do operador da central de atendimento em vez do comprador personificado, embora os dados de personificação sejam mantidos normalmente na sessão.

## Simulação



1. Faça login no ambiente myvtex como um operador de call center.
2. Faça-se passar por um comprador e conclua uma compra.
3. Depois disso, enquanto ainda estiver se passando pelo usuário, inicie uma nova compra e observe como os dados do carrinho conterão o e-mail do operador da central de atendimento em clientProfileData

## Workaround


Se você precisar criar mais de um pedido para o mesmo comprador, certifique-se de refazer o processo de personificação entre os pedidos.





