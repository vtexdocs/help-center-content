---
title: Grupos de entidades do Dynamic Storage no Master Data não funcionam como o esperado
id: 2qgBrT6ehhUyy7Z9Xj4R85
status: PUBLISHED
createdAt: 2019-08-05T20:46:48.873Z
updatedAt: 2022-12-22T20:49:07.486Z
publishedAt: 2022-12-22T20:49:07.486Z
firstPublishedAt: 2019-08-05T21:42:57.146Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slug: grupos-de-entidades-do-dynamic-storage-no-master-data-nao-funcionam-como-o-esperado
kiStatus: Backlog
internalReference: 
---

## Sumário

Caso o usuário agrupe algumas entidades usando o menu suspenso, isso fará com que o sistema exiba a seguinte mensagem de erro: `"Message":"Object reference not set to an instance of an object."}`. 

Vale ressaltar que esse erro se aplica apenas para entidades V1.

## Simulação

- Visite o Dynamic Storage da sua conta por meio do `https://{account}.ds.vtexcrm.com.br/`;

- Acesse a aba `Entidade de dados` e clique no botão “__+__”.

Você receberá uma mensagem de erro dizendo `RESPONSE: {"Message":"Object reference not set to an instance of an object."}`.


## Workaround

Infelizmente, não há solução no momento. O recurso será descontinuado em breve e, por isso, não ofereceremos mais suporte. 


