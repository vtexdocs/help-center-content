---
title: 'Os carrinhos criados a partir da substituição de pedidos não recebem promoções corretamente'
id: 2ODIE9RNP7Q5LCglXsztzf
status: PUBLISHED
createdAt: 2023-10-20T17:47:40.494Z
updatedAt: 2023-10-20T17:47:41.099Z
publishedAt: 2023-10-20T17:47:41.099Z
firstPublishedAt: 2023-10-20T17:47:41.099Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: os-carrinhos-criados-a-partir-da-substituicao-de-pedidos-nao-recebem-promocoes-corretamente
locale: pt
kiStatus: Backlog
internalReference: 473424
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Os carrinhos criados a partir de pedidos existentes por meio da funcionalidade "substituir pedidos" apresentada na página "meus pedidos" estão restritos à promoção original, mas sem considerar que a mesma promoção pode se aplicar a diferentes contextos, como diferentes métodos de pagamento ou opções de envio.

## Simulação



- Tenha uma promoção para vários métodos de pagamento
- Feche o pedido pagando com "A", que deve ter um desconto
- Na tela Meus pedidos, escolha alterar o método de pagamento do pedido
- De volta ao carrinho, escolha pagar com "B"
- O desconto não será exibid

## Workaround


N/A




