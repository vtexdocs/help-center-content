---
title: Especificação de produto/SKU duplicada ou incorreta ao alterar árvore de categorias ou produto de categoria
id: 2qMpMAh6B6oGk2gEq2swCY
status: PUBLISHED
createdAt: 2018-04-25T21:16:08.636Z
updatedAt: 2022-12-22T20:48:57.917Z
publishedAt: 2022-12-22T20:48:57.917Z
firstPublishedAt: 2018-04-25T21:29:22.321Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: especificacao-de-produtosku-duplicada-ou-incorreta-ao-alterar-arvore-de-categorias-ou-produto-de-categoria
kiStatus: Backlog
internalReference: 
---

## Sumário

Ao alterar a categoria de um produto ou modificar a árvore de categorias, alguns produtos podem apresentar especificações de produto ou de SKU duplicadas ou incorretas, pois as especificações da categoria anterior continuam sendo exibidas.

## Simulação

__Alterando produto de categoria:__

1. Acessar o catálogo.
2. Navegar para Cadastro de Produtos > Produtos e SKUs > Cadastro de Produtos e SKUs.
3. Escolher um produto e clicar no botão __Alterar__.
4. Alterar a categoria.
5. Salvar o produto.

__Alterando a categoria pai de uma categoria:__

1. Acessar o catálogo.
2. Navegar para Cadastro de Produtos > Categoria.
3. Selecionar uma categoria.
4. Clicar no botão __ações__ > __alterar__.
5. Alterar a categoria pai.
6. Salvar.

## Workaround

Não há workarounds no momento, tanto para a alteração de categoria no produto quanto para a alteração da categoria pai. Para resolver o problema de especificações de produtos ou SKUs duplicados, é possível realizar a indexação do produto novamente. Na maioria dos casos, esta ação resolve o problema.

*__Atenção:__ se a especificação for do produto, é necessário acessar a página do produto no Admin, realizar uma pequena alteraçã e salvá-lo. Dessa forma, você irá forçar a reindexação. Caso a especificação duplicada seja do SKU, é necessário seguir o mesmo procedimento descrito anteriormente, porém acessando a página do SKU em questão.*



