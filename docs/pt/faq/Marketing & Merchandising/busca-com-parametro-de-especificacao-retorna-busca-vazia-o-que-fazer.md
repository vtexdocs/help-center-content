---
title: 'Busca com parâmetro de especificação retorna busca vazia. O que fazer?'
id: 5qG7kkEeOsG6OQgu8YAKko
status: CHANGED
createdAt: 2018-01-31T15:46:42.842Z
updatedAt: 2020-11-27T19:39:57.229Z
publishedAt: 2020-04-20T15:15:13.316Z
firstPublishedAt: 2018-01-31T16:25:57.832Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: authors_59
slugEN: search-with-specification-parameter-returns-empty
locale: pt
legacySlug: busca-com-parametro-de-especificacao-retorna-busca-vazia-o-que-fazer
---

>⚠️ **Atenção**: a VTEX apresenta duas opções da busca - a busca VTEX e o VTEX Intelligent Search. Esse artigo se refere à busca VTEX. Para saber mais sobre o aplicativo VTEX Intelligent Search acesse <a href = "https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">nossa track</a>.

Caso a URL `http://www.{account-name}.com.br/busca/?fq=specificationFilter_{XXX}:{Y}` não esteja trazendo os produtos/SKUs que têm a especificação desejada, é possível que o parâmetro __Filtro__ não esteja marcado no cadastro do campo de produto/SKU. 

Para resolver o problema, siga os passos abaixo:

1. Acesse o módulo __Catálogo__.
2. Clique em __Categorias__.
3. Clique na categoria onde a especificação foi cadastrada. É necessário clicar na categoria raiz onde a especificação foi criada.
4. Do lado direito da árvore de categorias, no menu azul, clique em __ações__.
5. Dependendo de onde esteja cadastrada a especificação, clique em __Campo (Produto)__ ou __Campo (SKU)__.
6. Na especificação desejada, clique em __Alterar__.
7. Marque a flag __Filtro__.
8. Clique em __Salvar__.
