---
title: 'Busca Filtro Navigator + Faixa de preço que produz resultados incorretos'
id: 6s4vJr6DVPLU9JlxIPWqhx
status: PUBLISHED
createdAt: 2022-06-28T16:55:53.208Z
updatedAt: 2024-02-16T20:24:11.551Z
publishedAt: 2024-02-16T20:24:11.551Z
firstPublishedAt: 2022-06-28T16:55:53.927Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: search-navigator-filter-price-range-yielding-incorrect-results
locale: pt
kiStatus: No Fix
internalReference: 504992
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Atualmente, ao utilizar o filtro de busca da marca Navigator juntamente com uma faixa de preço em uma edição comercial da VTEX, produtos fora da marca filtrada podem ser mostrados.



* * *




## Simulação


1) Povoar o controlador de busca com pelo menos 2 marcas, ou seja, para uma determinada categoria/subcategoria, ter pelo menos 2 marcas diferentes listadas:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Portal/busca-filtro-navigator-faixa-de-preco-que-produz-resultados-incorretos_1.png)

2) Posteriormente, filtro para apenas `Brand B`, por exemplo, agora, apenas os resultados produzidos por esta marca específica para esta categoria devem ser mostrados,

3) Ao interagir com o deslizador de faixa de preço, se você filtrar por um preço, o filtro da marca realizado no passo 3 é ignorado, ou seja, você possivelmente terá produtos da Marca A sendo mostrados nos resultados da Marca B.



* * *




## Workaround


Use diretamente a API de busca usando simultaneamente o PriceRange e os filtros de marca, a resposta de busca está enviando os resultados corretos
https://developers.vtex.com/vtex-rest-api/reference/search-3#productsearchfilteredandordered

(example: `https://{accountName}.{environment}.com.br/api/catalog_system/pub/products/search?fq=C%3A%2F1000050%2F1000155?fq=C:/1000050/1000155&P:[20830 TO 24100]`)

