---
title: 'Acceder a una aplicación'
id: 3ZTGx0IWsokiE2W6S2Ww6O
status: ARCHIVED
createdAt: 2018-02-22T02:04:08.027Z
updatedAt: 2020-03-13T21:24:58.133Z
publishedAt: 
firstPublishedAt: 2018-02-22T02:05:44.120Z
contentType: tutorial
productTeam: VTEX IO
author: authors_24
slug: acceder-a-una-aplicacion
locale: es
legacySlug: acessar-a-app
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

Después de que una aplicación se instala en un workspace determinado, pasa a ser accesible por ese workspace (y sólo por él).

Usted puede acceder a ella directamente por dos URLs diferentes: la __URL canónica__ y la __ruta pública__.

### URL canónica

La URL canónica puede acceder a cualquier ruta a la que la aplicación responda, aunque usted no declare ninguna ruta pública con ese nombre.

Toda URL canónica requiere permiso de acceso.

El formato de la URL canónica es el siguiente:

`{app-name}`.`{vendor}`.vtex.io/`{account}`/`{workspace}`/*

- `{app-name}`: el nombre de su aplicación.
- `{vendor}`: firma del responsable del desarrollo de la aplicación.
- `{account}`: la cuenta de la tienda.
- `{workspace}`: el workspace en el que usted está trabajando.
- El asterisco (\*) debe ser reemplazado por cualquier ruta conocida por la aplicación.

### Ruta pública

A diferencia de las URLs canónicas, las rutas públicas deben declararse explícitamente.

Además, no tienen ningún control de acceso.

La ruta pública tiene el siguiente formato:

`{workspace}`--`{account}`.myvtex.com/*

- `{workspace}`: el workspace en el que usted está trabajando.
- `{account}`: la cuenta de la tienda.
