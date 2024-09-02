---
title: "Manually changing 'flagSKU' in the URL allows a specification type to be improperly changed."
id: 1hcfTgeb1sgHV0BVm1DGoP
status: PUBLISHED
createdAt: 2024-08-19T14:52:40.859Z
updatedAt: 2024-08-19T14:52:42.128Z
publishedAt: 2024-08-19T14:52:42.128Z
firstPublishedAt: 2024-08-19T14:52:42.128Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: manually-changing-flagsku-in-the-url-allows-a-specification-type-to-be-improperly-changed
locale: en
kiStatus: Backlog
internalReference: 1083333
---

## Summary


Currently, when an specification is created, it's set as either a SKU or Product type and this should not be changed after its creation.

However, there a glitch in the catalog admin that allows these fields to be incorrectly changed from their original type (from SKU to product or vice-versa), when manipulating the URL of the admin page.


##

## Simulation


1 - access a product specification list in your account https://account_name.myvtex.com/admin/site/Campo.aspx

2 - create a specification and hit save

3 - its format will have the following query parameters (example) ...CampoForm.aspx?Id=20&**flagSku=0**&idCategoria=3 --> the "flagSKu" data = 0 means it is a product specification.

4 - change this flag to =1 and hit enter.

5 - Upon reloading the page, hit save.

6 - the product specification was now converted to a product specification, which is not a desired behaviour in the catalog.


##

## Workaround


-





