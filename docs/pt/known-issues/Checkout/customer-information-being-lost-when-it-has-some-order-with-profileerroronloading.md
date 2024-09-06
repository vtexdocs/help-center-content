---
title: "As informações do cliente estão sendo perdidas quando há algum pedido com 'profileErrorOnLoading'"
id: 7B0eutLBOCKOun4iwALVpq
status: PUBLISHED
createdAt: 2023-06-27T12:51:33.790Z
updatedAt: 2023-06-27T12:51:34.237Z
publishedAt: 2023-06-27T12:51:34.237Z
firstPublishedAt: 2023-06-27T12:51:34.237Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: as-informacoes-do-cliente-estao-sendo-perdidas-quando-ha-algum-pedido-com-profileerroronloading
locale: pt
kiStatus: Backlog
internalReference: 340036
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando o pedido tem "profileErrorOnLoading=true", o comportamento esperado é que o perfil do cliente, o endereço e o cartão de crédito não sejam salvos/atualizados no Profile System.

O problema é que o checkout ainda está fazendo algumas solicitações para registrar o e-mail do comprador, naturalmente, sem enviar outros campos como nome e telefone. Assim, se o cliente já estiver registrado na loja, esses campos são apagados e os dados do cliente são perdidos.

## Simulação


Não podemos simular o comportamento, pois o "profileErrorOnLoading" é apenas para exceções inesperadas.



## Workaround


N/A



