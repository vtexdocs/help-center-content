---
title: 'Os documentos não são indexados no masterdata v2 quando a entidade tem vários esquemas'
id: bjjbd2AmtCBSdQGRqYz51
status: PUBLISHED
createdAt: 2024-08-08T13:44:12.920Z
updatedAt: 2024-08-08T13:44:14.192Z
publishedAt: 2024-08-08T13:44:14.192Z
firstPublishedAt: 2024-08-08T13:44:14.192Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slug: os-documentos-nao-sao-indexados-no-masterdata-v2-quando-a-entidade-tem-varios-esquemas
locale: pt
kiStatus: Backlog
internalReference: 1077981
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando uma entidade masterdata v2 tem muitos esquemas, ela sofre com problemas de indexação e alguns documentos não são retornados na pesquisa.

## Simulação



1. Verifique se a entidade tem vários esquemas (geralmente +50 esquemas). Crie um novo documento, por exemplo, usando o campo email=test@test.com
2. Pesquise documentos (usando _where=email=test@test.com)
3. Verifique se esse documento não é retornado porque não foi indexado.
4. Ao usar a rota Get Documents, o documento retorna normalmente

## Workaround


Abra um tíquete para a equipe solicitando a reindexação da entidade.





