---
title: Legacy Collection Import Timeout
id: 3sNnbMg00W11l46LPr130g
status: PUBLISHED
createdAt: 2022-02-25T12:21:12.605Z
updatedAt: 2022-12-20T16:30:55.153Z
publishedAt: 2022-12-20T16:30:55.153Z
firstPublishedAt: 2022-02-25T12:21:12.913Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: legacy-collection-import-timeout
kiStatus: Backlog
internalReference: 483785
---

## Summary


Currently, when an user attempts to import data via the bulk insert skus button, if the sheet being used is too extensive, the process might fail.

 ![](https://vtexhelp.zendesk.com/attachments/token/9TSm4inXTV8cFvuiHwLP9uMpb/?name=inline-929450477.png)







##

## Simulation


1) Go to CMS --> Collections

2) Create a new collection and a group Inclusion

3) Use the "Bulk Insert SKUs" button to import data and select a sheet with, for instance, 65000 skus.

4) A loading message will be shown for ~50s

 ![](https://vtexhelp.zendesk.com/attachments/token/jd4fu2dmlX2d3WQUWxycsGOIg/?name=inline-243279848.png)

And then the process will eventually fail.







##

## Workaround


1) Use the side checkboxes for massively selecting Brands and/or Categories

2) Gradually import using smaller sheet sizes

