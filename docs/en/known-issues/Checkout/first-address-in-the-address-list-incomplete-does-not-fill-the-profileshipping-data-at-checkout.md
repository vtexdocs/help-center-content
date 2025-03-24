---
title: 'First address in the address list incomplete does not fill the profile/shipping data at checkout'
id: 2AqDZb1AGBjmeMOBU0JkLQ
status: PUBLISHED
createdAt: 2024-01-03T20:44:07.692Z
updatedAt: 2024-01-03T20:49:41.249Z
publishedAt: 2024-01-03T20:49:41.249Z
firstPublishedAt: 2024-01-03T20:44:11.604Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: first-address-in-the-address-list-incomplete-does-not-fill-the-profileshipping-data-at-checkout
locale: en
kiStatus: Backlog
internalReference: 366975
---

## Summary


When a user has more than one address in their profile and the first address in the address list is incomplete, regardless of whether the others are valid, the checkout does not automatically populate their profile/shipping data after adding their email.


##

## Simulation



- Add 2 addresses to a profile, where the 1st one is incomplete;
- Assemble a cart, and add the email;
- No profile/address data is filled.


##

## Workaround


Remove the incomplete address from the profile via Master Data




