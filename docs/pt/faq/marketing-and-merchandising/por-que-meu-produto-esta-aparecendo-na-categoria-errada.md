---
title: 'Por que meu produto está aparecendo na categoria errada?'
id: 189ijTfdJkcy2gg2MWkuEE
status: PUBLISHED
createdAt: 2018-01-23T13:35:06.489Z
updatedAt: 2022-08-24T21:09:00.452Z
publishedAt: 2022-08-24T21:09:00.452Z
firstPublishedAt: 2018-01-23T14:36:56.218Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: authors_59
slugEN: why-is-my-product-appearing-in-the-wrong-category
locale: pt
legacySlug: por-que-meu-produto-esta-aparecendo-na-categoria-errada
---

Caso você ache que um produto está sendo exibido numa categoria errada, existem alguns procedimentos que podemos realizar para testar essa hipótese. Siga os passos abaixo para analisar este cenário.

## Verificação via API

O primeiro passo é fazer um request GET na rota [Get Product by Id da Catalog API](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-product). 

A resposta desta chamada traz as informações de `DepartmentId` e `CategoryId`, como vemos na imagem abaixo:

![department-id-category-id](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/marketing-and-merchandising/por-que-meu-produto-esta-aparecendo-na-categoria-errada_1.png)

Depois, você deve comparar esta resposta com os Ids exibidos em sua árvore de categoria. Para acessar sua árvore de categorias, siga os passos a seguir:

1. Acesse o módulo __Catálogo__.
2. Clique em __Categorias__.
3. Clique no botão `+` para ver sua árvore de categorias.

Pronto! Agora é só comparar os valores e verificar se os dados são correspondentes. 

Caso o produto esteja cadastrado numa categoria errada, basta mudar o produto de categoria. [Clique aqui](/pt/tutorial/cadastrando-produto) para saber como cadastrar a categoria em um produto.

## Categoria Similar

Na VTEX, é possível cadastrar os produtos em categorias similares. Assim, produtos que tenham categorias similares cadastradas serão exibidos nas vitrines das páginas dessas categorias.

Isso pode causar a impressão de que o produto está sendo exibido na categoria errada. Para verificar se o seu produto possui uma categoria similar cadastrada, acesse nosso artigo sobre [como configurar categoria similar](/pt/tutorial/configurando-categoria-similar).
