---
title: 'Forçar disponibilidade de estoque'
id: 2SgRUekV8FO4lg2aO6YTmh
status: ARCHIVED
createdAt: 2020-06-28T19:07:00.903Z
updatedAt: 2021-11-25T14:00:08.281Z
publishedAt: 
firstPublishedAt: 2020-06-28T19:11:02.443Z
contentType: trackArticle
productTeam: Shopping
slugEN: forcing-stock-availability
locale: pt
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugPT: forcar-disponibilidade-de-estoque
---

>❗ A configuração para forçar disponibilidade de estoque, explicada neste artigo, envolve e alteração do arquivo `checkout-instore-custom.js`. Essa operação deve ser realizada somente por pessoas com experiência em programação. Alterações incorretas nesse arquivo podem causar erros críticos.

Por padrão, se um SKU tem estoque zerado no catálogo da loja, não é possível realizar uma venda desse SKU com o inStore.

No entanto, existem casos em que - mesmo o estoque estando zerado - o SKU existe e está disponível na loja física. E você pode querer dar aos seus vendedores a possibilidade de vender SKUs nessa situação.

O inStore permite isso por meio de uma configuração realizada no arquivo `checkout-instore-custom.js` que habilita a feature de __Forçar Disponibilidade de Estoque__.

Para ativar essa feature, você precisa incluir a propriedade `sellWithoutStockInHands` no objeto `window.INSTORE_CONFIG`, com valor `true`.

Esse trecho de código deve ficar mais ou menos como no exemplo abaixo:

```json
window.INSTORE_CONFIG = {
  sellWithoutStockInHands: true,
}
```

>❗ Não remova nenhuma das outras propriedades presentes no objeto `window.INSTORE_CONFIG`, para evitar a quebra de outras funcionalidades.
