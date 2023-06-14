---
title: 'Erro ao anexar arquivos no MasterData'
id: 2NkotRVyvWA3OHdxizCYgY
status: PUBLISHED
createdAt: 2019-02-15T18:42:41.461Z
updatedAt: 2022-12-22T20:48:50.909Z
publishedAt: 2022-12-22T20:48:50.909Z
firstPublishedAt: 2019-02-15T18:44:53.354Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slug: erro-ao-anexar-arquivos-no-masterdata
kiStatus: Backlog
internalReference: 
---

## Sumário

O usuário recebe a mensagem de erro "Ocorreu um erro e o arquivo não foi salvo" ao tentar anexar um arquivo manualmente pelo CRM que exceda 5MB em tamanho


## Simulação

1. Crie um campo do tipo `file`
2. Acesse o CRM
3. Anexo manualmente o arquivo

## Workaround

Recomendamos o uso de outro serviço para armazenamento de arquivos maiores do que 5MB.

Lembrando que o MasterData V2 não suporta o campo tipo attachment.

