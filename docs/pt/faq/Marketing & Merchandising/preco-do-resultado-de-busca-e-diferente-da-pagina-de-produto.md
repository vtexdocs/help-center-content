---
title: 'Preço do resultado de busca é diferente da página de produto'
id: 2A75LUcywLJdeq38hsBhk0
status: PUBLISHED
createdAt: 2023-02-28T21:09:23.876Z
updatedAt: 2023-02-28T21:11:29.565Z
publishedAt: 2023-02-28T21:11:29.565Z
firstPublishedAt: 2023-02-28T21:11:29.565Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: the-price-in-the-search-result-is-different-from-the-product-page
locale: pt
legacySlug: preco-do-resultado-de-busca-e-diferente-da-pagina-de-produto
---

Durante a [atualização de preço de um SKU](/pt/tutorial/alteracao-de-preco-de-sku--tutorials_95), é possível que o preço do resultado de busca apresente uma divergência com o preço ou estoque  da página de produto, caso a loja use o [Intelligent Search](/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb). 

Para a utilização do Intelligent Search, é necessário a configuração do aplicativo [Search Result](https://developers.vtex.com/vtex-developer-docs/docs/vtex-search-result). Nele, a propriedade `simulationBehavior`, que determina como os dados da busca serão atualizados, pode ser definida com o valor `skip`. Esta configuração deixa o carregamento da busca mais rápido, porém pode gerar a divergência observada.

As informações da página de busca serão atualizadas automaticamente, mas a loja pode configurar a propriedade `simulationBehavior` com o valor `default` para evitar futuras divergências.
