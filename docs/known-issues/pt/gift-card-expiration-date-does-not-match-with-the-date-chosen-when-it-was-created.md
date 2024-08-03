---
title: 'A data de vencimento do cartão-presente não coincide com a data escolhida quando ele foi criado'
id: 57GeuSubkdDkQNwzL3nmup
status: PUBLISHED
createdAt: 2022-03-27T14:08:35.577Z
updatedAt: 2024-07-01T18:48:00.399Z
publishedAt: 2024-07-01T18:48:00.399Z
firstPublishedAt: 2022-03-27T14:08:36.056Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: a-data-de-vencimento-do-cartaopresente-nao-coincide-com-a-data-escolhida-quando-ele-foi-criado
locale: pt
kiStatus: No Fix
internalReference: 378436
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Os clientes estão recebendo um erro ao tentarem pagar com Cartões-Presente quando a data da compra coincide com a data de expiração.



## Simulação


1. Criar um cartão presente que expira no dia seguinte em que você o cria.
2. Espere até que a UTC marque 0:00h. Por exemplo, no Chile, seria às 20:00h (UTC-4).



## Workaround


O cliente precisa criar o cartão presente usando a API https://developers.vtex.com/vtex-rest-api/reference/gift-card#creategiftcard-1 e depois escolhe manualmente a data e a hora.

