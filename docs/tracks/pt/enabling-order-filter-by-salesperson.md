---
title: 'Habilitar filtro de pedidos por vendedor'
id: tbrE64fi2EvQeVpGtNpEo
status: DRAFT
createdAt: 2020-06-28T19:01:07.153Z
updatedAt: 2021-11-25T14:00:01.587Z
publishedAt: 
firstPublishedAt: 2020-06-28T19:06:04.684Z
contentType: trackArticle
productTeam: Shopping
slug: habilitar-filtro-de-pedidos-por-vendedor
locale: pt
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugPT: habilitar-filtro-de-pedidos-por-vendedor
---

>❗ A mudança das configurações de filtro por vendedor, explicada neste artigo, envolve e alteração do arquivo `checkout-instore-custom.js`. Essa operação deve ser realizada somente por pessoas com experiência em programação. Alterações incorretas nesse arquivo podem causar erros críticos.

No inStore, é possível ver a listagem de todos os pedidos finalizados em uma loja:

![26. Enable order filter by salesperson - 1](https://images.ctfassets.net/alneenqid6w5/4pI7zxSaInuVvjIqWUK3Uv/ef9c2555f36f9bed41970a85727c2059/26._Enable_order_filter_by_salesperson_-_1.png)

Porém, algumas vezes faz sentido que um vendedor veja apenas os pedidos finalizados por ele. Para habilitar essa opção é necessário editar o arquivo `checkout-instore-custom.js`.

Dentro do arquivo, no Admin da VTEX, você deve encontrar o objeto `window.INSTORE_CONFIG` e adicionar o objeto `OMSFilters`. O trecho de código deve ficar como o exemplo abaixo:

```json
window.INSTORE_CONFIG = {
  OMSFilters: {
    'f_UtmSource': '{{ vendor.storeId }}',
    'CallCenterOperatorEmail': '{{ vendor.username }}',
  },
}
```

Com isso, filtramos os pedidos para exibir apenas aqueles realizados pelo vendedor atualmente logado no inStore.

>❗ Não remova nenhuma das outras propriedades presentes no objeto `window.INSTORE_CONFIG`, para evitar a quebra de outras funcionalidades.

Após recarregar os dados do inStore, clicando no botão __Restaurar dados__, o vendedor verá apenas os pedidos fechados por ele, como no seguinte exemplo:

![26. Enable order filter by salesperson - 2](https://images.ctfassets.net/alneenqid6w5/4vi7YeUa3706ls0bQ2p0eE/343cfe8b50ae2956522bc5c79de8ec58/26._Enable_order_filter_by_salesperson_-_2.png)
