---
title: 'Error de encoding en Mail App de Apple'
id: 1ppf3Edw6gSikk0KY44gmS
status: PUBLISHED
createdAt: 2018-06-26T17:54:35.967Z
updatedAt: 2022-12-22T20:49:03.198Z
publishedAt: 2022-12-22T20:49:03.198Z
firstPublishedAt: 2018-06-26T18:12:03.953Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data,Message Center
slugEN: encoding-error-in-apple-mail-app
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

El Mail APP de Apple tiene un error en la codificación del asunto del correo electrónico cuando el mismo tiene un carácter especial. El asunto muestra =?UTF-8?Q?S en su inicio.

Apple Community link:
https://discussions.apple.com/thread/2811597?tstart=0

## Simulación

Montar un trigger de envío de correo electrónico que tenga carácter especial en el tema del e-mail.

Resultado:

![png](//images.ctfassets.net/alneenqid6w5/2O4zWlYa1WoaQ0sUMUKS2Q/2862790a2e5124fcb612a7f17774a339/png.png)

## Workaround

No utilice caracteres especiales en los temas de e-mails.


