---
title: 'Search resolver não exibe mais o número de produtos em estoque da loja'
id: 7Ah6ou3RCoNmMeedZaBeJS
status: PUBLISHED
createdAt: 2022-02-18T15:51:53.790Z
updatedAt: 2022-02-21T16:30:53.405Z
publishedAt: 2022-02-21T16:30:53.405Z
contentType: updates
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: search-resolver-oculta-quantidade-produto-estoque
locale: pt
legacySlug: search-resolver-oculta-quantidade-produto-estoque
announcementImageID: ''
announcementSynopsisPT: 'Para melhorar a privacidade de dados, o search-resolver não exibe mais a quantidade de produtos no estoque'
---

Atualizamos a API do [`search-resolver@0.x`](https://github.com/vtex-apps/search-resolver), aplicativo necessário para o funcionamento da busca da loja, para ocultar dados sensíveis relacionados ao estoque dos produtos da loja. A partir do dia 20/03/22, a quantidade de produtos disponíveis no estoque não será mais exibida pelo [VTEX Search GraphQL](https://github.com/vtex-apps/search-graphql).

Lojas que utilizam o [VTEX Intelligent Search](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG) não serão afetadas.

## O que mudou?

Removemos a possibilidade de exibir a exata quantidade de produtos que estão no estoque de uma loja pelo `search-resolver@0.x` para clientes que utilizam a busca nativa da VTEX. Agora esse campo será omitido da resposta recebida pelo VTEX Search GraphQL. 

Para mais detalhes, veja nosso [release note](https://developers.vtex.com/vtex-developer-docs/changelog/update-on-search-resolver0x-api-response) sobre a atualização.

## Por que realizamos esta mudança?

Antes, era possível ver a quantidade do produto em estoque de uma loja a partir da API do `search-resolver@0.x`. Porém, como o estoque é um dado sensível e a API é pública, decidimos ocultar essa informação.

## O que precisa ser feito?

Essa atualização é automática, não é preciso realizar nenhuma ação.  

Caso você utilize esse dado na sua loja – para indicar as últimas unidades disponíveis de um produto, por exemplo – você precisa entrar em contato com o [nosso Suporte](https://support.vtex.com/hc/pt-br/requests) para continuar a exibir essa informação.

>⚠️ É importante ressaltar que, caso a loja decida exibir a quantidade de produtos em estoque, essa informação será pública e poderá ser acessada pelo [VTEX Search GraphQL](https://github.com/vtex-apps/search-graphql).
