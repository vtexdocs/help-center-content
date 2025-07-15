---
title: "Priorização por 'palavra-chave' do produto sem considerar stopwords"
id: 55S7nFg61dAyCeGQCIw6aK
status: PUBLISHED
createdAt: 2024-05-30T22:05:25.328Z
updatedAt: 2024-05-30T22:05:26.335Z
publishedAt: 2024-05-30T22:05:26.335Z
firstPublishedAt: 2024-05-30T22:05:26.335Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: prioritization-by-products-keyword-not-considering-stopwords
locale: pt
kiStatus: Backlog
internalReference: 1041743
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Os produtos podem ser priorizados nos resultados da pesquisa por sua "palavra-chave", uma palavra do nome do produto definida como relevante por um algoritmo. Stopwords são termos de pesquisa filtrados dos termos originais porque não são significativos para a pesquisa.

Em um cenário em que a palavra-chave de um produto é uma palavra de parada, esse produto pode perder a prioridade nos resultados da pesquisa.

## Simulação



- Um produto com o nome "La vida en el oceano" terá "la" como palavra-chave.
- Considerando uma loja em espanhol, uma busca por esse nome de produto será efetivamente feita como "vida el oceano" depois de remover as palavras de parada.
- Os produtos com "vida" como palavra-chave serão priorizados em relação ao produto pesquisado

## Workaround


N/A

