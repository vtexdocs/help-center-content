---
title: "New Collections Page not loading"
id: 4sANd9Oah8a90vkgGmCddj
status: PUBLISHED
createdAt: 2022-11-01T09:33:20.028Z
updatedAt: 2022-11-25T21:42:19.038Z
publishedAt: 2022-11-25T21:42:19.038Z
firstPublishedAt: 2022-11-01T09:33:20.722Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: new-collections-page-not-loading
locale: en
kiStatus: Backlog
internalReference: 419729
---

## Summary


The account could not be able to load the collections app page, the request `api/catalog_system/pvt/collection/search/?an=&page=1&pageSize=10&orderByAsc=false` could return 500, due to timeout:


    "Execution Timeout Expired. The timeout period elapsed prior to completion of the operation or the server is not responding."




## Simulation


- Go to `/admin/collections`



## Workaround


- Manage collections using legacy CMS or using API.

