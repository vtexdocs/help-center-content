---
title: "Campo E-mail de origem na trigger não aceita placeholder"
id: 4EW6n1Ymus8CGSEW2CuK44
status: PUBLISHED
createdAt: 2017-12-12T17:50:04.943Z
updatedAt: 2022-12-22T20:48:42.548Z
publishedAt: 2022-12-22T20:48:42.548Z
firstPublishedAt: 2017-12-12T17:53:10.088Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slugEN: campo-email-de-origem-na-trigger-nao-aceita-placeholder
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Na configuração da trigger, é possível inserir um e-mail no campo "E-mail de origem", porém o mesmo não aceita placeholder, mesmo se este for do tipo e-mail.

## Simulação


1. Acesse ou crie uma trigger;
2. Clique em ações em caso positivo;
3. Preencha o campo "E-mail de origem" com um placeholcer, "{!email}" por exemplo;
4. Execute a trigger;
5. O e-mail não será enviado.


## Workaround

O campo "Nome de exibição do e-mail de origem" aceita placeholder e pode ser usado para cobrir a maiorida dos cenários que precisam de placeholder neste campo.

