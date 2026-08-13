---
title: 'A cobrança do Master Data não diminuiu depois que excluí uma entidade de dados'
createdAt: '2026-08-07T00:00:00.000Z'
updatedAt: '2026-08-07T00:00:00.000Z'
contentType: tutorial
productTeam: Master Data
slugEN: master-data-billing-didn't-decrease-after-deleting-a-data-entity
locale: pt
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
domainFilters:
  - Master Data
  - Admin
symptomFilters:
  - Interrupção no fluxo
---

Depois de excluir uma [entidade de dados](/pt/docs/tutorials/entidade-de-dados) pela interface do Master Data v1, você espera que o volume cobrado mensalmente diminua, mas isso não acontece.

Esse problema ocorre porque a exclusão de uma entidade de dados pela interface não remove os documentos (registros) já armazenados nela. Esses documentos continuam sendo contabilizados na cobrança mensal até que sejam excluídos pela API.

## Solução

Para resolver esse problema, siga os passos abaixo:

1. [Exclua os documentos da entidade pela API](#exclua-os-documentos-da-entidade-pela-api): remova os registros armazenados para que eles deixem de ser contabilizados na cobrança.
2. [Confirme a redução no dashboard de uso do Master Data](#confirme-a-reducao-no-dashboard-de-uso-do-master-data): verifique se a quantidade de documentos diminuiu após a exclusão.

### Exclua os documentos da entidade pela API

Siga as instruções do guia [Deleting documents in Master Data v1](https://developers.vtex.com/docs/guides/deleting-documents-in-master-data-v1) para excluir os documentos armazenados na entidade de dados. Apenas essa exclusão via API reduz o volume contabilizado na cobrança mensal.

### Confirme a redução no dashboard de uso do Master Data

Depois de excluir os documentos, acesse o dashboard [Master Data usage](/pt/docs/tutorials/consultar-o-uso-do-master-data-no-admin-vtex) no Admin VTEX para confirmar que a quantidade de documentos da entidade diminuiu.

Se a cobrança continuar sem alterações após a exclusão dos documentos, entre em contato com o [Suporte](/pt/docs/tutorials/como-funciona-o-suporte-da-vtex).
