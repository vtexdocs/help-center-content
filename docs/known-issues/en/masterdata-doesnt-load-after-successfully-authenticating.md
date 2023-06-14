---
title: 'MasterData doesn't load after successfully authenticating'
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
slug: masterdata-doesnt-load-after-successfully-authenticating
kiStatus: Fixed
internalReference: 
---

## Summary

Esse erro ocorre geralmente quando o usuário tenta acessar o CRM do MasterData diretamente, sem utilizar os links do admin.

Ao digitar a URL no navegador, o usuário esquece de digitar o `https://`.  Por motivos de segurança o MasterData não deixa o usário entrar mesmo após se autenticar com sucesso.

## Simulation

1. Visit {accountname}.vtexcrm.com.br
2. Authenticate
3. See error

## Workaround

Fortunately this can be solved by typing `https://` in front of the URL. For example: `https://{accountname}.vtexcrm.com.br`

