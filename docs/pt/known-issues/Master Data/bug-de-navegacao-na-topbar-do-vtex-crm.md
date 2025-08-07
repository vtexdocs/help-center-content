---
title: "Bug de navegacao na topbar do VTEX CRM"
id: svI7gnUQLuccauCkeyyoU
status: PUBLISHED
createdAt: 2019-01-11T16:10:39.024Z
updatedAt: 2022-12-22T20:48:47.993Z
publishedAt: 2022-12-22T20:48:47.993Z
firstPublishedAt: 2019-01-11T16:24:26.801Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slugEN: bug-de-navegacao-na-topbar-do-vtex-crm
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Esse bug acontece com accounts multi-lojas, ou accounts que mudaram o nome após a criacao do MasterData.

A navegação entre sub accounts na topbar as vezes produz um comportamento inesperado e leva o usuario à loja ao inves do CRM relevante.  Outras vezes leva o usuário a um CRM vazio.

Isso pode ser resolvido digitando manualmente o nome da subaccount na url.
Ex: https://www.{accountname}.vtexcrm.com.br



## Simulação

1.  Acesse o CRM VTEX normalmente da sua loja
2.  Selecione uma das opções de sub-account desejadas.

## Workaround

Ajuste a URL no navegador manualmente para refletir a subaccount desejada corretamente.
Ex:  https://www.{account}.vtex.com.br

É extremamente importante a presença do `https://`

