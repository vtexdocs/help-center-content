---
title: 'Controle de destaque de coleção'
id: 1tGdb2ndjqy6yWsk2YwKMu
status: PUBLISHED
createdAt: 2018-02-21T19:12:49.216Z
updatedAt: 2023-03-29T18:01:46.386Z
publishedAt: 2023-03-29T18:01:46.386Z
firstPublishedAt: 2018-02-21T20:51:49.939Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: controle-de-destaque-de-colecao
legacySlug: controle-de-destaque-de-colecao
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

<div class = "alert alert-warning">
  <p><b>Atenção:</b> existem duas formas de configurar coleções, por meio do CMS ou utilizando o módulo de Coleções Beta. Este artigo, refere-se à <a href = "https://help.vtex.com/pt/tutorial/cadastro-de-colecoes-cms--2YBy6P6X0NFRpkD2ZBxF6L">configuração de coleções por meio do CMS</a>.</p>
</div>

O controle `<vtex.cmc:HightLight/>` (para páginas de produto) ou `$product.HightLight` (para prateleiras) renderiza um elemento HTML com uma classe específica no contexto dos produtos que fizerem parte de uma coleção marcada com a flag __Highlight__.

Em primeiro lugar, vamos ver onde se encontra a flag Highlight:

1. Accesse __Storefront__ > __Layout__ no Admin.
2. Clique na pasta CMS e depois na pasta __Product Clusters (Collections)__.
3. Clique em uma coleção.
4. Marque a flag __Highlight__, que fica na tela da coleção, e clique em __Save Product Cluster__.

![CollectionHighlightFlag](//images.contentful.com/alneenqid6w5/4ced6Gcbeg662KewckyQka/77aaef77fc87cf8112f759c867a6bd4b/CollectionHighlightFlag.png)

Ao marcar a flag, você informa ao sistema que sempre que o controle de destaque for usado no template de uma página, os produtos exibidos nessa página que fizerem parte da coleção em questão devem aparecer com o elemento HTML abaixo, onde no lugar de `{nomeDaColecao}` aparece o nome da coleção cadastrada no CMS:

`<p class="flag {nomeDaColecao}">{nomeDaColecao}</p>`

Você pode, então, customizar o CSS para definir de que maneira a classe `flag {nomeDaColecao}` afetará a exibição dos produtos.

Este recurso pode ser usado, por exemplo, para fazer com que os produtos de uma coleção chamada "Lançamento" apareçam sempre com uma flag destacando que eles são novidade na loja. Ao adicionar o controle no template da página de categoria, por exemplo, todo produto da coleção Lançamento exibido em uma página de categoria aparecerá com esse destaque.

<div class="alert alert-warning">
Lembre-se que, se a página for de produto, o controle que deve ser usado é o <code>&lt;vtex.cmc:HightLight/&gt;</code>. Já se for uma página de vitrine, você deve usar o <code>$product.HightLight</code>.
</div>
