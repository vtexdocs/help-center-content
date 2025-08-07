---
title: "Busca Filtro Navigator + Faixa de preço que produz resultados incorretos"
id: 6s4vJr6DVPLU9JlxIPWqhx
status: PUBLISHED
createdAt: 2022-06-28T16:55:53.208Z
updatedAt: 2025-05-20T19:58:36.371Z
publishedAt: 2025-05-20T19:58:36.371Z
firstPublishedAt: 2022-06-28T16:55:53.927Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: busca-filtro-navigator-faixa-de-preco-que-produz-resultados-incorretos
locale: pt
kiStatus: No Fix
internalReference: 504992
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>

Atualmente, ao utilizar o filtro de busca da marca Navigator juntamente com uma faixa de preço da busca legada, produtos fora da marca filtrada podem ser mostrados.

* * *


## Simulação


1) Povoar o controlador de busca com pelo menos 2 marcas, ou seja, para uma determinada categoria/subcategoria, ter pelo menos 2 marcas diferentes listadas:

 ![](https://vtexhelp.zendesk.com/attachments/token/2lJXG553wVxO5DU4GKifG7IlI/?name=inline-447748464.png)

2) Posteriormente, filtro para apenas `Brand B`, por exemplo, agora, apenas os resultados produzidos por esta marca específica para esta categoria devem ser mostrados,

3) Ao interagir com o deslizador de faixa de preço, se você filtrar por um preço, o filtro da marca realizado no passo 3 é ignorado, ou seja, você possivelmente terá produtos da Marca A sendo mostrados nos resultados da Marca B.



* * *




## Workaround


Use diretamente a API de busca usando simultaneamente o PriceRange e os filtros de marca, a resposta de busca está enviando os resultados corretos
https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/search.

(example: `https://{accountName}.{environment}.com.br/api/catalog_system/pub/products/search?fq=C%3A%2F1000050%2F1000155?fq=C:/1000050/1000155&P:[20830 TO 24100]`)

