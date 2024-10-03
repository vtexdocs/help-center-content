---
title: 'Pedidos de artigos para presentes não são cancelados se o pagamento for recusado para o pedido normal do artigo'
id: 6Yr7bEseJceNQiY2sw7Vtx
status: PUBLISHED
createdAt: 2022-10-18T22:34:21.726Z
updatedAt: 2022-11-25T21:49:34.223Z
publishedAt: 2022-11-25T21:49:34.223Z
firstPublishedAt: 2022-10-18T22:34:22.273Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: orders-for-gift-items-arent-canceled-if-the-payment-is-refused-for-the-regular-items-order
locale: pt
kiStatus: Backlog
internalReference: 679598
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


As ordens são independentes quando não compartilham a mesma transação de pagamento. Pedidos criados para preencher apenas o item de presente através de um vendedor diferente dos outros itens de uma compra não têm nenhuma transação de pagamento porque são gratuitos.

Se o pagamento for recusado para as encomendas que contêm os itens regulares, não será cancelada a encomenda do item de presente, que seguirá seu próprio ciclo de vida, sendo aprovado para envio.



## Simulação


Terminar a compra em um carrinho onde o vendedor que preenche o item de presente é diferente do vendedor para o item normal. Isso irá gerar dois pedidos, como descrito anteriormente. O pagamento do primeiro item pode ser recusado ou cancelado, mas o pedido de presente não receberá este cancelamento.



## Workaround


N/A

