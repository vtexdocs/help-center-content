---
title: 'Cancelar pedido'
id: tutorials_186
status: PUBLISHED
createdAt: 2017-04-27T22:15:47.296Z
updatedAt: 2024-04-01T17:34:46.564Z
publishedAt: 2024-04-01T17:34:46.564Z
firstPublishedAt: 2017-04-27T23:00:46.851Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: como-cancelar-pedido
locale: pt
legacySlug: como-cancelar-pedido
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

O cancelamento de pedido na VTEX pode ser realizado em praticamente qualquer status de sua evolução. Cabe destacar que uma vez cancelado, não é possível alterar o status do pedido.

>⚠️ Não é possível cancelar pedidos que já tenham sido [faturados parcialmente](https://help.vtex.com/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe). Caso o cliente deseje substituir ou remover itens do pedido, é possível [alterar o pedido](https://help.vtex.com/pt/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190).

Há duas formas de fazer esta ação, pelo Admin VTEX e por API.

## Cancelamento pelo módulo Pedidos

1. No Admin VTEX, acesse **Pedidos > Todos os pedidos**, ou digite *Todos os pedidos* na barra de busca no topo da página.  
2. Em **Todos os pedidos**, acesse o pedido desejado.
3. No topo da página, clique em `Cancelar pedido`.
4. Preencha os campos apresentados.
5. Clique em `Confirmar`.

Quando o pedido está nos status **Pronto para Manuseio** ou **Preparando Entrega**, é preciso que o cancelamento seja feito duas vezes. Ao clicar pela primeira vez em "Cancelar", o status é alterado para **Cancelamento Solicitado**.
Quando o pedido já se encontra no status **Cancelamento solicitado**, basta clicar novamente em **Cancelar** para que o pedido será alterado para **Cancelado**. Para continuar com esse pedido, basta inserir a nota fiscal.

Não é possível alterar um pedido quando o mesmo já está no status `Faturado`.

## Cancelamento pelo ERP

O cancelamento de pedido por meio do ERP pode ser realizado pela nossa API REST, conforme nosso [guia de integração de ERPs](https://developers.vtex.com/docs/erp-integration-set-up-order-processing), usando o endpoint [Cancel order](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/cancel). 

## Cancelamento solicitado pelo cliente

Quando o cliente é quem solicita o cancelamento do pedido, o fluxo é diferente. Leia [este artigo](https://help.vtex.com/pt/tutorial/como-funciona-o-cancelamento-de-pedido-por-parte-do-cliente--3wEI6DUNtecooG2Ki4Akqo) para entender como funciona o cancelamento neste caso.
