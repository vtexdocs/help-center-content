---
title: 'Preço do resultado de busca é diferente da página de produto'
id: 1108Xha3zw6ZvVUINfY7HR
status: PUBLISHED
createdAt: 2022-11-22T14:26:20.489Z
updatedAt: 2024-06-04T12:45:41.670Z
publishedAt: 2024-06-04T12:45:41.670Z
firstPublishedAt: 2022-11-22T14:42:50.738Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: preco-do-resultado-de-busca-e-diferente-da-pagina-de-produto
locale: pt
legacySlug: preco-do-resultado-de-busca-e-diferente-da-pagina-de-produto
subcategoryId: 23NGhMgqA1eCYad7kzRFGu
---

Durante a [atualização de preço de um SKU](https://help.vtex.com/pt/tutorial/alteracao-de-preco-de-sku--tutorials_95), é possível que o preço do resultado de busca apresente uma divergência com o preço ou estoque  da página de produto, caso a loja use o [Intelligent Search](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb). 

Para a utilização do Intelligent Search, é necessário a configuração do aplicativo [Search Result](https://developers.vtex.com/vtex-developer-docs/docs/vtex-search-result). Nele, a propriedade `simulationBehavior`, que determina como os dados da busca serão atualizados, pode ser definida com o valor `skip`. Esta configuração deixa o carregamento da busca mais rápido, porém pode gerar a divergência observada.

As informações da página de busca serão atualizadas automaticamente, mas a loja pode configurar a propriedade `simulationBehavior` com o valor `default` para evitar futuras divergências.
