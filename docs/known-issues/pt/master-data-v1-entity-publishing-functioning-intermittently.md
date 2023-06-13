---
title: Publicação de entidade de Master Data V1 funcionando intermitentemente
id: 7mwbfdhdw8ENUtPiC2oEPH
status: PUBLISHED
createdAt: 2019-07-17T17:45:55.823Z
updatedAt: 2022-12-22T20:45:10.661Z
publishedAt: 2022-12-22T20:45:10.661Z
firstPublishedAt: 2019-07-17T20:38:36.744Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slug: publicacao-de-entidade-de-master-data-v1-funcionando-intermitentemente
kiStatus: Backlog
internalReference: 
---

## Sumário

Uma parte das contas da VTEX relatou ser incapaz de publicar qualquer entidade com sucesso. Esse problema afeta apenas entidades V1 e afetou, parcialmente, os triggers recém-criados.

## Simulação

- Visite o armazenamento dinâmico da sua conta https: // {account} .ds.vtexcrm.com.br;
- Acesse a aba `Entidade de dados` e clique no botão `publicar entidade` (o ícone é semelhante a um disquete);
- O sistema informará que a entidade foi publicada com sucesso;
- Clique em "Ok" e visite "Logs Internos";
- Você não verá sua recente publicação de entidade.

## Workaround

Infelizmente, não há solução no momento. A equipe está ciente e trabalhando em uma solução.

