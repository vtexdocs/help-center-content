---
title: 'O menu MELI Bridge Orders não exibe as informações de ID do pedido'
id: ZBc9ny043rVpYFqkZIQ1K
status: PUBLISHED
createdAt: 2023-08-16T10:46:52.015Z
updatedAt: 2023-10-05T18:51:13.700Z
publishedAt: 2023-10-05T18:51:13.700Z
firstPublishedAt: 2023-08-16T10:46:53.089Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: o-menu-meli-bridge-orders-nao-exibe-as-informacoes-de-id-do-pedido
locale: pt
kiStatus: Fixed
internalReference: 881733
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Atualmente, temos um problema que afeta apenas a visibilidade de alguns pedidos MELI. O que acontece é que estamos registrando o ShipmentID no menu de ponte de pedidos, mas algumas mensagens de erro não têm o OrderID, e isso é necessário em alguns casos, pois o OrderID é a informação que os vendedores têm no Portal MELI.

## Simulação



Dentro do menu de pedidos em ponte, algumas mensagens de erro não estão registrando o orderID, o que dá a impressão de que alguns pedidos não estão na biblioteca VTEX, mas os vendedores podem encontrar os pedidos pesquisando pelo shipmentID

## Workaround


Pesquise o shipmentID em vez do orderID





