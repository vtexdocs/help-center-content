---
title: Cancelamento de transações da bandeira Credz via Braspag
id: 13zKpRlvD8WCc888IYSKQE
status: PUBLISHED
createdAt: 2017-07-03T21:04:29.131Z
updatedAt: 2022-12-22T15:06:46.586Z
publishedAt: 2022-12-22T15:06:46.586Z
firstPublishedAt: 2017-07-04T18:49:23.107Z
contentType: knownIssue
productTeam: Financial
author: authors_4
tag: Payments
slug: cancelamento-de-credz-braspag
kiStatus: Backlog
internalReference: 
---

## Sumário

O cancelamento de transações de cartão de crédito da bandeira Credz, quando via Braspag, não está acontecendo corretamente. 

O pedido é cancelado na VTEX mas não no gateway, ocasionando na cobrança indevida do valor ao cliente.

Na integração atualmente homologada com a Braspag o Pagamentos usa o método de estorno (refund), não suportado por esta bandeira de cartão. É necessária atualização para usar o método de cancelamento (void).

## Simulação

Basta solicitar o cancelamento de qualquer transação da bandeira Credz, que seja realizada via conector Braspag.

## Workaround

O cancelamento da transação deve ser feito diretamente pelo painel da Braspag.

