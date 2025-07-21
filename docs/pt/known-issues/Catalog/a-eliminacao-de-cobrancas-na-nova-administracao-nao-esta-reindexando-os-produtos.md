---
title: "A eliminação de cobranças na nova administração não está reindexando os produtos"
id: 33abWd1ApVTwPKdaxqgKPm
status: PUBLISHED
createdAt: 2022-06-28T16:56:28.134Z
updatedAt: 2022-11-25T21:44:29.933Z
publishedAt: 2022-11-25T21:44:29.933Z
firstPublishedAt: 2022-06-28T16:56:28.414Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: a-eliminacao-de-cobrancas-na-nova-administracao-nao-esta-reindexando-os-produtos
locale: pt
kiStatus: Backlog
internalReference: 490740
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, se você tiver uma coleção criada inteiramente ou na nova/legacy (CMS) Collections admin, eliminando-a via UI não reindexará os produtos nela contidos, conseqüentemente não os removerá efetivamente da coleção.



## Simulação


1) Criar uma coleção usando o novo administrador e inserir produtos a ela;
2) Verificar se os produtos adicionados serão reindexados e suas informações indexadas conterão os dados da coleção;
3) Clique para excluir toda a coleção na IU principal
4) Os dados de informação indexados dos produtos contidos anteriormente dentro desta determinada coleção deveriam ter sido atualizados.



## Workaround


Use o módulo de coleções Legacy (CMS) para deleções ou as APIs de coleções: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-collection

