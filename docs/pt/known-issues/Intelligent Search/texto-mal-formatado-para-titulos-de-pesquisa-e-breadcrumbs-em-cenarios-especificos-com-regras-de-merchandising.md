---
title: 'Texto mal formatado para títulos de pesquisa e breadcrumbs em cenários específicos com regras de merchandising'
id: 3dQskVnI1sbF6jgsopjUUt
status: PUBLISHED
createdAt: 2024-03-13T20:52:33.781Z
updatedAt: 2024-03-13T20:52:34.698Z
publishedAt: 2024-03-13T20:52:34.698Z
firstPublishedAt: 2024-03-13T20:52:34.698Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: badly-formatted-text-for-search-titles-and-breadcrumbs-in-specific-scenarios-with-merchandising-rules
locale: pt
kiStatus: Backlog
internalReference: 999476
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Algumas páginas de resultados de pesquisa ocultam os filtros aplicados - já que eles já fazem parte da própria página, portanto, são definidos como "initialAttributes" - para se concentrar nos filtros adicionais que podem ser aplicados. Nesses cenários, os valores do título da página e dos breadcrumbs são basicamente definidos pelo primeiro produto da página.

As regras de merchandising que colocam produtos de diferentes contextos nas primeiras posições de uma página afetam essa string. Quando os "initialAttributes" da página não correspondem a nenhum dos atributos do primeiro produto, como alternativa, esses textos são definidos pela slug - um texto simplificado sem capitalização, diacríticos ou outros caracteres especiais.

Lembre-se de que esse tipo de regra de merchandising pode ser uma prática ruim.

## Simulação



- Considere uma categoria com a árvore "Food > Fruits > Apples and Pears" (Alimentos > Frutas > Maçãs e Peras), que se traduz em "Maçãs e Peras" em português (portanto, temos diacríticos/acentos para um exemplo melhor);
- Adicionar um produto de uma árvore de categoria diferente por meio de uma regra de merchandising, como um fatiador da categoria "Cozinha > Acessórios > Fatiadores" à categoria "Alimentos > Frutas";
- Como o primeiro produto da categoria "Maçãs e Peras" será esse cortador, o título da página e as migalhas de pão serão apresentados como "Maçãs e Peras"

## Workaround


N/A


