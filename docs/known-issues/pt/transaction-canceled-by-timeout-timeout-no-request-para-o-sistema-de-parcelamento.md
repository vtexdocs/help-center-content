---
title: 'Transação cancelada por tempo limite: "Timeout sem pedido para o Sistema de Parcelamento".'
id: 68L2ka1QJ3yEHTsId1arF7
status: PUBLISHED
createdAt: 2022-03-02T12:15:17.495Z
updatedAt: 2022-11-25T22:05:34.933Z
publishedAt: 2022-11-25T22:05:34.933Z
firstPublishedAt: 2022-03-02T12:15:18.179Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: transacao-cancelada-por-tempo-limite-timeout-sem-pedido-para-o-sistema-de-parcelamento
locale: pt
kiStatus: Backlog
internalReference: 533844
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Transação cancelada por timeout, verificando os logs em Splunk você pode ver a seguinte mensagem:

    exception_type=Vtex.Commerce.Checkout.Exceptions.CheckoutException exception_message="Timeout no request for o Sistema de Parcelamento" account_id="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" message="Timeout no request for o Sistema de Parcelamento".


Nos registros de transações, você pode ver a seguinte mensagem:

    Uma solicitação externa chamada para cancelar esta transação Id = xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx com Valor xxxxxx SolicitaçãoId = xxxx-xx-xx-xxTxx:xx:xx-xxxxxx. Prioridade: padrão. Autor: vtexappkey-appvtex.




## Simulação


Não é possível simular.



## Workaround


Não há solução, a transação é imediatamente cancelada quando isto acontece.

