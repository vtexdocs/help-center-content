---
title: 'Entrega em Casa (prateleira infinita)'
id: 3361eYHJpKIIQkQYCmqYiO
status: ARCHIVED
createdAt: 2018-06-22T14:34:27.644Z
updatedAt: 2020-08-03T19:55:44.552Z
publishedAt: 
firstPublishedAt: 2018-06-22T14:36:44.545Z
contentType: trackArticle
productTeam: Shopping
slugEN: delivery-at-home-endless-aisle
locale: pt
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugPT: instore-setup
---

Se você configurou sua loja utilizando o fluxo do __Easy Setup__ (etapa anterior desse Tracks) seu inStore já está funcionando no modo __Entrega em casa__, lhe permitindo vender produtos do estoque de seu e-commerce.
Caso contrário, será necessário realizar uma alteração nas configurações do inStore.

Hoje essa configuração fica presente no admin do Portal, mais especificamente no arquivo `checkout-instore-custom.js` e por se tratar de um JavaScript presente em diversos fluxos de uso da aplicação, é importante que você tenha conhecimentos de programação antes de alterá-lo, para evitar a quebra de outras funcionalidades.

Para habilitar o __Entrega em casa__ você precisa encontrar o objeto `window.INSTORE_CONFIG` presente nesse arquivo e adicionar a propriedade `shouldCheckIn` com o valor `false` para que o inStore passa a considerar o estoque do e-commerce.

Não remova nenhuma das outras propriedades presentes nesse objeto, porém o resultado deve ser algo parecido com:

```
window.INSTORE_CONFIG = {
  shouldCheckIn: false, // Allow delivery to home flow
}
```

## Múltiplas entregas

No cenário de __Entrega em casa__ é possível habilitar __Múltiplas entregas__ no inStore, ou seja, ao finalizar uma compra é possível definir diferentes tipos de entrega (econômica, normal,...) para cada produto do pedido.

Essa é uma funcionalidade nova que além de depender do __Checkout V6__, necessita de uma configuração interna, por isso, se deseja habilitá-la em uma loja entre em contato com a VTEX.
