---
title: 'Configurar Categoria Similar'
id: tutorials_204
status: PUBLISHED
createdAt: 2017-04-27T22:16:03.892Z
updatedAt: 2024-08-08T19:19:13.231Z
publishedAt: 2024-08-08T19:19:13.231Z
firstPublishedAt: 2017-04-27T23:00:46.323Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slug: configurando-categoria-similar
locale: pt
legacySlug: configurando-categoria-similar
subcategory: 1E7tziZCkY4w8i4EmUuwec
---

No Admin VTEX, é possível cadastrar Categoria Similar a nível de [produto](#categoria-similar-no-produto) ou a nível de [categoria](#categoria-similar-em-outra-categoria). Também é possível realizar o cadastro utilizando a [Catalog API](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product/-productId-/similarcategory/-categoryId-).

## Categoria Similar no produto

No Produto, a configuração de categoria similar faz com que o produto seja exibido na página da categoria cadastrada como similar, além de sua categoria original.

O passo a passo para configuração é o seguinte:

1. No Admin VTEX, acesse o __Catálogo__.
2. Clique em __Produtos e Skus__. Você será redirecionado para a página com a listagem de produtos.
3. No produto que você deseja incluir em uma categoria similar, clique na seta que ao lado do botão `Alterar`. Um menu suspenso vai aparecer.
4. Clique na opção __Categoria Similar__. Você verá uma página com a listagem das categorias similares ao produto selecionado. Nesta página, você pode excluir uma categoria similar já existente ou criar uma nova. 
5. Para criar uma nova categoria similar, clique em `Nova Categoria Similar`.
6. Clique em `Selecionar Categoria`. Ao fazer isso, uma nova janela se abrirá com a lista de todas as categorias.
7. Clique em `Expandir Todos` para visualizar todas as opções e, em seguida, clique na categoria desejada.
   A nova janela vai se fechar automaticamente e o campo __Categoria Similar__ vai estar preenchido com a que você escolheu.
9. Clique em `Salvar`.

Somente a categoria principal do produto definirá os campos, especificações e filtros. Digamos, por exemplo, que um produto esteja na categoria principal __Copos__ e na categoria similar __Jarras__. Se você acessar a categoria __Jarras__, não vai ver o filtro __Copos Americanos__ (que faz parte da categoria principal __Copos__).

Da mesma maneira, se filtrar por __Jarras de vidro__ na categoria __Jarras__, você não vai ver os copos de vidro, já que é impossível preencher um campo da categoria similar para um produto da categoria principal.

## Categoria Similar em outra categoria

<div class="alert alert-warning">
  <p>Esta configuração é compatível apenas com lojas que utilizam o <a href="https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj">Portal CMS Legado</a>.</p>
</div>

Ao editar uma categoria, é possível configurar sua categoria similar. Ao concluir esse tipo de configuração a nível de categoria, o menu de navegação passa a exibir um link para a categoria similar no nível da categoria original.

Confira o passo a passo a seguir:

1. No Admin VTEX, acesse o __Catálogo__.
2. Clique em __Categorias__.
3. Clique em `Expandir Todos` para visualizar todas as opções e, em seguida, clique na categoria desejada.
4. Clique no botão `Ações`.
5. Clique na opção `Incluir Similar`. Abrirá a lista de categorias similares daquela categoria.
6. Clique no botão `Nova Categoria Similar`.
7. Clique no botão `Selecionar Categoria`. Ao fazer isso, uma nova janela se abrirá com a lista de todas as categorias.
8. Clique em `Expandir Todos` para visualizar todas as opções e, em seguida, clique na categoria desejada.
11. Clique no botão `Salvar`.

## API

Para adicionar uma Categoria Similar por API, use o endpoint [Create Similar Category](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product/-productId-/similarcategory/-categoryId-).
