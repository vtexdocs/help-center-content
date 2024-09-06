---
title: 'Como adicionar texto extra na impressão do pedido'
id: 41o8JT6hYQUqQWm0QkmUC6
status: ARCHIVED
createdAt: 2018-12-27T18:32:05.579Z
updatedAt: 2021-08-24T20:47:12.698Z
publishedAt: 
firstPublishedAt: 2018-12-27T19:45:31.137Z
contentType: trackArticle
productTeam: Shopping
slug: como-adicionar-texto-extra-na-impressao-do-pedido
locale: pt
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugPT: instore-setup
---

Por padrão a impressão de do pedido não vem com nenhum texto personalizado.

Caso deseje adicionar algum texto extra a na impressão do pedido, é necessário editar o arquivo `checkout-instore-custom.js` presente no admin do Portal. Por se tratarem de arquivos utilizados em diversos fluxos de uso da aplicação, é importante que você tenha conhecimento de programação antes de alterá-los, para evitar a quebra de outras funcionalidades.

No arquivo `checkout-instore-custom.js` você precisa encontrar o objeto `window.INSTORE_CONFIG` e adicionar o trecho de código disponível abaixo:

```
window.INSTORE_CONFIG = {
  printedOrderExtraText: 'Escreva seu texto extra aqui',
}
```

> __IMPORTANTE__: Não remova nenhuma das outras propriedades presentes no objeto `window.INSTORE_CONFIG`, para evitar a quebra de outras funcionalidades.
 
Após recarregar o inStore, quando for imprimir um pedido verá esse texto extra na impressão.

Exemplo rápido:

Antes de adicionar o texto extra teriamos uma impressão da seguinte forma:
![inStore recommended text before](https://images.ctfassets.net/alneenqid6w5/5AWqMIPwGc6aCSYGEsOAOq/6c1eda39348438463dc65a30fa56261e/inStore_recommended_text_before.png)

Ao alterar o arquivo `checkout-instore-custom.js` colocando o seguinte texto extra:

```
window.INSTORE_CONFIG = {
  printedOrderExtraText: 'Essa nota não tem validade fiscal',
}
```

Agora quando for impresso o pedido, teremos:
![inStore recommended text after](https://images.ctfassets.net/alneenqid6w5/7loSAqq1wIWIioOekyiaIO/2226bb32bb7a191b5f709e3ce429d30d/inStore_recommended_text_after.png)


