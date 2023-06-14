---
title: 'Lançamos nossas novas APIs de Cross-selling e Up-selling'
id: 37Lc6sI2owMCiUamocgAcc
status: PUBLISHED
createdAt: 2017-12-04T18:54:28.850Z
updatedAt: 2020-05-11T19:43:09.938Z
publishedAt: 2020-05-11T19:43:09.938Z
contentType: updates
productTeam: Marketing & Merchandising
author: 245tA425AIeioKAk2eaiwS
slug: lancamos-nossas-novas-apis-de-cross-selling-e-up-selling
locale: pt
legacySlug: lancamos-nossas-novas-apis-de-cross-selling-e-up-selling
announcementImageID: ''
announcementSynopsisPT: 'Disponibilizamos para todos os nossos clientes e parceiros as nossas APIs de Cross-selling e Up-selling.'
---

Disponibilizamos para todos os nossos clientes e parceiros as nossas APIs de Cross-selling e Up-selling. Utilizando estas técnicas de venda, você vai poder exibir em sua vitrine diversas ofertas com algumas simples chamadas de API.

## As novas APIs

Agora, você pode realizar as chamadas de Cross-selling e Up-selling em APIs REST. Estas chamadas funcionam da mesma forma que todas as outras APIs VTEX.

Abaixo, segue a lista das novas chamadas disponíveis:

### Quem Viu Viu Também: 

__GET__

`http://{{AccountName}}.{{environment}}.com.br/api/catalog_system/pub/products/crossselling/whosawalsosaw/{{productId}}`

Esta API vai retornar os produtos que foram __vistos__ por clientes que também __viram__ um determinado produto.

### Quem Viu Comprou Também:

__GET__

`http://{{AccountName}}.{{environment}}.com.br/api/catalog_system/pub/products/crossselling/whosawalsobought/{{productId}}`

Esta API vai retornar os produtos que foram __comprados__ por clientes que __viram__ um determinado produto.

### Quem Comprou Comprou Também: 

__GET__

`http://{{AccountName}}.{{environment}}.com.br/api/catalog_system/pub/products/crossselling/whoboughtalsobought/{{productId}}`

Esta API vai retornar os produtos que também foram __comprados__ por clientes que __compraram__ um determinado produto.

### Acessórios: 

__GET__ 

`http://{{AccountName}}.{{environment}}.com.br/api/catalog_system/pub/products/crossselling/accessories/{{productId}}`

Esta API vai retornar os produtos que foram cadastrados como __acessórios__ ou __complementos__de um determinado produto.

### Produtos Similares: 

__GET__

`http://{{AccountName}}.{{environment}}.com.br/api/catalog_system/pub/products/crossselling/similars/{{productId}}`

Esta API vai retornar os produtos que também foram cadastrados como __produtos similares__ em um determinado produto.

### Sugestões: 

__GET__ 

`http://{{AccountName}}.{{environment}}.com.br/api/catalog_system/pub/products/crossselling/suggestions/{{productId}}`

Esta API vai retornar os produtos que também foram cadastrados como __sugestões__ de Up-selling. Vale ressaltar que este produto somente será mostrado se o valor da sugestão for maior que o do produto onde a sugestão foi cadastrada.

## Saiba mais

Para saber mais detalhes sobre as chamadas, acesse nossa [documentação de APIs](https://developers.vtex.com/reference/crossselling#productsearchwhosawalsosaw).

Para mais informações sobre as modalidades de Cross-selling e Up-Selling descritas acima, acesse o [artigo do VTEX Help](/pt/tutorial/configurando-produto-similar-sugestoes-acessorios-e-genericos)
