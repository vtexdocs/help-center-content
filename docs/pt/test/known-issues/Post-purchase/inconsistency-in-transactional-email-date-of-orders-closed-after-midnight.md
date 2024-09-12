---
title: 'Inconsistência na data dos emails transacionais de pedidos fechados depois da meia-noite'
id: 3D3FSEGDPykoUosW4wcwQS
status: PUBLISHED
createdAt: 2018-04-24T20:17:05.814Z
updatedAt: 2022-12-22T14:43:40.128Z
publishedAt: 2022-12-22T14:43:40.128Z
firstPublishedAt: 2018-04-24T20:28:37.511Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_41
tag: Checkout,Message Center,Order Management
slug: inconsistencia-na-data-dos-emails-transacionais-de-pedidos-fechados-depois
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Pedidos que são realizados depois da meia-noite do horário UTC podem apresentar um dia a mais nos e-mails transacionais de __Pedido Realizado__ e __Pagamento Aprovado__.

Esse cenário ocorre por conta do horário UTC que pode variar de acordo com o fuso-horário.

## Simulação

- Feche um pedido no dia 23/04/2018 às 23:56, horário do Brasil.
- Veja que o e-mail transacional de pedido realizado estará com a data 24/04/2018. O seu teste terá um dia a mais que a data real.
- No e-mail de pagamento aprovado, que tem a data de entrega, também constará um dia a mais.
- Na API, ao realizar o `Get Order`, as informações também estarão com a data e horário UTC, exemplo: `"creationDate": "2018-04-13T02:57:19.2571842+00:00"`

## Workaround

Hoje não há um workaround para esse problema, mas estamos trabalhando para ajustar o cenário.

