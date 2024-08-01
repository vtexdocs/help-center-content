---
title: 'Os produtos não estão sendo correspondidos corretamente quando o productName contém números'
id: 7Kr0VtRScH54j04Rh2uuOj
status: PUBLISHED
createdAt: 2023-03-01T18:55:20.183Z
updatedAt: 2023-10-19T12:08:30.076Z
publishedAt: 2023-10-19T12:08:30.076Z
firstPublishedAt: 2023-03-01T18:55:20.910Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: os-produtos-nao-estao-sendo-correspondidos-corretamente-quando-o-productname-contem-numeros
locale: pt
kiStatus: Fixed
internalReference: 762525
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando o vendedor envia um sku para o marketplace, o sistema Matcher é responsável por consultar o catálogo do marketplace e verificar se já existe um produto semelhante aos skus do vendedor.
Ele faz isso principalmente pelo ProductName.

No entanto, essa pesquisa nem sempre está funcionando quando no nome do produto há caracteres numéricos.

## Simulação



1. O vendedor envia skus para o mercado com números no nome do produto;
2. Os skus serão aprovados separadamente (em vez de terem uma correspondência) no catálogo do marketplace.



## Workaround


Envie o produto sem números em seu nome.





