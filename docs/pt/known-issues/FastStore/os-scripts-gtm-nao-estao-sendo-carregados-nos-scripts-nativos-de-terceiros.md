---
title: 'Os scripts GTM não estão sendo carregados nos scripts nativos de terceiros'
id: 4hTYThw8092OCHhUIvpCAa
status: PUBLISHED
createdAt: 2024-08-23T12:16:07.174Z
updatedAt: 2024-09-30T17:11:12.255Z
publishedAt: 2024-09-30T17:11:12.255Z
firstPublishedAt: 2024-08-23T12:16:08.213Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: gtm-scripts-are-not-loading-on-the-native-thirdparty-scripts
locale: pt
kiStatus: Backlog
internalReference: 1086165
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


As lojas que estão usando o Faststore v2 (repositórios que começam em `starter.store` e usam o aplicativo `admin-faststore`) e V3 (repositórios que começam em `starter.store` e usam o aplicativo `vtex.webops`) não estão carregando o script GTM ao usar os scripts nativos de terceiros. Isso está relacionado ao Partytown.

## Simulação


Se a sua loja estiver usando o Faststore V2 ou V3, tente adicionar o script GTM seguindo [esta documentação] (https://developers.vtex.com/docs/guides/faststore/project-structure-handling-third-party-scripts). Os eventos não serão enviados corretamente

## Workaround


O cliente pode carregar o script usando um componente personalizado em vez do nativo sem o Partytown. Ele seria uma substituição do nosso componente nativo.





