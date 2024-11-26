---
title: 'Regras de visual merchandising erroneamente estendidas a contextos mais amplos'
id: 2wXWYnsHwYrXByNRu3HdBK
status: PUBLISHED
createdAt: 2024-09-13T22:19:38.122Z
updatedAt: 2024-11-11T16:45:01.734Z
publishedAt: 2024-11-11T16:45:01.734Z
firstPublishedAt: 2024-09-13T22:19:39.138Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: visual-merchandising-rules-wrongly-extendeded-to-broader-contexts
locale: pt
kiStatus: Scheduled
internalReference: 1098688
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


As regras de visual merchandising são definidas para contextos específicos por meio da definição de filtros por atributos ou termos de pesquisa, mas os filtros não estão sendo limitados ao seu contexto exclusivo, gerando resultados de pesquisa inesperados e conflitos com regras de merchandising diferentes para outras páginas.

Para o contexto, os produtos fixados e ocultos executam a mesma ação que as ações promover e remover por ID de uma regra de merchandising manual.

O exemplo mais fácil é que a configuração para uma categoria também aplicará modificadores às suas subcategorias.

## Simulação



- Considere a árvore de categorias "roupas > crianças > camiseta".
- Crie uma regra de comercialização visual para classificar manualmente (fixar) alguns itens na categoria "crianças" e na subcategoria "camiseta".
- A subcategoria "camiseta" não aplicará a classificação esperada corretamente, pois estará sob a influência da regra de comercialização da categoria "crianças".



## Workaround


É possível criar o mesmo tipo de regra por meio do editor manual, onde você pode definir a opção "acionador exclusivo", evitando completamente a sobreposição entre regras diferentes.




