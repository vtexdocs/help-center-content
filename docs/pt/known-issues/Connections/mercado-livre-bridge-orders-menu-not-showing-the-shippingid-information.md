---
title: '[Mercado Livre] Menu Bridge Orders, não mostra as informações de shippingID'
id: 2fXDbejpPJ04NDfPCCcr0j
status: PUBLISHED
createdAt: 2024-03-18T20:56:17.859Z
updatedAt: 2024-03-18T20:56:18.697Z
publishedAt: 2024-03-18T20:56:18.697Z
firstPublishedAt: 2024-03-18T20:56:18.697Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: mercado-livre-menu-bridge-orders-nao-mostra-as-informacoes-de-shippingid
locale: pt
kiStatus: Backlog
internalReference: 1001903
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Atualmente, temos um problema que afeta apenas a visibilidade de alguns pedidos MELI. O que acontece é que estamos registrando o ShipmentID no menu de ponte de pedidos, mas algumas mensagens de erro não têm o OrderID, e isso é necessário em alguns casos, pois o OrderID é a informação que os vendedores têm no Portal MELI.

Mercado Livre > Bridge > OrderId

## Simulação


Dentro do menu de pedidos do Bridge, algumas mensagens de erro não estão registrando o orderID, o que dá a impressão de que alguns pedidos não estão no VTEX brige, mas os vendedores podem encontrar os pedidos pesquisando o shipmentID.

 ![](https://vtexhelp.zendesk.com/attachments/token/OZk1c79PgvKBKq6wGldvIbHM6/?name=image.png

## Workaround


Obtenha o OrderID, obtenha o ShipmentID e procure-o na ponte





