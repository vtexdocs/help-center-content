---
title: "Rastreamento de pedido via JadLog retorna confirmação de entrega sem que o pedido tenha sido entregue"
id: 6tu2YbryI8gkiWiE0Ioe2g
status: PUBLISHED
createdAt: 2017-10-02T19:59:26.648Z
updatedAt: 2022-12-22T14:52:58.644Z
publishedAt: 2022-12-22T14:52:58.644Z
firstPublishedAt: 2017-10-02T20:37:26.997Z
contentType: knownIssue
productTeam: Post-purchase
author: 1nsS1IgG3WWQ4cA8e2qsw6
tag: Order Management
slugEN: rastreamento-pedido-jadlog-retorna-confirmacao-antes-da-entrega
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

O rastreamento de pedidos da JadLog está retornando à VTEX a confirmação da entrega sem que o pedido tenha sido chegado de fato. Ou seja, ao recebermos a informação de que a entrega foi feita e, automaticamente, enviamos aos clientes o e-mail de confirmação, ainda que o produto não esteja no endereço de entrega.

## Simulação

Após a conclusão do pedido os e-mails de rastreamento são enviados ao cliente. No entanto, com o erro da troca de informações, é possível notar que __os e-mails de confirmação de entrega são enviados ao mesmo tempo (ou até antes) que e-mails de envio de pedidos__.

Exemplo:

- 02/10 15:21:57 - Pedido é feito
- 02/10 15:22:02 - Pedido é pago e seu pagamento é aprovado
- 02/10 15:22:31 - E-mail de confirmação de entrega do pedido
- 02/10 15:22:54 - E-mail de confirmação de que o pedido foi enviado


## Workaround

Por enquanto, a melhor opção é inativar o rastreamento via JadLog.

