---
title: 'É possível alterar dados no workspace master?'
id: 5sDRHWvEcgaCOkYU24QAU6
status: ARCHIVED
createdAt: 2018-02-22T02:12:27.733Z
updatedAt: 2020-03-06T13:56:18.388Z
publishedAt: 
firstPublishedAt: 2018-02-22T02:14:13.962Z
contentType: frequentlyAskedQuestion
productTeam: VTEX IO
author: authors_24
slugEN: is-it-possible-to-change-data-in-a-master-workspace
locale: pt
legacySlug: e-possivel-alterar-dados-no-workspace-master
---

__Não__. Um workspace master está em produção, ou seja, corresponde à versão que está disponível para o usuário final. 

O status de um workspace que se encontra em master é `production true`.

Não é possível fazer alterações nesse workspace.

Em vez disso, trabalhe o novo código em outro workspace, depois mude o status desse workspace para `production true` e, por fim, promova-o.

>⚠️ Não é possível fazer alterações em master.
