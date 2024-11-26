---
title: 'O link Alterar pedido no checkout/orderPlaced está direcionando para myAccount em vez da página do pedido'
id: 6bP44VBdFIujX072rY6wCA
status: PUBLISHED
createdAt: 2023-06-15T16:13:03.752Z
updatedAt: 2023-06-15T16:13:04.279Z
publishedAt: 2023-06-15T16:13:04.279Z
firstPublishedAt: 2023-06-15T16:13:04.279Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: change-order-link-on-checkoutorderplaced-is-leading-to-myaccount-instead-of-the-order-page
locale: pt
kiStatus: Backlog
internalReference: 844893
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando a conta tiver configurado a possibilidade de o comprador alterar o pedido por conta própria, o link de alteração de pedido aparecerá no modelo checkout/orderPlaced.

No entanto, esse link não está redirecionando o cliente para a página de edição, mas para a myAccount, que aparece vazia.


## Simulação


Configure o sinalizador Permitir que os clientes façam alterações nos pedidos em Admin -> configurações -> configurações de pedidos
 ![](https://vtexhelp.zendesk.com/attachments/token/GqrSJ7cBhZc844LR3kXH7WMlX/?name=image.png)

O comprador preenche um pedido e vai para o checkout/orderPlaced

Verifique se o link não o redirecionará para a área de edição do pedido

## Workaround



1. O comprador deve clicar em My Orders (Meus pedidos) na seção myAccount (Minha conta);
2. Selecionar novamente o pedido que deseja alterar;
3. Clique em change order (alterar pedido).






