---
title: Cannot remove credit card information from an orderForm via API
id: 2EEKXZk35YE9nb0L3A8TUF
status: PUBLISHED
createdAt: 2021-09-13T23:41:59.223Z
updatedAt: 2022-12-22T20:41:11.317Z
publishedAt: 2022-12-22T20:41:11.317Z
firstPublishedAt: 2021-09-13T23:45:57.194Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: cannot-remove-credit-card-information-from-an-orderform-via-api
kiStatus: Backlog
internalReference: 
---

## Summary

Credit card information cannot be removed from an [`orderForm`](https://developers.vtex.com/vtex-rest-api/reference/checkout-api-overview) via route `/api/checkout/pub/orderForm/{orderFormId}/paymentAccount/{accountId}/remove` when using `appKey`/`appToken` as credentials.

When an `appKey` with the appropriate [permissions](https://help.vtex.com/pt/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#) submits a request to this route, the API returns an error with `status 500`:
"Attempted to perform an unauthorized operation."

Note that it is not an error with `status 403`, as is usual for authorization failures.

## Simulation



## Workaround

Currently, there is no workaround.

