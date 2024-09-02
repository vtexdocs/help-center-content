---
title: 'O aplicativo Webops não está totalmente integrado ao Headless CMS'
id: 577fIocKB9BYYCOkN9dZfW
status: PUBLISHED
createdAt: 2024-06-12T19:42:12.627Z
updatedAt: 2024-06-27T17:35:21.924Z
publishedAt: 2024-06-27T17:35:21.924Z
firstPublishedAt: 2024-06-12T19:42:13.699Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slug: o-aplicativo-webops-nao-esta-totalmente-integrado-ao-headless-cms
locale: pt
kiStatus: Backlog
internalReference: 1048810
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O aplicativo `vtex.webops` não está totalmente integrado ao CMS headless, isso está relacionado aos repositórios do Github hospedados externamente e ao processo de publicação

## Simulação


Tente fazer uma atualização no CMS headless usando o aplicativo webops; isso falhará e não haverá um commit no repositório



## Workaround


A solução alternativa é criar manualmente um commit no repositório Git da sua loja para acionar a compilação da loja e aplicar as alterações feitas no CMS headless.




