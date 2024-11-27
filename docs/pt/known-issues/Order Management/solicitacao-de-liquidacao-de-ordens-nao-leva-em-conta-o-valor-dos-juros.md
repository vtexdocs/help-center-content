---
title: 'Solicitação de liquidação de ordens não leva em conta o valor dos juros'
id: 149FG86c1f7sok1NJ7PWAQ
status: PUBLISHED
createdAt: 2024-11-05T17:51:29.058Z
updatedAt: 2024-11-05T17:51:29.841Z
publishedAt: 2024-11-05T17:51:29.841Z
firstPublishedAt: 2024-11-05T17:51:29.841Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: request-for-settlement-of-orders-does-not-account-for-the-value-of-interest
locale: pt
kiStatus: Backlog
internalReference: 1130035
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando uma ordem tem juros aplicados, o valor total da transação acaba sendo maior do que o valor original da ordem. Entretanto, durante o processo de envio da solicitação de liquidação do sistema de pedidos para o gateway de pagamento, o sistema envia apenas o valor do pedido, sem levar em conta os juros, o que resulta em uma solicitação de liquidação com um valor inferior ao valor total da transação, o que pode impedir que a transação seja completamente capturada.
Em alguns casos, a transação pode permanecer no status "Capturando" indefinidamente.

## Simulação


Crie um pedido usando um método de pagamento que tenha o cálculo de juros configurado.

Depois de finalizar a compra, siga o fluxo normal de processamento de pedidos e envie a fatura com o valor total do pedido, incluindo os juros.

Nos detalhes da transação no gateway, você verá que a solicitação de captura será enviada com o valor do pedido, sem contabilizar os juros

## Workaround


Para evitar novos casos:
O comerciante pode ativar a captura automática em conectores que aceitam juros. Dessa forma, a captura será realizada diretamente no conector, usando o valor total da transação, incluindo os juros, e eliminando a dependência do valor enviado pelo sistema de pedidos.

Para ajustar as ordens que já estão no status "Liquidação":
Para ordens que já estão no status "Liquidação" e que estão aguardando a atualização do valor com juros, a solução é chamar explicitamente as APIs de liquidação da área de pagamentos para ajustar o valor da transação.






