---
title: 'Resultados de "busca OR" agora ordenados por relevância'
slug: '2026-08-25-resultados-de-busca-or-agora-ordenados-por-relevancia'
hidden: false
createdAt: 2026-08-25T00:00:00.000Z
updatedAt: 2026-08-25T00:00:00.000Z
contentType: updates
productTeam: Intelligent Search
slugEN: '2026-08-25-or-search-results-now-ranked-by-relevance'
locale: pt
announcementSynopsisPT: 'Resultados de "busca OR" agora são ordenados por relevância à busca completa, em vez de pela quantidade de palavras que corresponderam.'
tags:
  - Melhoria
  - Intelligent Search
---

Quando uma busca não encontra um único produto com todos os termos pesquisados, o [Intelligent Search](https://help.vtex.com/pt/docs/tutorials/intelligent-search-visao-geral) recorre a resultados que correspondem a qualquer uma das palavras, uma "busca OR". Melhoramos a forma como esses resultados de busca OR são ordenados.

## O que mudou?

Buscas OR correspondem a cerca de 5% de todas as buscas, chegando a 15% em algumas lojas. Antes, os resultados de busca OR eram ordenados principalmente pela quantidade de palavras que corresponderam individualmente, o que podia colocar produtos sem relação com a busca acima dos que o cliente realmente procurava.

Agora, os resultados de busca OR são ordenados ponderando a frequência com que cada palavra encontrada aparece no produto e o quão rara essa palavra é no catálogo, em vez de apenas contar quantas palavras corresponderam. Palavras mais raras e distintivas, como o nome de um produto, pesam mais do que palavras comuns, como uma unidade de medida, fazendo com que os produtos mais relevantes apareçam primeiro. Por exemplo, uma busca por "analgésico dipirona 50 comprimidos" que cai para OR agora prioriza produtos com "dipirona", em vez de itens sem relação como "porta 50 comprimidos", que também corresponde a "50" e "comprimidos".

## Por que fizemos essa mudança?

Essa mudança torna os resultados de busca OR mais relevantes para o que o cliente está realmente procurando, reduzindo a chance de um produto sem relação com a busca aparecer acima de um que corresponde melhor à intenção de busca.

## O que precisa ser feito?

Não é necessária nenhuma ação. Essa melhoria de ordenação é aplicada automaticamente a todas as lojas que usam o VTEX Intelligent Search.

## Saiba mais

* [Intelligent Search](https://help.vtex.com/pt/docs/tutorials/intelligent-search-visao-geral)
* [Relevância](https://help.vtex.com/pt/docs/tutorials/intelligent-search-como-funciona-a-relevancia-dos-resultados-de-busca#etapa-2-como-o-intelligent-search-ordena-os-resultados)
* [Comportamento da busca](https://help.vtex.com/pt/docs/tutorials/comportamento-da-busca#resultado-minimo)
