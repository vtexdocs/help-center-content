---
title: 'Error sending SKUs from sellers to marketplaces and vice versa'
id: 1fh0ea4fZrfyWW5EYnrZxj
status: PUBLISHED
createdAt: 2021-09-30T19:19:17.233Z
updatedAt: 2022-03-28T22:32:12.939Z
publishedAt: 2022-03-28T22:32:12.939Z
firstPublishedAt: 2021-09-30T20:49:09.165Z
contentType: knownIssue
productTeam: Marketplace
author: 46G4yHIZerH7B9Jo0Iw5KI
tag: Suggestions
slugEN: error-sending-skus-from-sellers-to-marketplaces-and-vice-versa
locale: en
kiStatus: Fixed
internalReference: 000
---

## Summary

VTEX stores can become each other's [sellers](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402?&utm_source=autocomplete#being-a-vtex-seller) and [marketplaces](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402?&utm_source=autocomplete#being-a-vtex-marketplace) by sending SKUs that are already part of their catalog. However, these SKUs are not always sent correctly.

This is because products that are sold by both the marketplace and its sellers are not recognized by the system when they are sent. It is only possible to send products that are sold by only one of the stores.

![arquitetura circular](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.JPG)


## Simulation

We see this error when a store sends a SKU to a marketplace and this SKU does not appear in the Received SKUs module.

No error message is displayed in your VTEX Admin indicating that the problem occurred. To check if the SKU is sold by other sellers, use the [Get SKU](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-sku#catalog-api-get-sku) API route. In response to this request, all the sellers that sell this SKU will be displayed within the `SkuSellers` object. If more than one seller is displayed, this means that the error will occur.

## Workaround

We are currently investigating the best way to incorporate operations of this type of architecture into the VTEX platform. Therefore, there is no workaround for this scenario.

