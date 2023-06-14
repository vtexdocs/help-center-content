---
title: 'Address in orderForm with excessive size for multiples cities separated by "::"'
id: 7E6x4O56SxcSeU2qv09GBt
status: PUBLISHED
createdAt: 2023-01-06T11:52:36.229Z
updatedAt: 2023-01-06T13:36:37.250Z
publishedAt: 2023-01-06T13:36:37.250Z
firstPublishedAt: 2023-01-06T13:29:34.607Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: address-in-orderform-with-excessive-size-for-multiples-cities-separated-by
locale: en
kiStatus: Backlog
internalReference: 287854
---

## Summary


In some cases, Checkout API uses "::" as a separator when there are several cities possibilities from the zip code service, causing an error about excessive size in the field address, impacting placing the order. This behavior happens because the API has a autocomplete for address


##

## Simulation


Considering Argentina as an example that fits this condition, when adding the postal code 4427 via "vtexjs" or API you can see the address defined in the orderForm separated by "::"


##

## Workaround


Via API: send the parameter `"clearAddressIfPostalCodeNotFound": false` in the request to avoid the address being autocompleted
Via "vtexjs": use the function "sendAttachment()" instead of "calculateShipping()" so it's possible to use the parameter mentioned above




