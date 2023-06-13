---
title: Pedido com status de cancelado mas o pagamento continua autorizado
id: 19WmIjIbAQmJ19AOC4q56N
status: PUBLISHED
createdAt: 2022-05-11T12:49:23.081Z
updatedAt: 2022-11-25T21:51:23.997Z
publishedAt: 2022-11-25T21:51:23.997Z
firstPublishedAt: 2022-05-11T12:49:23.599Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: pedido-com-status-de-cancelado-mas-o-pagamento-continua-autorizado
kiStatus: Backlog
internalReference: 420019
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em alguns casos em que o pedido é incompleto ou cancelado quando há qualquer falha de comunicação com o Gateway, o pagamento permanece autorizado e/ou aprovado, não entrando no fluxo de cancelamento e o valor pago não é automaticamente reembolsado. Além disso, e-mails transacionais podem ser enviados acidentalmente, o que também permite o pagamento de boletos bancários, uma vez que a URL irá com ele.



## Simulação


Não há como simular. Mas temos alguns casos em que isto já aconteceu antes.



## Workaround


N/A

