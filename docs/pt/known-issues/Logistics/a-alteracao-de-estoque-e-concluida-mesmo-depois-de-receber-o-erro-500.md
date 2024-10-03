---
title: 'A alteração de estoque é concluída mesmo depois de receber o erro 500'
id: 3dlP8iOBiL2tfPRvjm2kUZ
status: PUBLISHED
createdAt: 2022-06-20T12:40:08.834Z
updatedAt: 2024-07-03T18:12:47.665Z
publishedAt: 2024-07-03T18:12:47.665Z
firstPublishedAt: 2022-06-20T12:40:09.126Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: stock-change-is-completed-even-after-receiving-error-500
locale: pt
kiStatus: No Fix
internalReference: 388176
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O cliente está tentando atualizar a quantidade de sku no inventário e a solicitação recebeu o erro 500. Apesar do erro, a quantidade em estoque é alterada.

## Simulação


Não foi possível reproduzir o erro.

Mas, na resposta, vemos o erro 500 e, no inventário, vemos o mesmo valor antes da atualização.




## Workaround


Não há solução alternativa. Mas é importante verificar se essa atualização ocorreu.

