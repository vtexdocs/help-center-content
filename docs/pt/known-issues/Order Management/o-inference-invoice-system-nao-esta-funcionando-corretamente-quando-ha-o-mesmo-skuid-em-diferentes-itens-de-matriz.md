---
title: "O Inference Invoice System não está funcionando corretamente quando há o mesmo SKUid em diferentes itens de matriz"
id: 3fSQGwIPj0ekewMuaxPPEe
status: PUBLISHED
createdAt: 2024-03-28T19:00:12.852Z
updatedAt: 2024-04-04T13:33:04.775Z
publishedAt: 2024-04-04T13:33:04.775Z
firstPublishedAt: 2024-03-28T19:00:14.053Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: o-inference-invoice-system-nao-esta-funcionando-corretamente-quando-ha-o-mesmo-skuid-em-diferentes-itens-de-matriz
locale: pt
kiStatus: Backlog
internalReference: 1008459
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Alguns pedidos têm o mesmo SKUid em uma matriz separada de itens, o que acontece no momento da compra no checkout por diferentes motivos, como desconto a ser aplicado, por exemplo.
Isso não é um problema, mas uma condição para um cálculo de compra.

O problema está na fase da fatura para esses itens. Às vezes, o sistema de inferência não consegue fazer a correspondência correta dos itens a serem inseridos nos itens de referência no packageAttachment, devido ao mesmo SKUid e preços de venda.
Mesmo que o cliente envie a quantidade de itens corretamente, a inferência estará errada.

É possível ver a diferença no sistema SNO versus os itens do packageAttachment no pedido.

## Simulação


Crie um pedido com mais de uma quantidade de itens e aplique algum desconto, criando um pedido com mais de uma matriz de itens com preços de venda diferentes. Depois disso, tente faturar todos os itens do pedido.




## Workaround


Não há solução alternativa para isso.





