---
title: 'Ao selecionar pickups não destacados na lista de pickups no carrinho, a UI faz solicitação incorreta ao API'
id: 42NRIpmVxU7XgOMGHlO6zI
status: PUBLISHED
createdAt: 2022-02-22T18:21:47.541Z
updatedAt: 2022-11-25T21:49:25.969Z
publishedAt: 2022-11-25T21:49:25.969Z
firstPublishedAt: 2022-02-22T18:21:48.067Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: when-selecting-pickup-not-highlighted-in-the-list-of-pickups-in-the-cart-ui-makes-incorrect-request-to-api
locale: pt
kiStatus: Fixed
internalReference: 529850
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando você seleciona uma opção de pickup que não está destacada, a IU faz uma solicitação incorreta à API, e com isso, a solicitação recebe um erro e não atualiza os dados desta pickup selecionada.

Nota: isto acontece somente no carrinho; no checkout, os pedidos estão bem.



## Simulação


Utilize uma loja que tenha muitas opções de pickup (você precisa selecionar uma que não esteja destacada); no carrinho, escolha esta e veja que o pedido será `api/checkout/pub/orderForms/simulation?sc=undefined&rnbBehavior=0` recebendo uma mensagem de erro com `Message': "Ocorreu um erro" ``.

##


## Workaround


N/A

