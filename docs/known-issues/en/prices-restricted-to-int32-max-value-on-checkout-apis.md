---
title: 'Prices restricted to "Int32" max value on checkout APIs'
id: 5mzOjCUYs7vXUkttbsK0za
status: PUBLISHED
createdAt: 2022-04-25T17:28:05.159Z
updatedAt: 2022-11-25T21:51:41.123Z
publishedAt: 2022-11-25T21:51:41.123Z
firstPublishedAt: 2022-04-25T17:28:05.773Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: prices-restricted-to-int32-max-value-on-checkout-apis
kiStatus: Backlog
internalReference: 566142
---

## Summary


Checkout REST APIs don't support prices higher than an "Int32" value. So, applying a "manual price" will be restricted to the number "2,147,483,647" (number in decimals).



## Simulation


While using the "Change price" API (https://developers.vtex.com/vtex-rest-api/reference/pricechange), sending a payload like "{"price":2500000000}" (which represents $25.000.000,00) will return a 500 error with the message "Value was either too large or too small for an Int32.".



## Workaround


N/A

