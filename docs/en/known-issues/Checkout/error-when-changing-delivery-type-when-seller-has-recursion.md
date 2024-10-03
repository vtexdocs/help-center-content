---
title: 'Error when changing delivery type when seller has recursion'
id: 7JLnqVWHz94sQZKMOGUkKC
status: PUBLISHED
createdAt: 2022-06-14T14:07:38.881Z
updatedAt: 2024-02-16T20:24:13.311Z
publishedAt: 2024-02-16T20:24:13.311Z
firstPublishedAt: 2022-06-14T14:07:39.358Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: error-when-changing-delivery-type-when-seller-has-recursion
locale: en
kiStatus: No Fix
internalReference: 597915
---

## Summary


In the scenario where the seller has recursion, when arriving at the checkout stage and changing the delivery type from delivery to pickup, the user receives the error "Unable to communicate with the seller ...." but actually the error is "The address cannot be used for the given delivery channel". This is due to the recursion where the API does not know how to deal with this type of scenario and the UI does not select a deliveryChannel.



## Simulation


In the recursion scenario, go to the checkout step and choose to change the delivery type from delivery to pickup, when making this change the error occurs.



## Workaround


N/A

