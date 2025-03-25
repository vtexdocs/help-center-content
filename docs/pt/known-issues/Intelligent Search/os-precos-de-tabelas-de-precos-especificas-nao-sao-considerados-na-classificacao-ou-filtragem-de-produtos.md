---
title: 'Os preços de tabelas de preços específicas não são considerados na classificação ou filtragem de produtos'
id: 5P7TkO8THxwNBJXgwnaqxe
status: PUBLISHED
createdAt: 2024-08-22T19:26:24.575Z
updatedAt: 2024-08-22T19:28:25.505Z
publishedAt: 2024-08-22T19:28:25.505Z
firstPublishedAt: 2024-08-22T19:28:25.505Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: prices-from-specific-price-tables-are-not-considered-when-sorting-or-filtering-products
locale: pt
kiStatus: Backlog
internalReference: 1085895
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


As tabelas de preços não fazem parte do fluxo de indexação do produto e não estão disponíveis para o serviço de pesquisa no nível do índice. Isso cria a limitação de que a pesquisa não pode classificar e filtrar produtos com base nas tabelas de preços. Os produtos são classificados exclusivamente pelo preço da política comercial.


## Simulação


Considerando:

- produto A, política comercial como $10, tabela de preços como $7
- produto B, política comercial como US$ 9, tabela de preços como US$ 8

Em uma navegação com uma tabela de preços, a classificação por preço (ascendente) apresentará os produtos classificados como B, depois A, de acordo com o preço da política comercial, em vez de A, depois B, de acordo com o preço da tabela de preços.



## Workaround


N/A





