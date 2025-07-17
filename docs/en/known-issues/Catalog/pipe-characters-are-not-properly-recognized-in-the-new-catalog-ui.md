---
title: "Pipe characters are not properly recognized in the new catalog UI."
id: 4iKfIy23VbkugNknlUkfrm
status: PUBLISHED
createdAt: 2025-02-11T16:20:47.923Z
updatedAt: 2025-02-11T16:20:48.678Z
publishedAt: 2025-02-11T16:20:48.678Z
firstPublishedAt: 2025-02-11T16:20:48.678Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: pipe-characters-are-not-properly-recognized-in-the-new-catalog-ui
locale: en
kiStatus: Backlog
internalReference: 1177654
---

## Summary


When using the new catalog UI, which is acessible via https://mystore.myvtex.com/admin/catalog-products, if the user has a Product and a SKU that both have the same name and/or part of the same name, this data is not shown if the user adds a pipe ( | ) to the SKU name: anything after this character gets hidden.


##

## Simulation



1. Create a product with the name "Test for the known issue"
2. Create a SKU with the name "| this is a Test for the known issue"
3. The SKU name, when displayed in the new catalog UI will be shown as "| this is a"


##

## Workaround


-





