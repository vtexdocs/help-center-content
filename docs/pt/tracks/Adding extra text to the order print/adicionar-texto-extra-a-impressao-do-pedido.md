---
title: 'Adicionar texto extra à impressão do pedido'
id: 6x3F7K7XfiVoOPsKR9ukUG
status: ARCHIVED
createdAt: 2020-06-28T19:11:23.042Z
updatedAt: 2021-11-25T14:00:11.896Z
publishedAt: 
firstPublishedAt: 2020-06-28T19:17:44.814Z
contentType: trackArticle
productTeam: Shopping
slugEN: adding-extra-text-to-the-order-print
locale: pt
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugPT: adicionar-texto-extra-a-impressao-do-pedido
---

>❗ A adicão de texto extra à impressão do pedido, explicada neste artigo, envolve e alteração do arquivo JavaScript `checkout-instore-custom.js`. Essa operação deve ser realizada somente por pessoas com experiência em programação. Alterações incorretas nesse arquivo podem causar erros críticos.

Por padrão, a impressão do resumo do pedido não contém nenhum texto personalizado. Caso deseje adicionar texto extra à impressão do pedido, é necessário editar o arquivo `checkout-instore-custom.js`.

Nesse arquivo, dentro do objeto `window.INSTORE_CONFIG`, adicione a propriedade `printedOrderExtraText`. O valor dessa propriedade será o novo texto impresso. O trecho de código deve ficar como no exemplo abaixo:

```json
window.INSTORE_CONFIG = {
  printedOrderExtraText: 'Escreva seu texto extra aqui',
}
```

>❗ Não remova nenhuma das outras propriedades presentes no objeto `window.INSTORE_CONFIG`, para evitar a quebra de outras funcionalidades.

Após recarregar o inStore, sempre que um vendedor imprimir um pedido, esse texto aparecerá na impressão.

## Exemplo

Antes de adicionar texto extra, a impressão do resumo do pedido tem o seguinte formato:

![28. Adding extra text to the order print - 1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

Em nosso exemplo, alteramos o arquivo `checkout-instore-custom.js` inserindo o seguinte texto extra:

```json
window.INSTORE_CONFIG = {
  printedOrderExtraText: 'Esta nota não tem validade fiscal',
}
```

Agora, quando sempre que um resumo de pedido for impresso, teremos o seguinte resultado:

![28. Adding extra text to the order print - 2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)
