---
title: 'Os diacríticos são removidos no CatalogAPI'
id: 2iVyAQ8TSaT3jFYzcQGjSs
status: PUBLISHED
createdAt: 2022-07-22T18:18:04.236Z
updatedAt: 2024-02-16T20:28:19.994Z
publishedAt: 2024-02-16T20:28:19.994Z
firstPublishedAt: 2022-07-22T18:18:05.160Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: diacritics-are-removed-on-catalogapi
locale: pt
kiStatus: No Fix
internalReference: 623345
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Atualmente, alguns caracteres diacríticos, como ă, não são preservados quando salvos usando o catálogoAPI: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-put-product





## Simulação


1 - use um produto put API https://developers.vtex.com/vtex-rest-api/reference/catalog-api-put-product com um diacrítico
Ex:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Catalog/os-diacriticos-sao-removidos-no-catalogapi_1.png)

2 - Em seguida, verifique estes dados via API ou administração de catálogo, você terá estes caracteres removidos: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-product

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Catalog/os-diacriticos-sao-removidos-no-catalogapi_2.png)





## Workaround


Atualização manual destes produtos via admin UI

