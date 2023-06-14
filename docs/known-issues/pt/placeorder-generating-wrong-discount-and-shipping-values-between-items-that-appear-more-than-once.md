---
title: PlaceOrder gerando desconto errado e valores de envio entre itens que aparecem mais de uma vez
id: 01ipdei4r6juYcXD3xFz4b
status: PUBLISHED
createdAt: 2023-01-12T19:13:16.232Z
updatedAt: 2023-02-13T20:27:56.279Z
publishedAt: 2023-02-13T20:27:56.279Z
firstPublishedAt: 2023-01-12T19:13:16.771Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: placeorder-gerando-desconto-errado-e-valores-de-envio-entre-itens-que-aparecem-mais-de-uma-vez
kiStatus: Backlog
internalReference: 732529
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando o pedido de criação do pedido declara o mesmo item mais de uma vez, exigido para declarar preços diferentes ou valores de desconto entre as múltiplas unidades do item, o serviço de checkout somará todas as quantidades em um único item e aplicará apenas as condições do primeiro item em todos eles. Isso gerará um preço/desconto total errado e até mesmo o envio.

Um exemplo rápido deste cenário é enquanto se aplica uma promoção "mais por menos" em um pedido de ordem externa, ou mesmo quando esta condição acontece no nível do mercado para um cenário de inventário Multilevel Omnichannel (MOI).


##

## Simulação



- Acessar uma conta no mercado que tenha vendedores regulares usando o relacionamento multinível (MOI)
- Adicione um produto que tenha uma promoção "mais por menos" e faça o pedido
- Verificar o preço total (descontos e envio) no vendedor

Esta é apenas uma maneira mais fácil de simular, mas você também pode usar a API Place Order


##

## Workaround


N/A




