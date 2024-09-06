---
title: 'Divergência na quantidade de pedidos exportados x quantidade visualizada no Gerenciamento de Pedidos'
id: 6sJzAuMwfY4moi6Eg6MwkW
status: PUBLISHED
createdAt: 2018-04-04T15:55:44.748Z
updatedAt: 2022-12-22T14:45:40.180Z
publishedAt: 2022-12-22T14:45:40.180Z
firstPublishedAt: 2018-04-04T16:04:52.588Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_41
tag: Order Management
slug: divergencia-na-quantidade-de-pedidos-exportados-x-quantidade-visualizada-no
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Hoje, ao solicitar a exportação de pedidos no Gerenciamento de Pedidos, em grande quantidade ou num período extenso, pode ocorrer instabilidade em algum dos sistemas de consulta do Gerenciamento de Pedidos.

Dessa forma os pedidos que passam por esse erro não entram no relatório, gerando divergência entre a quantidade de pedidos exibidos e a quantidade de pedidos extraídos.

## Simulação

- Filtrar no Gerenciamento de Pedidos um período que gere uma quantidade grande de pedidos (mais de mil pedidos, por exemplo) e analisar a quantidade exibida no Gerenciamento de Pedidos.
- Solicitar a exportação desses pedidos e comparar a quantidade exibida com a quantidade exportada.

## Workaround

Indicamos o uso das nossas APIs para consulta dos pedidos. O ERP consegue trabalhar com as informações para gerar o relatório necessário:

https://developers.vtex.com/reference/orders

https://developers.vtex.com/reference/feed-v3


