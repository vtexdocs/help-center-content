---
title: 'Slug y Link devueltos en la API Catalog Facets tienen formatos diferentes.'
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
slug: slug-y-link-devueltos-en-la-api-catalog-facets-tienen-formatos-diferentes
locale: es
kiStatus: Backlog
internalReference: 998397
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


API de Facetas de Catálogo descrita aquí: https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/facets/search/-term-
Los objetos de respuesta tienen el campo "Slug", "Link" y "LinkEncoded". Sin embargo, estos campos deberían tener el mismo formato, pero divergen en el objeto PriceRanges cuando el valor tiene casos decimales.

Ejemplo:
Slug: "de-100-a-199.99"
Enlace: "/category-test/de-100-a-199-99?map=c,priceFrom"

El Slug tiene el carácter "." mientras que el Link tiene el carácter "-".



##

## Simulación



1. Tener una categoría con un priceRange con valores decimales.
2. Solicitar la API de facetas
3. Compruebe que los caracteres son diferentes.


##

## Workaround


N/A





