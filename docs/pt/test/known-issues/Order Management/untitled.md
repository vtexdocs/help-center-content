---
title: 'Untitled'
id: 23f5tQp4aND2R6CSU9P1S6
status: CHANGED
createdAt: 2023-11-07T19:59:34.320Z
updatedAt: 2023-11-09T20:45:57.445Z
publishedAt: 2023-11-07T20:04:35.252Z
firstPublishedAt: 2023-11-07T19:59:35.068Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: untitled
locale: pt
kiStatus: Fixed
internalReference: 631970
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Atualmente, o SNO (Shipping Notification Order) aceita receber um número de fatura com um "espaço" (caractere especial) no final, por exemplo: "123456", mas ao receber o número da fatura dessa forma, alguns fluxos executados após a compra, como rastreamento de atualização, sistema de cartão-presente que usam esses dados falham porque o sistema não pode usar os dados corretamente.

## Simulação


1- Fatura um pedido, inserindo o seguinte exemplo de número de fatura: "**123456**"; (espaço no final do número)
2- Tente inserir uma atualização de rastreamento, de acordo com a API Update order tracking status: https://developers.vtex.com/vtex-rest-api/reference/updatetrackingstatus
2.1- Informar o número da fatura **sem** o "espaço", por exemplo: "**123456**", teremos o seguinte erro: "message": "**Invoice Not Found**"
2.2- Informando o número da fatura **com** o "espaço", por exemplo: "123456 " (espaço no final do número), teremos o seguinte erro: "**500 Internal Server Error**

## Workaround


Para esses casos, a solução alternativa seria não usar o "espaço" no final do número da fatura.





