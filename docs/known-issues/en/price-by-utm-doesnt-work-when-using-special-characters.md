---
title: Price by UTM doesn't work when using special characters
id: 5vQnjYgbE48426q2e6GMUY
status: PUBLISHED
createdAt: 2017-06-05T12:24:57.621Z
updatedAt: 2022-12-22T15:17:56.083Z
publishedAt: 2022-12-22T15:17:56.083Z
firstPublishedAt: 2017-06-05T12:32:16.311Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_35
tag: Catalog,Pricing & Promotions
slug: price-by-utm-doesnt-work-when-using-special-characters
kiStatus: Backlog
internalReference: 
---

## Summary

The possibility of creating different prices is a feature widely used in VTEX. It's a great resource for practicing different values according to your store's business partner, such as associating a value of a product to be displayed in Buscapé.

Standard price: 549,00
Price UTM Buscapé: 449,00

However, when using special characters at the time of registering the **utm\_campaign**, the platform does not recognize the term and the value is not applied.

## Simulation

1. Create a new entry in the Values Table
2. Associate the new value with a UTM and in the value of **utm\_campaign** use a special character, for example: `bp+`
3. Save

## Workaround

Just remove any special characters from the UTM field

