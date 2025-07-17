---
title: "O status da entrega não é atualizado em Meus pedidos"
id: 1AChJOd9t73SXZsyuGHqTB
status: PUBLISHED
createdAt: 2025-01-15T14:20:23.070Z
updatedAt: 2025-01-15T14:20:23.741Z
publishedAt: 2025-01-15T14:20:23.741Z
firstPublishedAt: 2025-01-15T14:20:23.741Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: o-status-da-entrega-nao-e-atualizado-em-meus-pedidos
locale: pt
kiStatus: Backlog
internalReference: 1163668
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O problema ocorre ao exibir o status de entrega em Meus pedidos, especialmente para pedidos com notas únicas que usam inferência de itens.
Essas notas não têm itens fisicamente listados, o que causa inconsistências na propriedade `isAllDelivered` e, como resultado, os pedidos entregues podem ser exibidos incorretamente, afetando a identificação precisa do status de entrega na listagem My Orders.

## Simulação



- Crie um pedido com itens normais.
- Gere uma única nota para o pedido sem associar itens diretamente.
- Certifique-se de que o valor total da nota seja consistente com o valor total do pedido.
- Marque a nota como "`Finished`".
Verifique a página My Orders: Na visualização detalhada `(/orders/{id})`, o status deve aparecer como `Delivered`.

Na lista de pedidos (/user/orders), o status é exibido incorretamente como `Order Dispatched`

## Workaround


Em My Orders (Meus pedidos), sempre que tiver dúvidas sobre o status da entrega, instrua os usuários a clicar no pedido para abrir a visualização detalhada. Isso garantirá que a regra de inferência seja aplicada corretamente, exibindo o status exato.





