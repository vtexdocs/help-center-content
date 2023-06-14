---
title: Inconsistência na pesquisa de facetas que contêm resultados com valores de especificação grandes
id: 4taz7hmgvjn3hqWyyjxiKz
status: PUBLISHED
createdAt: 2023-05-11T17:42:06.008Z
updatedAt: 2023-05-11T17:42:06.506Z
publishedAt: 2023-05-11T17:42:06.506Z
firstPublishedAt: 2023-05-11T17:42:06.506Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: inconsistencia-na-pesquisa-de-facetas-que-contem-resultados-com-valores-de-especificacao-grandes
kiStatus: Backlog
internalReference: 824198
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A API de facetas tem um campo specificationFilters e esse campo pode interromper o retorno da API quando os valores registrados em qualquer especificação dessa categoria forem muito grandes

## Simulação



- Em uma categoria, crie um campo Large Text (Texto grande)
- Adicione um valor grande ao produto
- Salve o produto e espere que ele seja indexado
- Chame a API Facets e veja que ela não retorna nenhum resultad

## Workaround


Ajuste o tamanho dos valores




