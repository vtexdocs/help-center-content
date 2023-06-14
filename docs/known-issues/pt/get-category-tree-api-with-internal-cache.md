---
title: 'GET Category Tree API com cache interno'
id: 4HZBeY6dv2fsCQXuZJKiSg
status: PUBLISHED
createdAt: 2022-06-21T14:53:59.237Z
updatedAt: 2022-11-25T21:45:23.612Z
publishedAt: 2022-11-25T21:45:23.612Z
firstPublishedAt: 2022-06-21T14:53:59.764Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: get-category-tree-api-com-cache-interno
locale: pt
kiStatus: Backlog
internalReference: 480892
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A Árvore de Categoria API GET tem um cache interno. Ao realizar uma solicitação utilizando o domínio interno VTEX e eles, realizando a mesma solicitação utilizando o domínio do cliente, a primeira solicitação será colocada em cache e na resposta da segunda solicitação, realizada utilizando o domínio do cliente, devolveremos as URLs das categorias com o domínio interno VTEX.



## Simulação


- Fazer a primeira solicitação utilizando o domínio interno da VTEX, por exemplo:

    enrolar --localização -g --requisito GET 'https://.vtexcommercestable.com.br/api/catalog_system/pub/category/tree/3/' \
    --header 'Content-Type: aplicação/json'.

- Fazer a segunda solicitação utilizando o domínio do cliente, por exemplo:

    enrolar --localização -g --requisito GET 'https://www.clientdomain.com.br/api/catalog_system/pub/category/tree/3/' \
    --header 'Content-Type: aplicação/json'.




## Workaround


- Não chame o GET Category Tree API utilizando a conta VTEX domínio interno.

