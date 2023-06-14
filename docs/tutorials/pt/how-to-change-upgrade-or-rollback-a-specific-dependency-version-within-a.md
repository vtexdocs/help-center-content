---
title: 'Como mudar a versão (upgrade ou rollback) de uma dependência dentro de um workspace'
id: 3GxKR5gWesEOmUkOW864sg
status: DRAFT
createdAt: 2019-01-14T11:58:42.128Z
updatedAt: 2020-03-13T21:24:57.600Z
publishedAt: 
firstPublishedAt: 2019-01-14T12:19:43.139Z
contentType: tutorial
productTeam: VTEX IO
author: TnXcuQydAAOuwWACo864E
slug: como-mudar-a-versao-upgrade-ou-rollback-de-uma-dependencia-dentro-de-um
locale: pt
legacySlug: como-mudar-a-versao-upgrade-ou-rollback-de-uma-dependencia-dentro-de-um
subcategory: Z46a6rHVAaAucoiW0skQQ
---

Durante o desenvolvimento da sua app, possivelmente surgirá a necessidade de forçar a atualização de uma dependência especifica, ou realizar um rollback para uma versão anterior.

Para obter uma lista de todas as dependências e suas respectivas versões em um workspace, execute o seguinte comando:

`vtex deps ls -k`

Para mudar a versão, execute o seguinte comando:
`vtex deps update vtex.{NomeDaDependencia}@<version>`

o comando ficaria assim por exemplo:
`vtex deps update vtex.styleguide@7.6.7`
