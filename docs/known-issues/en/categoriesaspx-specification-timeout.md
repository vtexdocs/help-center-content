---
title: Categories.aspx Specification Timeout
id: 2HNWe5x0VvSe49G88X2y4Y
status: PUBLISHED
createdAt: 2022-02-25T12:33:15.024Z
updatedAt: 2022-11-25T21:46:43.258Z
publishedAt: 2022-11-25T21:46:43.258Z
firstPublishedAt: 2022-02-25T12:33:15.356Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: categoriesaspx-specification-timeout
kiStatus: Backlog
internalReference: 433664
---

## Summary


There is no limit on the registration of specification fields, which can generate timeouts in the catalog admin.


## Simulation



- Register a very large amount of fields (i.e. 1000+) into a single specification.
- Open the admin of this specification Or try to change a product that contains this specification
- Receive a 404 or 504 request's response








## Workaround


Prevent: Do not register too many values in a single specification.
Fix: Deactivate the specification and register the values in several specifications, preferably distribute in different categories
Tip: Don't concatenate specs, especially in the root category

