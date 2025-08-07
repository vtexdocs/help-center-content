---
title: 'Configurar categoria similar'
id: tutorials_204
status: PUBLISHED
createdAt: 2017-04-27T22:16:03.892Z
updatedAt: 2025-05-23T23:04:07.864Z
publishedAt: 2025-05-23T23:04:07.864Z
firstPublishedAt: 2017-04-27T23:00:46.323Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: setting-up-similar-categories
locale: pt
legacySlug: configurando-categoria-similar
subcategoryId: 1E7tziZCkY4w8i4EmUuwec
---

No Admin VTEX, é possível cadastrar categoria similar a nível de produto ou de categoria, como veremos nas próximas seções.

<div class = "alert alert-info">
  <p>Para cadastrar categoria similar pela Catalog API, utilize o endpoint <a href="https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product/-productId-/similarcategory/-categoryId-">Add similar category</a>.</p>
</div>

## Configurar categoria similar pelo produto

No produto, a configuração de categoria similar faz com que ele seja exibido na página da categoria cadastrada como similar, além de sua categoria original. No entanto, somente a categoria principal do produto definirá os campos, especificações e filtros.

Digamos, por exemplo, que um produto esteja na categoria principal __Copos__ e na categoria similar __Jarras__. Se você acessar a categoria __Jarras__, não vai ver o filtro __Copos Americanos__ (que faz parte da categoria principal __Copos__).

Da mesma maneira, se filtrar por __Jarras de vidro__ na categoria __Jarras__, você não vai ver os copos de vidro, já que é impossível preencher um campo da categoria similar para um produto da categoria principal.

O passo a passo para configurar categoria similar no produto é o seguinte:

1. No Admin VTEX, acesse **Catálogo > Produtos e SKUs**, ou digite [Produtos e SKUs](/pt/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By) na barra de busca no topo da página.
2. Clique na linha do produto desejado, ou clique no menu três pontos > `Editar produto`. Caso esteja criando o produto, confira o artigo [Adicionar ou editar produto](/pt/tutorial/adicionar-ou-editar-produto--29IkdEu6GofCFlltsZh2H8).
3. Na seção **Frente de loja**, adicione as categorias desejadas no campo **Categorias similares**.
4. Clique em `Salvar`.

## Configurar categoria similar pela categoria

<div class="alert alert-warning">
  <p>Esta configuração é compatível apenas com lojas que utilizam o <a href="https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj">Portal CMS Legado</a>.</p>
</div>

Ao editar uma categoria, é possível configurar sua categoria similar. Ao concluir esse tipo de configuração a nível de categoria, o menu de navegação passa a exibir um link para a categoria similar no nível da categoria original. 

O passo a passo para configurar categoria similar na categoria é o seguinte:

1. No Admin VTEX, acesse **Catálogo > Categorias**, ou digite **Categorias** na barra de busca no topo da página.
2. Clique em `Expandir todos` para visualizar todas as opções e, em seguida, clique na categoria desejada.
3. Clique no botão `Ações`.
4. Clique na opção `Incluir similar`. Abrirá a lista de categorias similares daquela categoria.
5. Clique no botão `Nova categoria similar`.
6. Clique no botão `Selecionar categoria`. Ao fazer isso, uma nova janela se abrirá com a lista de todas as categorias.
7. Clique em `Expandir todos` para visualizar todas as opções e, em seguida, clique na categoria desejada.
8. Clique em `Salvar`.

