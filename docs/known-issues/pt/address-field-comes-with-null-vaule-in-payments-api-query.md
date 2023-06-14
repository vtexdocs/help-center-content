---
title: 'Campo "address" vem com valor "null" na consulta da API do Pagamentos'
id: 7oEEc24umACsOoy4Ceso2W
status: PUBLISHED
createdAt: 2018-01-11T16:33:01.231Z
updatedAt: 2022-12-22T20:45:31.741Z
publishedAt: 2022-12-22T20:45:31.741Z
firstPublishedAt: 2018-01-11T16:44:36.751Z
contentType: knownIssue
productTeam: Financial
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: campo-address-vem-com-valor-null-na-consulta-da-api-do-pagamentos
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

O campo `address` vem com valor `null` quando fazemos consulta por meio da API do Pagamentos.

## Simulação

O problema é intermitente. Porém, basta fechar uma compra e verificar na API de consulta do Pagamentos se o campo `Address` foi preenchido corretamente, ou se trouxe novamente a informação nula.

API para teste: 
`https://{AccountName}.vtexpayments.com.br/api/pvt/transactions/{TransactionId}/payments`

## Workaround

Atualmente não há workaround para esse problema.

