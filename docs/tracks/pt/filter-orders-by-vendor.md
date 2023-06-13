---
title: Filtrar pedidos por vendedor
id: 3cx02v6OPY20Mue4KKokEM
status: DRAFT
createdAt: 2018-06-28T16:17:22.135Z
updatedAt: 2020-08-03T19:59:26.945Z
publishedAt: 
firstPublishedAt: 2018-06-28T16:55:25.065Z
contentType: trackArticle
productTeam: Shopping
slug: filtrar-pedidos-por-vendedor
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugPT: instore-setup
---

No inStore é possível ver a listagem de todos os pedidos finalizados em uma loja:

![pedidos finalizados](//images.ctfassets.net/alneenqid6w5/2bBNpiFuswIAqsc2EGuAMe/ee70cebba8bef3fe609f31dd5a7d905c/pedidos_finalizados.png)

Porém, algumas vezes faz sentido que um vendedor veja apenas os pedidos finalizados por ele. Para habilitar essa opção é necessário editar o arquivo `checkout-instore-custom.js` presente no admin do Portal. Por se tratar de um JavaScript presente em diversos fluxos de uso da aplicação, é importante que você tenha conhecimentos de programação antes de alterá-lo, para evitar a quebra de outras funcionalidades.

Dentro do arquivo você precisa encontrar o objeto `window.INSTORE_CONFIG` e adicionar o trecho de código disponível abaixo:

```json
window.INSTORE_CONFIG = {
  OMSFilters: {
    'f_UtmSource': '{{ vendor.storeId }}',
    'CallCenterOperatorEmail': '{{ vendor.username }}',
  },
}
```

Assim estaremos filtrando os pedidos para exibir apenas os realizados pelo vendedor atualmente logado no inStore.

__IMPORTANTE__: Não remova nenhuma das outras propriedades presentes no objeto `window.INSTORE_CONFIG`, para evitar a quebra de outras funcionalidades.

Após recarregar o inStore o resultado deve ser o seguinte:

![pedidos finalizados filtrados por vendedor](//images.ctfassets.net/alneenqid6w5/HhNBrdQZA2YAWQa8aUm6U/4f71b847a38caabe9b708bc070fda396/pedidos_finalizados_filtrados_por_vendedor.png)
