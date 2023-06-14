---
title: 'Mudança de ordem através da IU não leva em conta o cálculo das promoções.'
id: 3rvsDyCggYirvH7WT9rBVZ
status: PUBLISHED
createdAt: 2022-03-15T20:25:17.217Z
updatedAt: 2022-11-25T22:03:48.329Z
publishedAt: 2022-11-25T22:03:48.329Z
firstPublishedAt: 2022-03-15T20:25:17.513Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: mudanca-de-ordem-atraves-da-iu-nao-leva-em-conta-o-calculo-das-promocoes
locale: pt
kiStatus: Backlog
internalReference: 472882
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em pedidos com um Mais por Menos Promoção, é possível alterar o pedido e remover um ou mais itens na IU, mas o desconto ainda se aplica.



## Simulação


- Criar um Mais para Menos Promoção
- Fazer uma compra com essa promoção
- Fazer uma mudança no pedido e remover um ou mais itens
- Veja que o desconto ainda se aplica



## Workaround


Neste caso, temos o Workaround que é fazer a mudança através da API "change on order". Para mudar itens e valores.

