---
title: 'GET Product by Refid Returning "Null" when not Found'
id: 6yiM9gJT5DB77pZSBNfGZ3
status: PUBLISHED
createdAt: 2023-05-16T19:35:46.743Z
updatedAt: 2024-07-01T18:49:03.498Z
publishedAt: 2024-07-01T18:49:03.498Z
firstPublishedAt: 2023-05-16T19:35:47.468Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: get-product-by-refid-returning-null-when-not-found
locale: en
kiStatus: No Fix
internalReference: 826702
---

## Summary


The get product by refid route (/catalog_system/pvt/products/productgetbyrefid) is returning a null instead of a simply 404 response when not finding a valid id on a given store's catalog




##

## Simulation


1) Run the following cURL

curl --location --request GET 'https://mystore.vtexcommercestable.com.br/api/catalog_system/pvt/products/productgetbyrefid/667' \
--header 'Content-Type: application/json' \
--header 'Cookie: janus_sid=beb23e63-ccb5-4619-9ee7-f1f61deb0683'

You should get the following response if the given id doesn't exist

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Catalog/get-product-by-refid-returning-null-when-not-found_1.png)

This is incorrect since the expected is a `404 - Not Found`




##

## Workaround


Using other APIs for GET product such as Get Product by ID if this 404 response is imperative for anything you're working with.






