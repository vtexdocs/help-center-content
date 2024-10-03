---
title: "Users can't access Gift Card admin (looping page)"
id: 5FowAAf8VulbVXcQIeSmHd
status: PUBLISHED
createdAt: 2024-05-02T15:26:57.386Z
updatedAt: 2024-05-02T15:26:58.463Z
publishedAt: 2024-05-02T15:26:58.463Z
firstPublishedAt: 2024-05-02T15:26:58.463Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: users-cant-access-gift-card-admin-looping-page
locale: en
kiStatus: Backlog
internalReference: 1025971
---

## Summary


If users block third-party cookies (browser settings) they won't be able to access the Gift Card module in admin, there's a cookie set in another VTEX domain.


##

## Simulation


After blocking third-party cookies is possible to simulate the issue mentioned above, you can also inspect the page (developer tools) and go to Network tab (search for Vale.aspx), there will be a 302 status code.


##

## Workaround


Whitelist third-party cookies present in myvtex.com domain.




