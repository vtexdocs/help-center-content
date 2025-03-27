---
title: 'O Slug e o Link retornados na API Catalog Facets têm formatos diferentes.'
id: 3LbYdhZhjsvUuQNC7VJN5G
status: PUBLISHED
createdAt: 2024-03-12T15:43:07.017Z
updatedAt: 2024-03-12T15:43:08.057Z
publishedAt: 2024-03-12T15:43:08.057Z
firstPublishedAt: 2024-03-12T15:43:08.057Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: slug-and-link-returned-in-the-catalog-facets-api-have-different-formats
locale: pt
kiStatus: Backlog
internalReference: 998397
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


API do Catalog Facets descrita aqui: https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/facets/search/-term-
Os objetos de resposta têm o campo "Slug", "Link" e "LinkEncoded". No entanto, esses campos deveriam ter o mesmo formato, mas divergem no objeto PriceRanges quando o valor tem casas decimais.

Exemplo:
Slug: "de-100-a-199.99"
Link: "/category-test/de-100-a-199-99?map=c,priceFrom"

O Slug tem o caractere ".", enquanto o Link tem o caractere "-".


## Simulação



1. Tenha uma categoria com um priceRange com valores decimais.
2. Solicite a API de facetas
3. Verifique se os caracteres são diferentes

## Workaround


N/A





