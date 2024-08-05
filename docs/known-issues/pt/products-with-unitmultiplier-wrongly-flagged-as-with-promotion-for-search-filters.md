---
title: "Produtos com 'unitMultiplier' sinalizados erroneamente como 'com promoção' para filtros de pesquisa"
id: 2rCi8K01DHsNuYsefE7oR2
status: PUBLISHED
createdAt: 2024-02-15T22:52:17.434Z
updatedAt: 2024-02-15T22:52:18.189Z
publishedAt: 2024-02-15T22:52:18.189Z
firstPublishedAt: 2024-02-15T22:52:18.189Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: produtos-com-unitmultiplier-sinalizados-erroneamente-como-com-promocao-para-filtros-de-pesquisa
locale: pt
kiStatus: Backlog
internalReference: 982830
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Um produto cujo preço de venda é menor do que o preço de tabela será sinalizado como parte de uma promoção para fins de filtragem de pesquisa. Os produtos com algum multiplicador de unidade podem resultar em um cálculo incorreto que pode afetar essa comparação, fazendo com que eles recebam esse sinalizador erroneamente.

## Simulação


A simulação depende da ocorrência de problemas específicos de arredondamento, mas um exemplo disso é um produto com preço de tabela e preço normal de US$ 264,20 e um multiplicador de unidade de 3,07.

Embora o preço de tabela e o preço normal sejam os mesmos, esse item será retornado no filtro de pesquisa "promotion=yes"

## Workaround


N/A





