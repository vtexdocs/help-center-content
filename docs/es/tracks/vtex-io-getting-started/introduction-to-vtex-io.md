---
title: 'Introducción al VTEX IO'
id: 1LSy4Gkvo4saEQa2OMqC4q
status: ARCHIVED
createdAt: 2018-04-26T18:29:11.973Z
updatedAt: 2020-03-13T21:24:44.470Z
publishedAt: 
firstPublishedAt: 2018-04-26T20:34:35.807Z
contentType: trackArticle
productTeam: VTEX IO
slug: introduccion-al-vtex-io
locale: es
trackId: 2qYWraccosS2ayg2kusaUo
trackSlugES: vtex-io-getting-started
---

__VTEX IO__ es la plataforma de VTEX para el desarrollo de aplicaciones para web.

En esta track, vamos a enseñar paso a paso cómo desarrollar una aplicación utilizando VTEX IO.

## Estructura básica

En la siguiente imagen se muestra la estructura jerárquica del VTEX IO:

![VTEX IO Hierarchy](//images.ctfassets.net/alneenqid6w5/41yNT81ioog0yMeq0wMKM4/86005dd6b0cee4548e16133acfb8b6fe/VTEX_IO_Hierarchy.jpg)

- __Account__: para desarrollar una aplicación, es necesario tener una cuenta en VTEX.
- __Workspaces__: son los ambientes donde las aplicaciones serán desarrolladas. Estos ambientes están vinculados a la cuenta. Es posible que haya varios workspaces para una sola cuenta.
- __App__: es la aplicación propiamente dicha. Las aplicaciones se desarrollan dentro de los workspaces. Es posible desarrollar varias aplicaciones dentro de un solo workspace.

## VTEX CLI

Para empezar, instale la [CLI de VTEX](https://help.vtex.com/tutorial/toolbelt-del-vtex-io-definicion-de-concepto--sq7pQ21bqKa8QeQmmUKyG) usando el sistema de gestión de paquetes de su preferencia:

`npm i -g vtex`

o

`yarn global add vtex`

Usted puede utilizar el comando `vtex -v` para comprobar si la CLI se ha instalado correctamente.

## Login

Utilize el comando `vtex login` o `vtex login -a {accountName}` para entrar en su cuenta de VTEX.

Si todavía no tiene una cuenta, acceda a http://www.vtex.com/partner/
