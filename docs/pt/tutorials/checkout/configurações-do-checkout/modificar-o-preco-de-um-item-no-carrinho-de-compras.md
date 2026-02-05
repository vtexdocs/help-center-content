---
title: 'Modificar o preço de um item no carrinho de compras'
id: 7Cd37aCAmtL1qmoZJJvjNf
status: PUBLISHED
createdAt: 2022-05-23T18:57:04.527Z
updatedAt: 2022-10-27T12:21:17.571Z
publishedAt: 2022-10-27T12:21:17.571Z
firstPublishedAt: 2022-05-23T22:23:55.815Z
contentType: tutorial
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: change-the-price-of-an-item-in-the-shopping-cart
legacySlug: modificar-o-preco-de-um-item-no-carrinho-de-compras
locale: pt
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

Na VTEX, as lojas podem definir manualmente o preço de um item (SKU) disponível no carrinho do Checkout. Esse recurso é chamado **Manual Price** (Preço Manual) e pode ser executado somente por pessoas que possuam os seguintes perfis de acesso e permissão cadastrados no Admin VTEX:

- **Perfil de acesso**: Owner (Admin Super) ou Call Center Operator (Telesales) 

- **Permissão**: Shopping Cart Full Access

> ⚠️ Os passos abaixo indicados devem ser realizados no domínio *myvtex* de cada loja ({accountName}.myvtex.com.br).

## Modificando o preço do item

Após [habilitar a funcionalidade](https://developers.vtex.com/vtex-rest-api/docs/enable-the-manual-price) em sua loja, o preço de um produto já pode ser configurado manualmente no carrinho. Siga os passos abaixo indicados:

1. No carrinho, selecione o produto desejado.
2. Clique duas vezes sobre o valor do preço exibido.
3. Modifique o preço para o valor desejado e aperte `ENTER`.
4. Clique em `Fechar pedido`.

![manualprice](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/configurações-do-checkout/modificar-o-preco-de-um-item-no-carrinho-de-compras_1.gif)

Além da configuração na tela do Checkout, o preço de um produto também pode ser modificado por meio da API [Change Price](https://developers.vtex.com/vtex-rest-api/reference/pricechange), saiba mais em [Setting the price of an item manually](https://developers.vtex.com/vtex-rest-api/docs/enable-the-manual-price#setting-the-price-of-an-item-manually).

## Controle de modificações

A segurança operacional desta funcionalidade está baseada no controle do acesso de pessoas que possuam perfis específicos (mencionados anteriormente), sem os quais não se pode modificar manualmente o preço de um item. Além disto, todas as modificações de preço realizadas são registradas e rastreáveis. Saiba mais em [Recording manual changes to item prices](https://developers.vtex.com/vtex-rest-api/docs/enable-the-manual-price#recording-manual-changes-to-item-prices).

Assim que o pedido é fechado, o preço manual inserido precisa ser aprovado pelo administrador da loja ou por um usuário com permissão no sistema de[Autorização de Pedidos](/pt/docs/tutorials/como-funciona-a-autorizacao-de-pedidos). 

> ℹ️ Uma vez validado o valor do preço manual, o pedido segue o fluxo normal de faturamento.

