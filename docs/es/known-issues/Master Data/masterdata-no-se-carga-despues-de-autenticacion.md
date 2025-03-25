---
title: 'MasterData no se carga después de autenticación'
id: 1E22WpBMvzVHzGfWUsvjc0
status: PUBLISHED
createdAt: 2019-02-17T20:15:14.214Z
updatedAt: 2019-12-31T15:18:50.485Z
publishedAt: 2019-12-31T15:18:50.485Z
firstPublishedAt: 2019-02-17T20:18:39.928Z
contentType: knownIssue
productTeam: Master Data
author: 3aBBTLS9ZKO6IcY0Goe2y2
tag: Master Data
slugEN: masterdata-doesnt-load-after-successfully-authenticating
locale: es
kiStatus: Fixed
internalReference: 
---

## Sumario

Este error se produce generalmente cuando el usuario intenta acceder al CRM del MasterData directamente, sin utilizar los links del Admin.

Al escribir la URL en el navegador, el usuario olvida escribir el `https://`. Por motivos de seguridad el MasterData no deja el usuario entrar incluso después de autenticarse con éxito.

## Simulación

1. Acceda a `{accountname}.vtexcrm.com.br`
2. Haga login
3. Error

## Workaround

Afortunadamente esto se puede resolver añadiendo `https://` al inicio de la URL, quedando así: `https://{accountname}.vtexcrm.com.br`


