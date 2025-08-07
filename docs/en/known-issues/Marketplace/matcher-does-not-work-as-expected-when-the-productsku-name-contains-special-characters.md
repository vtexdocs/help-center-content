---
title: "Matcher does not work as expected when the Product/SKU name contains special characters"
id: 1kRjFExdSRMAJMgFgC7Bbj
status: PUBLISHED
createdAt: 2023-10-19T15:37:17.652Z
updatedAt: 2023-10-19T15:37:18.601Z
publishedAt: 2023-10-19T15:37:18.601Z
firstPublishedAt: 2023-10-19T15:37:18.601Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: matcher-does-not-work-as-expected-when-the-productsku-name-contains-special-characters
locale: en
kiStatus: Fixed
internalReference: 736164
---

## Summary


When integrating products that have special characters in the name, such as `. - + # /` , Matcher gives a score of 50% and makes products stay in Pending. With this, the products depend on manual approval or via API.



##

## Simulation



1. Through a VTEX seller, send an SKU that contains special characters in the name
2. On the SKU Received page, see that the SKU in question will have a score of 50%, in the Pending tab


##

## Workaround


To resolve the scenario it is indicated that the seller changes the SKU/product name, removing the special characters. If this is not possible, the marketplace can use the API https://developers.vtex.com/docs/api-reference/marketplace-apis#put-/api.vtex.com/-accountName-/suggestions/matches/action/-actionName- to match the products





