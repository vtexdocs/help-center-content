---
title: 'Valores negativos em destinatários divididos'
id: 7j3wwcjbTt1LFBD3TM9Bus
status: PUBLISHED
createdAt: 2022-03-03T18:40:21.910Z
updatedAt: 2022-11-25T22:04:28.548Z
publishedAt: 2022-11-25T22:04:28.548Z
firstPublishedAt: 2022-03-03T18:40:22.178Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: negative-amounts-in-split-recipients
locale: pt
kiStatus: Backlog
internalReference: 388580
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Em um cenário de mercado com pagamento dividido quando o mercado não tem comissão sobre a transação, arredondar qualquer valor de referência (buyTotal ou totalSellers) pode resultar em um valor negativo para o mercado.


Estamos enviando um valor negativo para os destinatários na carga útil de **Enviando pedido de liquidação** para o conector.
então, recebemos a mensagem de uma má solicitação do conector, informando: **Valor de divisão inválido,** após algumas horas do envio da solicitação, recebemos a chamada de retorno, a transação segue o fluxo normal, até agora não experimentamos nenhum outro comportamento para a transação




## Simulação


Coloque dois SKU idênticos no carrinho que tenham descontos. Para calcular o valor do item individualmente, o sistema soma os descontos e depois os divide pelo total de itens, causando uma diferença entre o total de Vendedores e o total de Compras.



## Workaround


No momento, não temos uma solução.

