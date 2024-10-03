---
title: 'Mudança de ordem através da IU não leva em conta o cálculo das promoções.'
id: 3rvsDyCggYirvH7WT9rBVZ
status: PUBLISHED
createdAt: 2022-03-15T20:25:17.217Z
updatedAt: 2024-02-16T20:23:38.705Z
publishedAt: 2024-02-16T20:23:38.705Z
firstPublishedAt: 2022-03-15T20:25:17.513Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: change-order-through-the-ui-does-not-take-into-account-the-calculation-of-promotions-take-3-pay-2
locale: pt
kiStatus: No Fix
internalReference: 472882
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Em pedidos com um Mais por Menos Promoção, é possível alterar o pedido e remover um ou mais itens na IU, mas o desconto ainda se aplica.



## Simulação


- Criar um Mais para Menos Promoção
- Fazer uma compra com essa promoção
- Fazer uma mudança no pedido e remover um ou mais itens
- Veja que o desconto ainda se aplica



## Workaround


Neste caso, temos o Workaround que é fazer a mudança através da API "change on order". Para mudar itens e valores.

