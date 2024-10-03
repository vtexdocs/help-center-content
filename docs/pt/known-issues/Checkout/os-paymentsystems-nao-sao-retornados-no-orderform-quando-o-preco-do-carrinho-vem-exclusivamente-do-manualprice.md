---
title: 'Os PaymentSystems não são retornados no orderForm quando o preço do carrinho vem exclusivamente do manualPrice'
id: 3KPNFtPgEwshbv6WiGrqOF
status: PUBLISHED
createdAt: 2024-04-30T20:06:52.774Z
updatedAt: 2024-04-30T20:06:53.756Z
publishedAt: 2024-04-30T20:06:53.756Z
firstPublishedAt: 2024-04-30T20:06:53.756Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: paymentsystems-are-not-returned-in-orderform-when-a-cart-price-comes-exclusively-from-manualprice
locale: pt
kiStatus: Backlog
internalReference: 1025321
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando o valor total de um carrinho provém exclusivamente de um preço manual, os itens `preço` e `preço de entrega` são `0`, nenhum sistema de pagamento além do Gift Card (se ativo) é oferecido.

## Simulação



- Adicionar um item com preço `0` e selecionar uma opção de entrega com preço `0`
- Adicionar um valor `manualPrice` ao item
- Prossiga para a etapa de pagamento no checkout e nenhum método de pagamento é retornado como disponível



## Workaround


Não há nenhuma solução alternativa conhecida além de adicionar algum valor ao preço do item.





