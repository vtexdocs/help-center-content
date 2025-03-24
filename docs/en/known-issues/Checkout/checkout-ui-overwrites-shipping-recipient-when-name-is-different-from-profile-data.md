---
title: 'Checkout UI overwrites shipping recipient when name is different from profile data'
id: 2IrL7DbWbzdgxZh6Us6n4q
status: PUBLISHED
createdAt: 2023-05-09T22:08:13.314Z
updatedAt: 2023-05-17T15:35:45.479Z
publishedAt: 2023-05-17T15:35:45.479Z
firstPublishedAt: 2023-05-09T22:08:14.290Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-overwrites-shipping-recipient-when-name-is-different-from-profile-data
locale: en
kiStatus: Fixed
internalReference: 822670
---

## Summary


If a shopper has a complete profile where the first name and last name differ from the shipping recipient, when their profile is automatically filled at checkout, the UI overwrites the Shipping Recipient with the value of first name and last name combined.


##

## Simulation



- Register a shopper with a first name and last name different from the shipping recipient;
- Go to checkout and add their email to automatically fill in the profile information;
- Check the shipping recipient, it will be the first name and last name.


##

## Workaround


N/A



