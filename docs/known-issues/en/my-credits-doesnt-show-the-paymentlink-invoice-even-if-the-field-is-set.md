---
title: "My Credits doesn't show the PaymentLink invoice even if the field is set"
id: YQ2hkDciJqNZiAfqdNO4t
status: PUBLISHED
createdAt: 2022-03-18T21:29:25.136Z
updatedAt: 2022-11-25T22:04:43.897Z
publishedAt: 2022-11-25T22:04:43.897Z
firstPublishedAt: 2022-03-18T21:29:25.618Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: my-credits-doesnt-show-the-paymentlink-invoice-even-if-the-field-is-set
locale: en
kiStatus: Fixed
internalReference: 546267
---

## Summary


The paymentLink field link is not being displayed on the My Credits page, within MyAccount, even though it has been configured and available on the Invoices page of Customer Credit, within the Admin.


## Simulation



1. Use the Change Invoice endpoint from Developers Portal to configure a `paymentLink` for an existent Invoice of yours
2. Refresh the Invoice page and the link will be available in the `Comments` field
3. Go to store and login
4. go to My Credits page, into My Account
5. The field `comments` will be empty



## Workaround


Even known this is not the best solution, a possible workaround is to send  the `observation` field with the link, using the Change Invoice endpoint. The `observations` field is also added in the `Comments` field but it can be seen inside My Credits page.

