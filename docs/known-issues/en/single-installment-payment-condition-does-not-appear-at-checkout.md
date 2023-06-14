---
title: 'Single installment payment condition does not appear at checkout.'
id: 3L7GJTRaWWA9Wjw2zkQqtS
status: PUBLISHED
createdAt: 2022-06-29T11:57:22.859Z
updatedAt: 2023-01-04T13:54:59.054Z
publishedAt: 2023-01-04T13:54:59.054Z
firstPublishedAt: 2022-06-29T11:57:23.251Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: single-installment-payment-condition-does-not-appear-at-checkout
kiStatus: Backlog
internalReference: 605568
---

## Summary


When registering a payment condition in which there is only one installment, this information does not appear at checkout.



## Simulation



- Create a single installment payment condition.
- The information is correctly loaded in paymentData.
- Check that the option in the dropdown of installments does not appear in the cardUI of the checkout. Only "Total - $ xx.xx".
- Even with the information in the UI of only Total, when the purchase is closed it is made with the installments registered in the commercial condition



## Workaround


There is no workaround.

