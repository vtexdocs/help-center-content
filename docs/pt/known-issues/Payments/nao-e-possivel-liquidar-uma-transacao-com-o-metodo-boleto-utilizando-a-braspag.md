---
title: 'Não é possível liquidar uma transação com o método boleto utilizando a BrasPag'
id: 6bMohwJUByz5EX16Gn7CiR
status: PUBLISHED
createdAt: 2022-04-07T16:01:35.802Z
updatedAt: 2022-11-25T22:05:39.973Z
publishedAt: 2022-11-25T22:05:39.973Z
firstPublishedAt: 2022-04-07T16:01:36.581Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: it-is-not-possible-to-settle-a-transaction-with-the-boleto-method-using-braspag
locale: pt
kiStatus: Backlog
internalReference: 558065
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando a transação com o Boleto Bancário usando o conector BrasPag é aprovada, pagamento em autorizado e o API Liquidar a transação é chamado, ocorre um erro na captura devido ao status é como liquidar, o que não permite que a transação seja efetivamente capturada.


    Mensagem: O status de pagamento não está pronto para ser liquidado. Status atual de liquidação.




## Simulação


Para simular, é necessário que a transação seja aprovada, o que não é possível forçar.



## Workaround


Solicitar à equipe de engenharia que altere o status da transação para liquidar

