---
title: 'Os índices do cluster que excedem o limite de campos fazem com que os documentos não sejam indexados.'
id: 6NPe2vm2ay5BMqvAr1P4zd
status: PUBLISHED
createdAt: 2024-08-08T14:12:00.560Z
updatedAt: 2024-08-08T14:12:01.273Z
publishedAt: 2024-08-08T14:12:01.273Z
firstPublishedAt: 2024-08-08T14:12:01.273Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slug: os-indices-do-cluster-que-excedem-o-limite-de-campos-fazem-com-que-os-documentos-nao-sejam-indexados
locale: pt
kiStatus: Backlog
internalReference: 1078027
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando um índice, que pode conter várias contas, ultrapassa o limite de campos, os novos documentos não são indexados, o que leva a problemas de pesquisa e recuperação.

## Simulação



1. Tentativa de pesquisar ou recuperar documentos recém-adicionados.
2. Observe que os novos documentos não são indexados e não aparecem nos resultados da pesquisa

## Workaround


A equipe da VTEX deve verificar o cluster e verificar o limite de campos do índice, para que os dados estejam disponíveis novamente.





