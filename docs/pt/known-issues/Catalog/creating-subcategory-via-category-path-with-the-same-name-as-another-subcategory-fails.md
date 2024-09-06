---
title: 'Falha ao criar uma subcategoria por meio do caminho da categoria, com o mesmo nome de outra subcategoria'
id: 4ncZiLNaKbgfYzGHCGvwdk
status: PUBLISHED
createdAt: 2024-08-26T15:45:09.563Z
updatedAt: 2024-08-26T15:45:10.888Z
publishedAt: 2024-08-26T15:45:10.888Z
firstPublishedAt: 2024-08-26T15:45:10.888Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: falha-ao-criar-uma-subcategoria-por-meio-do-caminho-da-categoria-com-o-mesmo-nome-de-outra-subcategoria
locale: pt
kiStatus: Backlog
internalReference: 1087069
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Atualmente, é possível criar novas categorias e/ou subcategorias informando seus nomes por meio da propriedade JSON "CategoryPath" na API de inserção de produtos: https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product

Entretanto, quando a subcategoria informada tem o mesmo nome de outra subcategoria, o produto é criado na primeira e a segunda não é gerada.

Isso não acontece com as categorias.

## Simulação


Usando a API mencionada, crie um produto informando, no caminho da categoria, uma subcategoria que tem o mesmo nome de outra subcategoria, mas que ainda não foi criada e deve ser criada em outro lugar na árvore de categorias.

Como exemplo, verifique a árvore abaixo:

 ![](https://vtexhelp.zendesk.com/attachments/token/0RlxkVj9Gvd2ukR1vZcxdcmyC/?name=image.png)

Isso significaria informar no caminho "Department/Category2/Subcategory1".

Em vez disso, o produto será criado no caminho "Department/Category/Subcategory1" e a nova subcategoria não será criada

## Workaround


Em vez disso, crie a subcategoria por outros meios, como a API de categoria PUT: https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/category e, em seguida, insira o produto nessa categoria informando seu caminho ou ID.





