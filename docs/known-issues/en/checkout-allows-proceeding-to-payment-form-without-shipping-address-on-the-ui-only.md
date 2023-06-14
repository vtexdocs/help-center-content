---
title: 'Checkout allows proceeding to payment form without shipping address on the UI only'
id: 3k9zxMq6Pl9WBnIz5Hy6Xf
status: PUBLISHED
createdAt: 2022-11-18T18:42:08.326Z
updatedAt: 2022-11-25T23:17:39.653Z
publishedAt: 2022-11-25T23:17:39.653Z
firstPublishedAt: 2022-11-18T18:42:08.914Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: checkout-allows-proceeding-to-payment-form-without-shipping-address-on-the-ui-only
kiStatus: Backlog
internalReference: 699317
---

## Summary


In a cart with SLA only for delivering and the user enters a correct postal code, the checkout allows the user to proceed, however, if the user returns to the cart page again and changes to the pick-up option then click to continue to the payment part, then go back to cart again, switches back to delivery option and continue again, this time, the user goes to the payment form. Also, there's a message on the shipping address part saying that the component is "waiting for data to be filled".



## Simulation


1- Add products to the cart and ensure that the only SLA available is for delivery;
2- Go to the checkout and fill in your email (user that has data completed, address, and profile);
3- Go to the Shipping form and enter a valid postal code;
4- Return to the cart;
5- Now you choose the PUP option;
6- Go to the next step;
7 - Returns again to cart and switch to delivery again (note that postal code is already saved) then click to continue;
8 - Now you have a page without shipping data;



## Workaround


N/A

