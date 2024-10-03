---
title: 'Searching for products using synonyms may not return all the products from original term'
id: 5mZGQRhsQ487FNgrgvNC5H
status: PUBLISHED
createdAt: 2024-09-06T18:15:56.706Z
updatedAt: 2024-09-09T12:27:02.861Z
publishedAt: 2024-09-09T12:27:02.861Z
firstPublishedAt: 2024-09-06T18:15:57.593Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: searching-for-products-using-synonyms-may-not-return-all-the-products-from-original-term
locale: en
kiStatus: Backlog
internalReference: 1094028
---

## Summary


The results when searching for the synonym may not include all the products when searching for the original specific term.

When a synonym is created, all the products associated with specific search term should be re-indexed to include the synonym. However, products are not being re-indexed after creating or updating a unidirectional synonym.

This behavior occurs due to the re-index notification for these products can be lost in the process.


##

## Simulation


To ensure that this issue is happening, be aware about the following evidences:

1 - The number of results differs from each other.

- On **Admin > Storefront > Intelligent Search > Synonyms**, create or update a unidirectional synonym.
- Then, on **Admin > Storefront > Intelligent Search >  Explained Search**, compare the results when searching for the original term and synonym.
- When comparing the results, the results when searching for the synonym don't include all the products when searching for the original specific term.

2 - The last re-index date of a product is older than the date of the synonym creation.

- Choose one product from original term that does not appear when searching using the synonym.
- Compare the dates between the last re-index date of the product (**Admin > Storefront > Intelligent Search >  Indexing history** ) and the creation/update date of the synonym (**Admin > Storefront > Intelligent Search > Synonyms**).
- If the last re-index date of a product is older than the date of the synonym creation, so this case can fit with this KI.


##

## Workaround


Open a ticket to the CX team with the evidence information so that we can re-index the affected products.




