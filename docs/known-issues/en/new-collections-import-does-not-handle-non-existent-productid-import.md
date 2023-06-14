---
title: New Collections Import does not Handle non Existent ProductID Import
id: 2bqGzlvbYqn7hVVfVbJZDO
status: PUBLISHED
createdAt: 2022-06-28T16:56:12.572Z
updatedAt: 2022-11-25T21:44:41.047Z
publishedAt: 2022-11-25T21:44:41.047Z
firstPublishedAt: 2022-06-28T16:56:12.844Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: new-collections-import-does-not-handle-non-existent-productid-import
kiStatus: Backlog
internalReference: 398602
---

## Summary



Currently, in the new collection's admin, when the user tries to import a product sheet with a single product ID that does not exist in the account's catalog, the process fails as a whole without either indicating which line/productID has failed or even responding with an assertive message of the origin cause of the issue in the import attempt.



## Simulation


1) Go to an account's /admin/collections/{id}/ and click the import button.

2) Choose the .XLS format and try importing a single line of a productID that currently is not present in the user's catalog .

3) An unspecific error message will be prompted to the user, something like: "Error. Your file was not imported. Try to import this file again"

This process should either point out where the failure has occurred and/or process the other lines and not interrupt the whole attempt.

(Ex: If I try to import 1000 lines and only 1 line is faulty (does not exist) I will not be able to import anything and without even knowing the reason why).



## Workaround


Option A) Check through roughly if all the productIDs in the sheet really do exist.
Option B) Use the legacy collections module
Option C) Use the API insertion

