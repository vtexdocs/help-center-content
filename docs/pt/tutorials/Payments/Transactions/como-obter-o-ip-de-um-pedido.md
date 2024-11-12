---
title: 'Obter o IP de um pedido'
id: 3WSy36WlOEk8Oc6escGmEy
status: PUBLISHED
createdAt: 2019-01-24T20:45:49.278Z
updatedAt: 2021-09-21T16:38:08.036Z
publishedAt: 2021-09-21T16:38:08.036Z
firstPublishedAt: 2019-01-24T21:55:45.541Z
contentType: tutorial
productTeam: Post-purchase
author: authors_41
slugEN: how-to-capture-the-ip-of-an-order
locale: pt
legacySlug: como-obter-o-ip-de-um-pedido
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
---

Para saber qual o IP de um cliente que realizou um pedido na sua loja, basta analisar a informação do pagamento para ter acesso a informação desse dado.

## Obter o IP manualmente

Ao abrir um pedido, clique em __"Ver detalhes da transação"__ na caixa de pagamento:

![ip pedido1 PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

O IP pode ser visualizado na parte superior direita:

![ip pedido2 PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

Veja mais detalhes em: [Como visualizar detalhe do pedido](/pt/tutorial/como-visualizar-detalhes-do-pedido)

## Obter o IP por API

Para obter o IP por integração, é possível consultar a API Get Order mediante o orderID.

>ℹ️ [Ver documentação da API OMS](https://developers.vtex.com/reference/orders#getorder)

Uma vez obtido o JSON do pedido, é possível obter o `transactionId` e consultar a API **Get Transaction Details** mediante o ID da transação.

>ℹ️ [Ver documentação da API Transaction](https://developers.vtex.com/reference/transaction-process#transactiondetails)

Por fim, desta última chamada, será possível consultar o campo `ipAddress`.
