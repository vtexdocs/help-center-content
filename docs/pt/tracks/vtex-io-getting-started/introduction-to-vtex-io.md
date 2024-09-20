---
title: 'Introdução ao VTEX IO'
id: 1LSy4Gkvo4saEQa2OMqC4q
status: ARCHIVED
createdAt: 2018-04-26T18:29:11.973Z
updatedAt: 2020-03-13T21:24:44.470Z
publishedAt: 
firstPublishedAt: 2018-04-26T20:34:35.807Z
contentType: trackArticle
productTeam: VTEX IO
slug: introducao-ao-vtex-io
locale: pt
trackId: 2qYWraccosS2ayg2kusaUo
trackSlugPT: vtex-io-getting-started
---

O __VTEX IO__ é a plataforma da VTEX para desenvolvimento de apps para a web. 

Nesta track, vamos ensinar passo a passo como desenvolver uma app utilizando o VTEX IO.

## Estrutura básica

Veja na imagem abaixo a estrutura de hierarquia do VTEX IO:

![VTEX IO Hierarchy](//images.ctfassets.net/alneenqid6w5/44SdYX37X2WKa6gicUKQWS/4b699f3355a2d9d70126354578d285cd/VTEX_IO_-_track_img.png)

- __Account__: Para desenvolver uma app, é necessário ter uma conta na VTEX.
- __Workspaces__: São os ambientes onde as apps serão desenvolvidas. Esses ambientes estão vinculados ao account. É possível ter diversos workspaces para um único account.
- __App__: é a aplicação propriamente dita. As apps são desenvolvidas dentro dos workspaces. É possível desenvolver diversas apps dentro de um único workspace.

## VTEX CLI

Para começar, instale a [CLI da VTEX](https://help.vtex.com/tutorial/toolbelt-do-vtex-io-definicao-de-conceito--sq7pQ21bqKa8QeQmmUKyG) usando o gerenciado de pacotes de sua preferência:

`npm i -g vtex`

ou

`yarn global add vtex`

Você pode rodar `vtex -v` para checar se a CLI foi instalada com êxito.

## Login

Você pode rodar `vtex login` ou `vtex login -a {accountName}` para fazer login na sua [conta](http://help.vtex.com/pt/faq/o-que-e-uma-conta-para-o-vtex-io) da VTEX.

Se você ainda não possui uma conta, entre em  http://www.vtex.com/partner/
