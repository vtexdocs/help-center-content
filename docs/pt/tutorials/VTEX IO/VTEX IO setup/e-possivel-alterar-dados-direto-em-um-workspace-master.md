---
title: 'É possível alterar dados direto em um workspace master?'
id: 4T7uB5tv9m8ciAEcK8WCEg
status: ARCHIVED
createdAt: 2017-11-21T19:36:56.054Z
updatedAt: 2020-03-13T21:24:57.344Z
publishedAt: 
firstPublishedAt: 2019-05-16T17:47:39.017Z
contentType: tutorial
productTeam: VTEX IO
author: authors_24
slugEN: is-it-possible-to-change-data-directly-in-a-master-workspace
locale: pt
legacySlug: e-possivel-alterar-dados-direto-em-um-workspace-master
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

__Não é possível fazer alterações em master__. Um workspace master está em produção, ou seja, corresponde à versão que está disponível para o usuário final. 

Para fazer qualquer alteração, trabalhe o novo código em outro workspace, mude o status desse workspace para `production true` e, por fim, promova-o.
