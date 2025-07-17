---
title: "As traduções do catálogo não são refletidas no front-end"
id: 4c6Qzdn6NQfHhEN5U76WOi
status: PUBLISHED
createdAt: 2023-07-13T19:43:10.669Z
updatedAt: 2025-05-30T18:25:13.598Z
publishedAt: 2025-05-30T18:25:13.598Z
firstPublishedAt: 2023-07-13T19:43:11.858Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: as-traducoes-do-catalogo-nao-sao-refletidas-no-frontend
locale: pt
kiStatus: Backlog
internalReference: 861892
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando o comerciante executa uma ação no aplicativo Messages para que alguns dados do produto sejam traduzidos no front-end, essa ação não é realmente refletida na vitrine.

## Simulação



1. Faça uma alteração no aplicativo Messages;
2. Observe no `IndexedInfo` que o campo `GenerateAndSaveTranslationsDocument` está definido como `false`;
3. Não reindexe o produto;
4. Verifique se a alteração não foi refletida no site traduzido

## Workaround


Para forçar a reindexação das traduções de um produto, use a seguinte solicitação de API:

    curl --request POST 'https://.vtexcommercestable.com.br/api/notificator/changenotification//translation' \--header 'VtexIdclientAutCookie: '





