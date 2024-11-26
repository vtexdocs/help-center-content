---
title: "Cart created from an "order again' option in My Orders, the customer's email is not being placed as expected in the orderForm"
id: 6dDhkaIhquOqaDuNkVZuln
status: PUBLISHED
createdAt: 2023-12-04T22:41:21.385Z
updatedAt: 2023-12-04T22:41:22.139Z
publishedAt: 2023-12-04T22:41:22.139Z
firstPublishedAt: 2023-12-04T22:41:22.139Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: cart-created-from-an-order-again-option-in-my-orders-the-customers-email-is-not-being-placed-as-expected-in-the-orderform
locale: en
kiStatus: Backlog
internalReference: 947563
---

## Summary



In the **My Orders** section within **My Account**, there is the option to set up a cart based on an order the customer previously placed.

In this case, the problem is that in a **telesales flow**, when **impersonating the customer and trying to assemble a cart based on a previous order**, when clicking on the **My Orders (List)** at the "**Order again**" option, the email of the telesales agent is placed in the order form client profile data and not the client one as expected.

It is worth mentioning that this behavior only happens when clicking on the "order again" button in the My Orders order list.


##

## Simulation



1. Login with a telesales user
2. Impersonate a client
3. Go to the My Orders section within My Account
4. In the list of orders, click on "order again" on any of them.
5. Validate the client information in the orderForm (clientProfileData.email)


##

## Workaround



To place orders based on an old one, it is recommended to enter the order details first, and then click on the "order again" option.





