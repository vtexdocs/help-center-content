---
title: 'Ação de reembolso registrada duas vezes'
id: sentkBZJsQ9X954iNEyXh
status: PUBLISHED
createdAt: 2024-09-16T20:29:22.928Z
updatedAt: 2024-09-16T20:29:23.892Z
publishedAt: 2024-09-16T20:29:23.892Z
firstPublishedAt: 2024-09-16T20:29:23.892Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: refund-action-logged-twice
locale: pt
kiStatus: Backlog
internalReference: 1099618
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Em alguns casos, duas ações de reembolso podem ocorrer na transação, mas nenhuma delas é enviada ao adquirente.

Quando uma solicitação de reembolso falha, não há nova tentativa, um `CreateTaskAsyncRequest` envia uma notificação por e-mail ao comerciante sobre o erro e um reembolso manual deve ser solicitado ao adquirente. Nesse caso, o reembolso é registrado com `type` = `email-notification`, um reembolso bem-sucedido seria `online`, ambos nunca devem ocorrer em um cenário normal.


    https://.vtexpayments.com.br/api/pvt/transactions//refunds


## Simulação


Não foi possível fazer a simulação

## Workaround


Não disponível, um reembolso manual deve ser realizado (comerciante + adquirente).




