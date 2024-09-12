---
title: 'Colocar um workspace em modo de produção'
id: 20rRlimYVKSsk6gwAaEceY
status: ARCHIVED
createdAt: 2018-02-22T01:36:37.169Z
updatedAt: 2020-03-13T21:24:57.591Z
publishedAt: 
firstPublishedAt: 2018-02-22T01:41:19.074Z
contentType: tutorial
productTeam: VTEX IO
author: authors_24
slug: colocar-um-workspace-em-modo-de-producao
locale: pt
legacySlug: colocar-um-workspace-em-modo-de-producao
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

Uma vez que o desenvolvedor esteja seguro de suas mudanças no código, ou seja, se sua app já foi [instalada](/pt/tutorial/instalar-a-app) e testada, ele pode colocar o workspace em __modo de produção__.

Isso significa que, a partir desse momento, esse workspace estará pronto para receber tráfego.

A principal diferença causada pelo modo de produção no comportamento do IO é a maneira de servir alguns arquivos estáticos. Por exemplo, o JavaScript é minificado para ganhar eficiência, mas nesse modo perde-se o hot module replacement.

Para isso, use o comando abaixo:

`vtex workspace production true`
