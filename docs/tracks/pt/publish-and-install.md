---
title: 'Publicar e instalar'
id: 4q2yXHthMsey0iEuMUuCGi
status: DRAFT
createdAt: 2018-04-26T19:31:45.275Z
updatedAt: 2020-03-13T21:24:44.370Z
publishedAt: 
firstPublishedAt: 2018-05-03T20:34:34.311Z
contentType: trackArticle
productTeam: VTEX IO
slug: publicar-e-instalar
trackId: 2qYWraccosS2ayg2kusaUo
trackSlugPT: vtex-io-getting-started
---

Se você deseja que sua app fique disponível em produção, __linká-la não é suficiente__. Para isso, a app precisa estar __instalada no workspace master__. Mas não é possível instalar uma app que só existe no seu ambiente local.
Quando você [publica](/pt/faq/o-que-significa-publicar-uma-app) uma app, você está deixando a app disponível para ser [instalada](/pt/faq/o-que-significa-instalar-uma-app) por outras pessoas, incluindo você.

## Publicar

Para publicar uma app no Registro da account na qual você está trabalhando, basta executar o comando:

`vtex publish`

## Instalar

Como você publicou sua app sem [Modelo de Cobrança](/pt/tutorial/modelos-de-cobranca-de-apps), apenas sua conta pode instalá-la. Para isso, rode:

`vtex install` se você já está na pasta da app

or

`vtex install {vendor}.{appName}` caso contrário.
