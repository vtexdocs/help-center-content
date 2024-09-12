---
title: 'O e-mail de reembolso do pedido não é enviado quando o valor adicional é reembolsado usando a nova IU (OMS).'
id: 4nQanqQiHuAN6dT7iYYO26
status: PUBLISHED
createdAt: 2022-04-19T15:27:27.050Z
updatedAt: 2023-03-08T18:00:57.430Z
publishedAt: 2023-03-08T18:00:57.430Z
firstPublishedAt: 2022-04-19T15:27:27.634Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: o-email-de-reembolso-do-pedido-nao-e-enviado-quando-o-valor-adicional-e-reembolsado-usando-a-nova-iu-oms
locale: pt
kiStatus: Fixed
internalReference: 563300
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando uma ordem é devolvida pelo Marketplace através da "nova IU" e um valor "adicional" é inserido na "nova IU", ela gera um cartão de presente erroneamente e com isso, o Checkout retorna um erro dizendo "que não há valor a ser revertido e o e-mail transacional "vtexcommerce-order-refunded" não é enviado para o cliente final.


##

## Simulação


Para simular este caso, é necessário fazer um reembolso, acrescentando um valor extra através da "New_UI".
O envio do e-mail transacional "vtexcommerce-order-refunded" para o cliente final não será identificado.


##

## Workaround


Nestes casos em que o reembolso ocorreu na "New_UI", não temos uma solução. Se for necessário fazer um reembolso, é possível fazê-lo através da "Old_UI".





