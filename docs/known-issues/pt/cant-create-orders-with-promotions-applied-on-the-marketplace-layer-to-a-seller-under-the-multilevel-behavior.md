---
title: Não pode criar pedidos com promoções aplicadas na camada de mercado a um vendedor sob o comportamento multinível
id: 8X5ut0NZnHJJbsrZqRxps
status: PUBLISHED
createdAt: 2021-12-17T17:58:11.823Z
updatedAt: 2022-11-25T21:50:35.525Z
publishedAt: 2022-11-25T21:50:35.525Z
firstPublishedAt: 2021-12-17T18:12:45.235Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: nao-pode-criar-pedidos-com-promocoes-aplicadas-na-camada-de-mercado-a-um-vendedor-sob-o-comportamento-multinivel
kiStatus: Fixed
internalReference: 446938
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Não é possível concluir compras onde o mercado está aplicando promoções a itens de vendedores que estão sob comportamento multinível. O cliente verá uma mensagem de erro genérica.

Estes vendedores são definidos tendo seu "fulfillmentEndpoint" como "/api/checkout". Eles fazem uso deste fluxo para encaminhar o pedido para uma terceira camada, que é outro vendedor (whitelabel).

Afeta o fluxo de compra do carrinho/ordemFormulário e também a criação do pedido através do placeOrder API.



## Simulação


Para simular este cenário, você precisa fazê-lo:
- criar um carrinho usando algum SKU que tenha uma promoção aplicada a ele.
- certificar-se de que o mercado esteja sob alguma conta recursiva.

Esta ordem falhará, conforme relatado.



## Workaround


N/A

