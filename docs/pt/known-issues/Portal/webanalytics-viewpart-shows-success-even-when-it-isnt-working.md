---
title: 'Webanalytics Viewpart Mostra o sucesso mesmo quando não está funcionando'
id: 73oMf2Wxkgw1feWUvntX6s
status: PUBLISHED
createdAt: 2023-03-09T18:20:47.358Z
updatedAt: 2024-07-01T18:48:55.053Z
publishedAt: 2024-07-01T18:48:55.053Z
firstPublishedAt: 2023-03-09T18:20:48.023Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: webanalytics-viewpart-mostra-o-sucesso-mesmo-quando-nao-esta-funcionando
locale: pt
kiStatus: No Fix
internalReference: 768059
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Atualmente, a parte de visualização da webanalytics não apresenta nenhuma mensagem de erro, mesmo quando falha e não entrega o conteúdo dos metadados ao usuário.

Esta questão também pode ocultar possíveis problemas relacionados a um número incorreto de eventos PageView na navegação das páginas VTEX legadas


##

## Simulação


Esta questão é bastante difícil de replicar, uma vez que não há feedback de erros.

A view source tem uma série de tags que podem carregar metatada se o usuário tiver implementado sua view-source GTM:https://account.myvtex.com/

Entretanto, mesmo quando as tags (como o conteúdo gtm) não carregam os dados necessários para enviar para o google (por exemplo, se não houver GTM configurado), a tag webanalytcs é gerada e não há feedback de erro para informar ao usuário o que está errado.


##

## Workaround


n/d





