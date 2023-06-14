---
title: 'Bandeira de entrega em Meus Pedidos. Devido a um erro no preenchimento da Nota Fiscal.'
id: 14iGvVibb5ac4FNvEsmCAi
status: PUBLISHED
createdAt: 2022-03-21T19:58:25.489Z
updatedAt: 2022-11-25T22:02:01.896Z
publishedAt: 2022-11-25T22:02:01.896Z
firstPublishedAt: 2022-06-30T17:22:56.690Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: bandeira-de-entrega-em-meus-pedidos-devido-a-um-erro-no-preenchimento-da-nota-fiscal
kiStatus: Backlog
internalReference: 547053
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Se a fatura do pedido não tiver as informações corretas sobre a quantidade de itens e os Ids do SKU do pedido. Não será possível inserir a bandeira "Entregue" em "Meus Pedidos".




## Simulação



Para simular este comportamento, é possível fazer um pedido com apenas um Item.

Ao faturar o pedido, inserir a identificação de outro item na fatura e/ou inserir a quantidade de mais itens.

Após faturar o pedido, faça o "update tracking" e insira as informações de "isDelivered: true".

Teremos a informação do pedido "entregue" na IU, entretanto, em "Meus Pedidos" continuará com a informação de "Envio de Pedido".




## Workaround



Tome cuidado para não inserir mais itens na fatura e/ou itens com diferentes identificações de pedidos. Porque, nestes casos, o pedido não terá a bandeira "entregue" em Meus Pedidos.

