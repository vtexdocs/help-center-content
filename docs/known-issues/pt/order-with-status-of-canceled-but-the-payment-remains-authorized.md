---
title: 'Pedido com status de cancelado, mas o pagamento continua autorizado'
id: 19WmIjIbAQmJ19AOC4q56N
status: PUBLISHED
createdAt: 2022-05-11T12:49:23.081Z
updatedAt: 2024-06-28T17:45:57.362Z
publishedAt: 2024-06-28T17:45:57.362Z
firstPublishedAt: 2022-05-11T12:49:23.599Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: pedido-com-status-de-cancelado-mas-o-pagamento-continua-autorizado
locale: pt
kiStatus: Fixed
internalReference: 420019
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em alguns casos em que o pedido é incompleto ou cancelado quando há alguma falha de comunicação com o Gateway, o pagamento permanece autorizado e/ou aprovado, não entrando no fluxo de cancelamento e o valor pago não é reembolsado automaticamente. Além disso, e-mails transacionais podem ser enviados acidentalmente, o que também permite o pagamento de boletos bancários, pois a URL irá junto.

## Simulação


Não há como simular. Mas temos alguns casos em que isso aconteceu antes.



## Workaround


N/A

