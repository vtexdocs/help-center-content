---
title: 'O primeiro ciclo de assinatura é ignorado'
id: 2VX6uoop56wK6jecAly40G
status: PUBLISHED
createdAt: 2024-02-05T14:10:40.701Z
updatedAt: 2024-02-05T14:10:41.599Z
publishedAt: 2024-02-05T14:10:41.599Z
firstPublishedAt: 2024-02-05T14:10:41.599Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: first-subscription-cycle-is-skipped
locale: pt
kiStatus: Backlog
internalReference: 528556
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O sistema de assinatura usa informações como a frequência de compra e a data do ciclo de assinatura para gerar um pedido de assinatura. No entanto, dependendo do fuso horário do consumidor e da hora em que o pedido é feito, o primeiro ciclo é ignorado e gerado somente no segundo mês.
Suponha que em 9 de maio, às 23h, um cliente tenha criado uma assinatura mensal e definido a data do ciclo de assinatura para o nono dia de cada mês, esperando que o primeiro pedido fosse feito em 9 de junho.
O sistema de gerenciamento de pedidos opera no fuso horário definido anteriormente na loja. Nesse caso, consideraremos GMT-5, horário de Chicago. No entanto, o sistema de assinatura opera no fuso horário GMT 0. Isso significa que, embora a assinatura tenha sido criada às 23h, o sistema de assinatura considera que ela foi criada 5 horas depois, portanto, em 10 de maio.
Nesse caso, o sistema leva em consideração a data de criação da assinatura, 10 de maio, para calcular o próximo ciclo de assinatura. Como a data do ciclo de assinatura em 9 de junho não atenderia à condição do período de 30 dias, totalizando 29 dias, o sistema define a próxima data de compra para julho. Portanto, o cliente acaba recebendo o produto após a data esperada.

## Simulação


Tenha uma SKU configurada para assinatura, com frequência mensal e dia de compra;
Fazer um pedido após as 23h, por exemplo
Verifique se o primeiro ciclo, que deveria ser gerado no mês seguinte, será ignorado, sendo gerado apenas no segundo mês.

## Workaround


n/a






