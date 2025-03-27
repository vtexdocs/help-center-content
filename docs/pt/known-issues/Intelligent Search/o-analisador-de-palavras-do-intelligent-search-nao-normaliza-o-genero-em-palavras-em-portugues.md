---
title: 'O analisador de palavras do Intelligent Search não normaliza o gênero em palavras em português'
id: 2oVUQnXZK6FNXg7co88C1B
status: PUBLISHED
createdAt: 2024-07-26T22:55:32.746Z
updatedAt: 2024-07-26T22:55:46.558Z
publishedAt: 2024-07-26T22:55:46.558Z
firstPublishedAt: 2024-07-26T22:55:33.875Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-word-analyzer-not-normalizing-gender-in-portuguese-words
locale: pt
kiStatus: Backlog
internalReference: 1072003
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Espera-se que os termos pesquisados sejam normalizados entre suas diferentes formas (plural/singular, gênero e outras possibilidades), um processo formalmente chamado de stemming. O analisador é diferente para cada idioma para atender às suas necessidades.

O analisador para o português não está normalizando o gênero das palavras.

## Simulação


Considere uma palavra registrada em diferentes produtos com gêneros diferentes, como "camiseta listrada" e "vestido listrado".

Embora "listrada" e "listrado" sejam a mesma palavra, mas em formas de gênero diferentes, a busca por "listrada" não retornará os "vestidos" e vice-versa

## Workaround


Registre sinônimos bidirecionais para palavras com variações relevantes de forma de gênero.





