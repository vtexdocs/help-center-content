---
title: 'Eternal loading in checkout UI v5'
id: 6lOzyvQqoRCNWkIjRtyibv
status: PUBLISHED
createdAt: 2022-10-18T15:28:04.738Z
updatedAt: 2022-12-02T17:58:25.957Z
publishedAt: 2022-12-02T17:58:25.957Z
firstPublishedAt: 2022-10-18T15:28:05.492Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: eternal-loading-in-checkout-ui-v5
locale: en
kiStatus: Backlog
internalReference: 332740
---

## Summary


In Checkout v5, in a specific scenario, the page is stuck in an infinite loading, and in the console, we can see the error: "Uncaught SyntaxError: Unexpected token u in JSON at position 0 at JSON.parse (<anonymous>)".

This can be directly associated with the "addressType: null", which may happen after just entering the postal code and refreshing the page.



## Simulation



1. Fill in the profile information that was never used before (incomplete profile and address)
2. Finish the purchase
3. Add only the postal code
4. Refresh the page or go back to home and back again to the cart



## Workaround


NA

