---
title: 'O aplicativo Webops não está totalmente integrado ao Headless CMS'
id: 577fIocKB9BYYCOkN9dZfW
status: PUBLISHED
createdAt: 2024-06-12T19:42:12.627Z
updatedAt: 2024-11-04T13:13:01.598Z
publishedAt: 2024-11-04T13:13:01.598Z
firstPublishedAt: 2024-06-12T19:42:13.699Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: webops-app-is-not-fully-integrated-with-headless-cms
locale: pt
kiStatus: Fixed
internalReference: 1048810
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O aplicativo `vtex.webops` não está totalmente integrado ao CMS headless, isso está relacionado aos repositórios do Github hospedados externamente e ao processo de publicação

## Simulação


Tente fazer uma atualização no CMS headless usando o aplicativo webops; isso falhará e não haverá um commit no repositório



## Workaround


A solução alternativa é criar manualmente um commit no repositório Git da sua loja para acionar a compilação da loja e aplicar as alterações feitas no CMS headless.




