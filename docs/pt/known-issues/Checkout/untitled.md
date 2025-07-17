---
title: "UI does not display/select correctly the address used for delivery calculation."
id: 2rBE1Pur8HEZo3nR03LfSm
status: PUBLISHED
createdAt: 2022-01-24T21:44:28.050Z
updatedAt: 2024-02-16T20:28:51.794Z
publishedAt: 2024-02-16T20:28:51.794Z
firstPublishedAt: 2024-02-16T20:28:51.794Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: 
slugEN: untitled
locale: pt
kiStatus: No Fix
internalReference: 481402
---

## Sumário



## Simulação


To simulate the issue, it is necessary that the orderform already reaches the checkout with the address of type `search `filled up.

1. On the checkout, on shipping data, select the pickup option - this will already be "calculated " since the address of type `search `already exists on the orderform.
2. Return to Delivery and add a CEP without the delivery availability.
3. Despite the UI showing the CEP filled up on the previous step the calculation for the delivery will be correspondent to the CEP presented on the address of type `search`.



## Workaround


There is no known workaround.

