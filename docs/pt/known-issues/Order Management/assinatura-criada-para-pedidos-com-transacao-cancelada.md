---
title: 'Assinatura criada para pedidos com transação cancelada'
id: 3kDIxoThA1INR2JugY0NpO
status: PUBLISHED
createdAt: 2024-11-25T13:48:05.316Z
updatedAt: 2024-11-25T13:49:09.625Z
publishedAt: 2024-11-25T13:49:09.625Z
firstPublishedAt: 2024-11-25T13:48:06.281Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: subscription-created-for-orders-with-canceled-transaction
locale: pt
kiStatus: Backlog
internalReference: 1139745
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando fechamos uma ordem que contém um item para assinatura, o sistema que gera a assinatura é acionado para criar a assinatura sempre que a ordem recebe o aviso de que o pagamento foi efetuado, mas ainda pode acontecer de a transação dessa ordem ser cancelada posteriormente devido à análise do sistema antifraude, mas, mesmo antes de a transação ser criada, a assinatura já foi criada e está ativada, o que significa que será executada no próximo ciclo, mesmo que a ordem que a originou não tenha avançado.

## Simulação


Para simular esse cenário, você precisa

Criar um pedido cujo item tenha uma assinatura anexada

Fechar a compra com um cartão, mas, nesse ponto, você precisa garantir que a transação seja autorizada e, em seguida, enviada ao sistema antifraude;

No sistema antifraude, você deve negar a aprovação dessa transação.

Observe os detalhes do pedido no OMS e veja que a assinatura foi criada e está ativa, embora a transação do pedido e o pedido tenham sido cancelados.



## Workaround


N/A





