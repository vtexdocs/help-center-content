---
title: 'Publicar uma app no registro da conta atual'
id: 4YZ1gbhtxmC4cYUmIaOs2Y
status: ARCHIVED
createdAt: 2018-02-22T01:46:04.405Z
updatedAt: 2020-03-13T21:25:00.136Z
publishedAt: 
firstPublishedAt: 2018-02-22T01:49:05.945Z
contentType: tutorial
productTeam: VTEX IO
author: authors_24
slugEN: publishing-an-app-to-the-current-accounts-registry
locale: pt
legacySlug: publicar-a-app-no-registro-da-conta-atual
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

Quando você estiver satisfeito com uma versão da sua app, é hora de publicá-la.

__Importante!__
- Você deve estar logado na conta em que deseja publicar a app
- Assegure-se que o `vendor` da sua app __é igual__ ao `account`
 
Para publicar a app no Registro da conta em que você está trabalhando, basta usar o comando a seguir:

`vtex publish`

Caso sua app __não__ possua `billingOptions`, ao publicá-la ela ficará visíel em `/admin/apps` e disponível para ser instalada apenas por usuários com acesso à conta na qual a app foi publicada.

Caso contrário, sua app estará disponível para instalação pela CLI independentemente do modelo de cobrança especificado.

[Clique aqui](http://help.vtex.com/pt/tutorial/modelos-de-cobranca-de-apps) para mais informações sobre `billingOptions` e modelos de cobrança.
