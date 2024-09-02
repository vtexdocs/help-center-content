---
title: 'Formulário B2B'
id: 2o7cyfIWtmAEE2y8KkYQcM
status: DRAFT
createdAt: 2018-06-28T17:07:01.490Z
updatedAt: 2020-08-03T20:00:05.795Z
publishedAt: 
firstPublishedAt: 2018-06-28T19:07:28.945Z
contentType: trackArticle
productTeam: Shopping
slug: formulario-b2b
locale: pt
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugPT: instore-setup
---

Este artigo é para quem deseja aceitar pessoas jurídicas como clientes.

A funcionalidade de __Formulário B2B__ permite que uma compra seja feita por pessoa jurídica opcionalmente (aceitando pessoas físicas também) ou obrigatoriamente (venda apenas B2B).

Para ativar o __Formulário B2B__ no inStore, será necessário editar o arquivo `checkout-instore-custom.js` presente no admin do Portal. Por se tratar de um JavaScript presente em diversos fluxos de uso da aplicação, é importante que você tenha conhecimentos de programação antes de alterá-lo, para evitar a quebra de outras funcionalidades.

Dentro do arquivo você precisa encontrar o objeto `window.INSTORE_CONFIG` e adicionar a propriedade `customerProfile.isCorporate` com o valor `{optional: true}` para habilitar o __Formulário B2B__ como opcional e assim aceitar tanto pessoas físicas quanto jurídicas como clientes, ou com o valor `{optional: false}` para permitir apenas pessoas jurídicas como clientes.

Não remova nenhuma das outras propriedades presentes nesse objeto. O resultado deve ser algo parecido com:

Para pessoa jurídica ser opcional:
```
window.INSTORE_CONFIG = {
  customerProfile: {
    isCorporate: {optional: true},
  },
}
```

Para pessoa jurídica ser obrigatório:
```
window.INSTORE_CONFIG = {
  customerProfile: {
    isCorporate: {optional: false},
  },
}
```

Exemplos de como fica no inStore o formulário com pessoa jurídica:

__Formulário B2B__ opcional fechado:

![b2b-opcional-fechado](//images.ctfassets.net/alneenqid6w5/5gFb3SBRocc6Gwcm4YusAA/86d15e9f80377edc8bda880c2fda829c/b2b-opcional-fechado.png)

__Formulário B2B__ opcional aberto:

![b2b-opcional-aberto](//images.ctfassets.net/alneenqid6w5/5KlFHUrxhmWmiK468eogck/f13e50591cb44afb21c804c6f3d7618b/b2b-opcional-aberto.png)

__Formulário B2B__ obrigatório (já vem todos os campos abertos):

![b2b-obrigatorio](//images.ctfassets.net/alneenqid6w5/1t7EvHWtg0AiSsUSkaAqUi/3f704862cc694d3feeaf540fabfba228/b2b-obrigatorio.png)
