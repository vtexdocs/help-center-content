---
title: 'Campo "Administrador que aprovou o produto (id)" não muda quando a atualização é feita por webservice'
id: 5R6Jj0aglq0gUu2OakqgUw
status: PUBLISHED
createdAt: 2017-04-11T22:17:03.345Z
updatedAt: 2022-12-22T20:48:33.851Z
publishedAt: 2022-12-22T20:48:33.851Z
firstPublishedAt: 2017-04-11T22:24:05.649Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Web Service
slugEN: campo-administrador-que-aprovou-o-produto-id-nao-muda-quando-a-atualizacao-e-feita-por-webservice
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Quando a modificação no produto é feita por Web Service não é gravado o usuário que fez a atualização.

A plataforma mantém o último usuário em de sobrescrever com a informação do Web Service. 

## Simulação

Atualizar um produto via Web Service.

## Workaround

Não há um workaround prático. A alternativa seria acessar os produtos após a atualização por Webservice e salvar novamente, assim deixando registrado o último usuário.

