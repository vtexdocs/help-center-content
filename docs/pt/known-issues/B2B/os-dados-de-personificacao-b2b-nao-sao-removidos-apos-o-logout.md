---
title: 'Os dados de personificação B2B não são removidos após o logout'
id: bHYLV4reDQl4epmPbYwmJ
status: PUBLISHED
createdAt: 2024-07-18T21:56:41.780Z
updatedAt: 2024-07-18T21:56:42.802Z
publishedAt: 2024-07-18T21:56:42.802Z
firstPublishedAt: 2024-07-18T21:56:42.802Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: b2b-impersonated-data-is-not-removed-after-logging-out
locale: pt
kiStatus: Backlog
internalReference: 1067969
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O logout após a representação de um usuário no B2B Suite não remove as permissões de vitrine da sessão.

Isso permite que o usuário navegue no site e até mesmo faça pedidos se o usuário personificado tiver acesso ao checkout.

## Simulação



- Faça login com um usuário com funções de representação;
- Fazer-se passar por outro usuário;
- Fazer logout.



## Workaround


Clique em "Stop Impersonation" (Interromper personificação) para remover os dados personificados da sessão.




