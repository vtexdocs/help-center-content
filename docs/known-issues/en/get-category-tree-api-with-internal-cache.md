---
title: GET Category Tree API with internal cache
id: 4HZBeY6dv2fsCQXuZJKiSg
status: PUBLISHED
createdAt: 2022-06-21T14:53:59.237Z
updatedAt: 2022-11-25T21:45:23.612Z
publishedAt: 2022-11-25T21:45:23.612Z
firstPublishedAt: 2022-06-21T14:53:59.764Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: get-category-tree-api-with-internal-cache
kiStatus: Backlog
internalReference: 480892
---

## Summary


The API GET Category Tree has an internal cache. When performing a request using the VTEX internal domain and them, performing the same request using the client's domain the first request will be cached and on the response of the second request, done using the client's domain, we will return the categories URL's with the internal VTEX domain.



## Simulation


- Do the first request using VTEX internal domain, for example:

    curl --location -g --request GET 'https://.vtexcommercestable.com.br/api/catalog_system/pub/category/tree/3/' \
    --header 'Content-Type: application/json'

- Do the second request using the client's domain, for example:

    curl --location -g --request GET 'https://www.clientdomain.com.br/api/catalog_system/pub/category/tree/3/' \
    --header 'Content-Type: application/json'​




## Workaround


- Don't call the GET Category Tree API using the account VTEX internal domain.

