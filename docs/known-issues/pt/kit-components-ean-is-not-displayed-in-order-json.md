---
title: 'EAN dos componentes do KIT não são impressos no json do pedido'
id: 2lrOfIp4FOcGWIA2EuG6U0
status: PUBLISHED
createdAt: 2017-11-07T14:28:45.693Z
updatedAt: 2022-12-22T14:51:55.731Z
publishedAt: 2022-12-22T14:51:55.731Z
firstPublishedAt: 2017-11-07T14:32:50.622Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_3
tag: Order Management
slug: ean-dos-componentes-do-kit-nao-sao-impressos-no-json-do-pedido
kiStatus: Backlog
internalReference: 
---

## Sumário

No json do pedido, onde são exibidas todas as informações sobre os produtos comprados, quando um deles é um KIT, apenas é impresso o EAN do KIT e não os dos componentes.

## Simulação


1. Cadastre um produto KIT;
2. Faça uma compra deste produto;
3. Faça uma chamada à API do Gerenciamento de Pedidos pelo Id do pedido.


## Workaround

Se for imprescindível para o ERP o EAN do SKU componente, é possível fazer uma chamada à API de search pelo Id do SKU, onde no json de resposta tem o EAN.

