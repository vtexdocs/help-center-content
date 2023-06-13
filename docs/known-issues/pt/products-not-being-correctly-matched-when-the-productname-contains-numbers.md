---
title: Produtos que não correspondem corretamente quando o produtoNome contém números
id: 7Kr0VtRScH54j04Rh2uuOj
status: PUBLISHED
createdAt: 2023-03-01T18:55:20.183Z
updatedAt: 2023-03-01T18:55:20.910Z
publishedAt: 2023-03-01T18:55:20.910Z
firstPublishedAt: 2023-03-01T18:55:20.910Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: produtos-que-nao-correspondem-corretamente-quando-o-produtonome-contem-numeros
kiStatus: Backlog
internalReference: 762525
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando o vendedor envia um sku para o mercado, o sistema Matcher é responsável por consultar o catálogo do mercado e verificar se já existe um produto similar ao skus do vendedor.
Ele faz isso primariamente pelo ProductName.

Entretanto, esta busca nem sempre está funcionando quando neste nome de produto há caracteres numéricos.


##

## Simulação



1. O vendedor envia skus para o marktplace com números no nome do produto;
2. Os skus serão aprovados separadamente (em vez de terem uma correspondência) no catálogo do mercado.


##

## Workaround


Enviar o produto sem números em seu nome.





