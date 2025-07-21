---
title: "Tag canónica incorrecta en páginas HTTPS"
id: 45d21Kz3hYsie6MaO24ioC
status: PUBLISHED
createdAt: 2018-01-24T14:54:21.165Z
updatedAt: 2022-12-22T20:46:22.053Z
publishedAt: 2022-12-22T20:46:22.053Z
firstPublishedAt: 2018-01-24T15:12:46.679Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: tag-canonica-incorrecta-en-paginas-https
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Al activar el HTTPS en una carpeta específica, la tag HTML _canonical_ permanece representando un link a la página en HTTP, mientras debería seguir el protocolo de la página en cuestión (que se cambió a HTTPS).

## Simulación

1. Activar HTTPS en una sola carpeta del sitio ([guía](https://help.vtex.com/tutorial/--frequentlyAskedQuestions_4378));
2. Comprobar, en el HTML renderizado, la tag _canonical_.

![image](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Marketing%20&%20Merchandising/tag-canonica-incorrecta-en-paginas-https_1.png)

## Workaround

Este comportamiento sólo se produce cuando las carpetas específicas tienen el HTTPS activo.

Al activar el HTTPS **en todo el sitio** ([guía](http://help.vtex.com/es/tutorial/--1igIyCv5IiGWGIekqYYI02)) las tags _canonical_ son correctas, haciendo el link en HTTPS.

