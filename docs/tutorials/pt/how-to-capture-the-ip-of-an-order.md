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
slug: como-obter-o-ip-de-um-pedido
legacySlug: como-obter-o-ip-de-um-pedido
subcategory: 3Gdgj9qfu8mO0c0S4Ukmsu
---

Para saber qual o IP de um cliente que realizou um pedido na sua loja, basta analisar a informação do pagamento para ter acesso a informação desse dado.

## Obter o IP manualmente

Ao abrir um pedido, clique em __"Ver detalhes da transação"__ na caixa de pagamento:

![ip pedido1 PT](//images.ctfassets.net/alneenqid6w5/6aXWqGSs9OSiaWaG4SYYcI/21acf3d8aa03a1d1133c776b85b76f09/ip_pedido1_PT.png)

O IP pode ser visualizado na parte superior direita:

![ip pedido2 PT](//images.ctfassets.net/alneenqid6w5/5GWGCRtMWIMM0OwW86MeWG/4e4097ce9a8c5acdc388efac9ef38b9c/ip_pedido2_PT.png)

Veja mais detalhes em: [Como visualizar detalhe do pedido](/pt/tutorial/como-visualizar-detalhes-do-pedido)

## Obter o IP por API

Para obter o IP por integração, é possível consultar a API Get Order mediante o orderID.

<div class="alert alert-info">
<a href="https://developers.vtex.com/reference/orders#getorder">Ver documentação da API OMS</a>
</div>

Uma vez obtido o JSON do pedido, é possível obter o `transactionId` e consultar a API **Get Transaction Details** mediante o ID da transação.

<div class="alert alert-info">
<a href="https://developers.vtex.com/reference/transaction-process#transactiondetails">Ver documentação da API Transaction</a>
</div>

Por fim, desta última chamada, será possível consultar o campo `ipAddress`.
