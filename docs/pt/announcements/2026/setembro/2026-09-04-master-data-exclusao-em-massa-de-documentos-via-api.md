---
title: 'Master Data: exclusão em massa de documentos via API'
createdAt: 2026-09-04T00:00:00.000Z
updatedAt: 2026-09-04T00:00:00.000Z
contentType: updates
productTeam: Master Data
slugEN: 2026-09-04-master-data-bulk-document-deletion-via-api
locale: pt
announcementSynopsisPT: 'Agora é possível excluir em massa todos os documentos de uma entidade de dados do Master Data que correspondem a um filtro, reduzindo o volume faturado de armazenamento.'
tags:
  - Nova funcionalidade
  - Master Data
---

Desde 4 de setembro de 2026, as lojas VTEX contam com a exclusão em massa de documentos do [Master Data](/pt/docs/tutorials/master-data) por API. Com o novo recurso, é possível remover de uma só vez todos os documentos de uma [entidade de dados](/pt/docs/tutorials/entidade-de-dados) que atendem a um filtro.

## O que mudou?

Antes, a única forma de excluir documentos era percorrer a entidade de dados e apagar um documento por vez, o que tornava a limpeza de grandes volumes lenta e sujeita a erros. Agora, uma única solicitação de API inicia um processo assíncrono que exclui todos os documentos correspondentes ao filtro informado. O recurso está disponível para entidades de dados do Master Data v1 e v2.

> ❗ A exclusão em massa é definitiva e documentos excluídos não podem ser recuperados. Antes de iniciar a exclusão, consulte quantos documentos o seu filtro seleciona.

## Por que mudou?

O uso de [entidades de dados personalizadas](/pt/docs/tutorials/master-data#entidades-de-dados-personalizadas) é cobrado mensalmente, em faixas que variam conforme o volume total de documentos armazenados. Excluir os documentos pela API é a única forma de reduzir esse volume, já que apagar uma entidade de dados pela interface do Master Data v1 não remove os documentos já armazenados.

## O que precisa ser feito?

Nenhuma ação é necessária, o recurso já está disponível. Quando você precisar reduzir o volume de documentos armazenados na sua loja, o time de desenvolvimento responsável pela sua operação pode executar a exclusão em massa pela API.

## Saiba mais

* [Bulk deleting documents in Master Data](https://developers.vtex.com/docs/guides/bulk-deleting-documents-in-master-data)
* [Master Data](/pt/docs/tutorials/master-data)
* [Consultar o uso do Master Data no Admin VTEX](/pt/docs/tutorials/consultar-o-uso-do-master-data-no-admin-vtex)
* [A cobrança do Master Data não diminuiu depois que excluí uma entidade de dados](/pt/docs/tutorials/a-cobranca-do-master-data-nao-diminuiu-depois-que-exclui-uma-entidade-de-dados)
