---
title: 'Setting up alternate keys'
id: 3Sa78TnD9SSS6aI44QY6eE
status: DRAFT
createdAt: 2017-12-04T18:55:27.299Z
updatedAt: 2022-08-04T22:35:33.916Z
publishedAt: 
firstPublishedAt: 2017-12-06T18:46:01.372Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slug: setting-up-alternate-keys
locale: en
legacySlug: setting-up-alternate-keys
subcategory: 5tSNDlvmik8gGuKw2goW4q
---

With Master Data you can configure an alternate key, which is cross JSON Schema.

There are two types of alternate keys:
- Single
- Multiple

The `Single` type sets the value of the field as unique in the data entity, while in the `Multiple` type other documents may have this same value.
To get a document using an alternate key you just need to add the following query in the search API:

`/search?fieldName=fieldValue`

In this scenario Master Data won't try to get the document in the indexer. It's a faster process than getting a single document in the indexer.

The `Multiple` type must be used in the case of low events. The Profile System uses this `Multiple` index to get the client's addresses. 

The number of a client's addresses is less than one hundred. So this is a good use case. If your alternate key is over one hundred, you need to set the field as indexed and paginate your searches.
