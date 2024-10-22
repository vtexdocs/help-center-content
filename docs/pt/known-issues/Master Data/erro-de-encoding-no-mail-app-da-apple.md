---
title: 'Erro de encoding no Mail App da Apple'
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
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

O Mail APP da Apple tem um bug no encoding do assunto do e-mail quando o mesmo possui um caracter especial. O assunto apresenta =?UTF-8?Q?S em seu início.

Apple community link:
https://discussions.apple.com/thread/2811597?tstart=0

## Simulação

Montar um trigger de envio de e-mail que possua caracter especial no "Assunto" do e-mail.

Resultado:

![png](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Master Data/erro-de-encoding-no-mail-app-da-apple_1.png)

## Workaround

Não utilizar caracteres especiais nos assuntos dos e-mails.

