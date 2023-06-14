---
title: 'Shipping component locked in "Waiting for more information" state'
id: 7HHlJdZvZ31NgsB7lTShAz
status: PUBLISHED
createdAt: 2023-03-29T19:26:05.971Z
updatedAt: 2023-03-29T20:51:39.432Z
publishedAt: 2023-03-29T20:51:39.432Z
firstPublishedAt: 2023-03-29T19:26:06.470Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: shipping-component-locked-in-waiting-for-more-information-state
kiStatus: Backlog
internalReference: 780673
---

## Summary


Checkout UI doesn't render the shipping component when accessing the checkout page directly through specific step in the URL (except for /cart and /shipping), the "shippingData" is incomplete, and there is an increase latency in the orderForm API requests. You will see the message "Waiting for more information" and won't be able to proceed with the purchase.


##

## Simulation



- Add a product to the cart;
- Fill the profile, and leave the shipping information empty;
- Since depending in increase latency to experience the issue, consider using an extension like URL Throttler to add a delay in the orderForm API requests;
- Go to a new tab and access the checkout directly in a specific step through URL, for example, using "_www.store.com_/checkout/#/payment";
- You will see the message "Waiting for more information" in the shipping component.


##

## Workaround


Reload the page or access the checkout using specifically the shipping step (_www.store.com_/checkout/#/shipping).




