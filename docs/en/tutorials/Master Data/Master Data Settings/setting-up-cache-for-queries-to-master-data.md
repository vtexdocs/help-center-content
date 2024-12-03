---
title: 'Setting up cache for queries to Master Data'
id: SmOSkCybOCa02Ssakca28
status: ARCHIVED
createdAt: 2018-03-01T20:30:33.229Z
updatedAt: 2020-09-28T18:43:34.113Z
publishedAt: 
firstPublishedAt: 2018-03-01T20:59:50.024Z
contentType: tutorial
productTeam: Master Data
author: authors_24
slugEN: setting-up-cache-for-queries-to-master-data
locale: en
legacySlug: setting-up-cache-for-queries-to-master-data
subcategoryId: 5tSNDlvmik8gGuKw2goW4q
---

In the data entity settings, you may set up a cache layer - located on Master Data itself - for queries to that entity.

Whenever the same query is redone to this entity - using the same parameters, such as filters and fields - within the defined period, the cached data will be returned.

This is especially important for entities that are exposed to a high amount of requests.

To configure this cache layer, follow the steps below:
1. Enter __Master Data__.
2. Click __Novo__ to create a new entity or the pencil icon of an existing entity if you want to edit it.
3. Click the __Tempo de cache para consultas paginadas__ check box ("Cache time for paged queries") and choose the cache time for the entity.

![cacheMD](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Master%20Data/Master%20Data%20Settings/setting-up-cache-for-queries-to-master-data_1.jpg)

The cache time options are:
- 5 hours
- 10 hours
- 1 day
- 7 days
- 30 days
