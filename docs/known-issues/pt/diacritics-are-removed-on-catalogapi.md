---
title: 'Os diacríticos são removidos no CatalogAPI'
id: 2iVyAQ8TSaT3jFYzcQGjSs
status: PUBLISHED
createdAt: 2022-07-22T18:18:04.236Z
updatedAt: 2022-11-25T21:44:21.525Z
publishedAt: 2022-11-25T21:44:21.525Z
firstPublishedAt: 2022-07-22T18:18:05.160Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: os-diacriticos-sao-removidos-no-catalogapi
kiStatus: Backlog
internalReference: 623345
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Atualmente, alguns caracteres diacríticos, como ă, não são preservados quando salvos usando o catálogoAPI: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-put-product





## Simulação


1 - use um produto put API https://developers.vtex.com/vtex-rest-api/reference/catalog-api-put-product com um diacrítico
Ex:
 ![](https://vtexhelp.zendesk.com/attachments/token/DZhYXsOPhCpPGWfd7LikCfnCq/?name=image.png)

2 - Em seguida, verifique estes dados via API ou administração de catálogo, você terá estes caracteres removidos: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-product

 ![](https://vtexhelp.zendesk.com/attachments/token/zac0UZAZFzPR9unBs7EtqsdxR/?name=image.png)





## Workaround


Atualização manual destes produtos via admin UI

