---
title: 'Pedido não é cancelado totalmente '
id: 5rEjHAKKVHQWbgkTpEBreV
status: PUBLISHED
createdAt: 2021-09-15T15:03:40.366Z
updatedAt: 2022-12-22T20:41:09.335Z
publishedAt: 2022-12-22T20:41:09.335Z
firstPublishedAt: 2021-09-15T15:12:26.748Z
contentType: knownIssue
productTeam: Post-purchase
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: pedido-nao-e-cancelado-totalmente
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Quando um [pedido está incompleto, ](https://help.vtex.com/pt/tutorial/entendendo-os-pedidos-incompletos--tutorials_294)é esperado que o pedido seja cancelado pela plataforma e o fluxo do pedido não seja iniciado. Em alguns casos, porém, ocorre falha no cancelamento e o pedido não tem seu fluxo interrompido.

Assim, é possível que o pedido ainda fique disponível para o [seller](https://help.vtex.com/pt/tutorial/o-que-e-um-seller--5FkLvhZ3Few4CWWIuYOK2w), marketplace ou loja responsável por todo o processo de venda. Nesse caso, a reserva do item no estoque é mantida.

Também pode acontecer da transação de pagamento não ser cancelada e o pagamento não ser devolvido ao cliente.


## Simulação

Por causa da instabilidade, não é possível simular esse cenário.


## Workaround

É preciso cancelar o pedido manualmente. [Cancele o pedido via API](https://developers.vtex.com/vtex-rest-api/reference/orders#cancelorder).


