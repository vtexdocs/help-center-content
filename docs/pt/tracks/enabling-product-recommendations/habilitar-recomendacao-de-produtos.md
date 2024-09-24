---
title: 'Habilitar recomendação de produtos'
id: 321NRjb9YjABQPReJJ5wr2
status: ARCHIVED
createdAt: 2020-06-28T18:47:06.689Z
updatedAt: 2021-11-25T13:59:58.252Z
publishedAt: 
firstPublishedAt: 2020-06-28T18:55:50.482Z
contentType: trackArticle
productTeam: Shopping
slugEN: enabling-product-recommendations
locale: pt
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugPT: habilitar-recomendacao-de-produtos
---

<div class=”alert alert-danger”>
A mudança das configurações de recomendação de produtos no inStore, explicada neste artigo, envolve e alteração dos arquivos <code>checkout-instore-custom.js</code> e <code>checkout-instore-custom.css</code>. Essa operação deve ser realizada somente por pessoas com experiência em programação. Alterações incorretas nesses arquivos podem causar erros críticos.
</div>

Por padrão, o inStore mostra uma lista de produtos sugeridos ao vendedor em duas etapas do pedido:
- No carrinho
- Na página de produto

![25. Enable product recommendations - 1](//images.ctfassets.net/alneenqid6w5/4j8YWYRuwENptnipUat6Wj/44401abb84a8aba3c3c89282afafc511/25._Enable_product_recommendations_-_1.png)

Caso deseje ocultar essas recomendações, é necessário editar os arquivos `checkout-instore-custom.css` e `checkout-instore-custom.js`.

## Editando o arquivo CSS

Assim como o arquivo JavaScript de customização do inStore, o `checkout-instore-custom.css` deve ser acessado pelo painel administrativo da VTEX (conforme explicado no artigo [inStore Customizations](https://help.tex.com/tracks/instore-customizations--1z9kBm12oBPyVNDo1ivVc2/4mwdBrFsmE2EPE0FzgX28b)).

![25. Enable product recommendations - 2](//images.ctfassets.net/alneenqid6w5/4jRvpkXNEW0k5kwXXxkRnG/fe7e30eef89ad19ad4d4bfc0ca9579a5/25._Enable_product_recommendations_-_2.png)

No arquivo `checkout-instore-custom.css`, inclua a seguinte regra de CSS:

```json
#recommendation-shelf {
  display: none;
}
```

Com isso, você esconde o componente de recomendação de produtos do front-end.

Não se esqueça de salvar o arquivo.

## Editando o arquivo JavaScript

Além de editar o arquivo CSS, é necessário fazer uma alteração no arquivo `checkout-instore-custom.js`. Abra esse arquivo no Admin da VTEX e, dentro do objeto `window.INSTORE_CONFIG`, adicione a propriedade `recommendationsEnabled`, com valor `false`. O trecho de código deve ficar assim:

```json
window.INSTORE_CONFIG = {
  recommendationsEnabled: false, // ocultando recomendações (o padrão para exibir é true)
}
```

Salve o arquivo com a alteração, depois abra o menu do aplicativo inStore e atualize os dados, clicando no botão __Restaurar dados__. Feito isso, os vendedores não verão mais recomendações de produto.

>❗ Não remova nenhuma das outras propriedades presentes no objeto `window.INSTORE_CONFIG`, para evitar a quebra de outras funcionalidades.
