---
title: 'Esconder sugestões de produtos (recomendação)'
id: 7027gOkloW6sC0yuCCkkcK
status: ARCHIVED
createdAt: 2018-12-17T17:48:42.456Z
updatedAt: 2020-08-03T20:01:06.502Z
publishedAt: 
firstPublishedAt: 2018-12-17T18:35:36.153Z
contentType: trackArticle
productTeam: Shopping
slugEN: hide-product-suggestions-recommendation
locale: pt
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugPT: instore-setup
---

Por padrão o inStore inclui uma lista de produtos sugeridos no carrinho e na página de produto.

![inStore recommendation](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/instore-setup/esconder-sugestes-de-produtos-recomendacao_1.png)

Caso deseje ocultar as recomendações, é necessário editar os arquivos `checkout-instore-custom.css` e `checkout-instore-custom.js` presentes no admin do Portal. Por se tratarem de arquivos utilizados em diversos fluxos de uso da aplicação, é importante que você tenha conhecimentos de programação antes de alterá-los, para evitar a quebra de outras funcionalidades.

No arquivo `checkout-instore-custom.css` inclua a regra:

```
#recommendation-shelf {
  display: none;
}
```

No arquivo `checkout-instore-custom.js` você precisa encontrar o objeto `window.INSTORE_CONFIG` e adicionar o trecho de código disponível abaixo:

```
window.INSTORE_CONFIG = {
  recommendationsEnabled: false, // ocultando recomendações (o padrão para exibir é: true)
}
```

> __IMPORTANTE__: Não remova nenhuma das outras propriedades presentes no objeto `window.INSTORE_CONFIG`, para evitar a quebra de outras funcionalidades.
 
Após recarregar o inStore, não verá mais a listagem de sugestões.
