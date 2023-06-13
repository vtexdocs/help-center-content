---
title: Falta de informações de pagamento para integrar pedidos (quando ocorre retentativas com o conector)
id: 5WMBV2GRuo2mqmyCkKmwsG
status: PUBLISHED
createdAt: 2018-03-19T13:30:56.334Z
updatedAt: 2022-12-22T15:07:53.227Z
publishedAt: 2022-12-22T15:07:53.227Z
firstPublishedAt: 2018-03-19T13:43:48.205Z
contentType: knownIssue
productTeam: Shopping
author: authors_41
tag: Checkout,Payments
slug: falta-de-informacoes-de-pagamento-para-integrar-pedidos-quando-ocorre
kiStatus: Backlog
internalReference: 
---

## Sumário

Nos casos em que o pagamento não é diretamente aprovado no fechamento de compra, e só após algumas retentativas com o conector, os dados do conector salvos no lado do Checkout não ficam completos, impossibilitando assim algumas integrações.
Esse dado só é atualizado no Checkout ao chamar o método de completeOrder (que não necessariamente ocorre quando o pagamento está aprovado) e na captura. 

## Simulação

ERP contesta a falta de informações ex: acquirer, authorizationcode
Abra o pedido contestado no Pagamentos.
Veja que ocorreram retentativas na aprovação nos logs da linha do tempo do Pagamentos.


## Workaround

Realizar a consulta: https://documenter.getpostman.com/view/322855/pci/Hs3y#d7bc5f1e-a39b-834c-04dc-824a778edb42
GET Payment Details
https://{{accountName}}.vtexpayments.com.br/api/pvt/transactions/{{transactionId}}/payments/{{paymentId}}



