---
title: "MasterData não carrega após autenticação"
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
slugEN: masterdata-nao-carrega-apos-autenticacao
locale: pt
kiStatus: Fixed
internalReference: 
---

## Sumário

Esse erro ocorre geralmente quando o usuário tenta acessar o CRM do MasterData diretamente, sem utilizar os links do admin.

Ao digitar a URL no navegador, o usuário esquece de digitar o `https://`.  Por motivos de segurança o MasterData não deixa o usário entrar mesmo após se autenticar com sucesso.

## Simulação

1. Acesse `{accountname}.vtexcrm.com.br`
2. Faça login
3. Erro

## Workaround

Felizmente isso pode ser resolvido adicionando `https://` na frente da URL, ficando assim: `https://{accountname}.vtexcrm.com.br`

