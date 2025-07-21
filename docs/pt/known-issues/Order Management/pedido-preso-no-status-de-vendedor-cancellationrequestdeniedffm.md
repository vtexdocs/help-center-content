---
title: "Pedido preso no status de vendedor cancellation-request-denied-ffm"
id: 5hBeTQMKmo5C63QRAOSvT2
status: PUBLISHED
createdAt: 2024-03-22T17:50:37.946Z
updatedAt: 2024-03-22T17:50:38.822Z
publishedAt: 2024-03-22T17:50:38.822Z
firstPublishedAt: 2024-03-22T17:50:38.822Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: pedido-preso-no-status-de-vendedor-cancellationrequestdeniedffm
locale: pt
kiStatus: Backlog
internalReference: 1004978
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Identificamos que alguns vendedores, na estrutura do vendedor e do marketplace da VTEX, ao solicitarem o cancelamento, recusam esse cancelamento por meio da interface do usuário ou chamam a API "cancellation-request-denied-ffm", como se estivessem negando a própria solicitação de cancelamento, por algum motivo, a solicitação para negar o cancelamento se sobrepõe à solicitação de cancelamento.
Como resultado, o pedido fica preso no vendedor, no status "cancellation-request-denied-ffm".
E, em alguns casos, o próprio marketplace tenta solicitar o cancelamento e, como resultado, o marketplace também fica preso no status "request cancellation".
Por outro lado, temos o caso em que o marketplace não recebe essa notificação de cancelamento e continua com seu pedido até o status Invoiced!
Em todos os casos, não podemos alterar o status desses pedidos.

## Simulação


1- Crie um pedido, com o vendedor whiteLabel;
2- No pedido do vendedor, avançar o status para "handling";
3- Ainda no vendedor, solicitar o cancelamento do pedido;
4- Na solicitação do vendedor, teremos a mensagem, "accept or refuse cancellation", clique na opção refuse no vendedor ou utilize a API, você verá que a solicitação do vendedor irá para o status "cancellation-request-denied-ffm".
5- No pedido do Marketplace, clique em cancelar;
6- O pedido do Marketplace ficará preso em "Request-Cancel";

Pode acontecer que o pedido do Marketplace continue com o pedido e vá para a fatura, quando ele envia a fatura.



## Workaround


Esta não é uma solução alternativa, mas uma orientação para as contas, uma vez que o vendedor solicite o cancelamento, não recuse a solicitação em si.






