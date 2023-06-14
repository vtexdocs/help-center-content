---
title: 'Checkout has no clarity about divergences between the identified and the logged in customer'
id: 3TorBnBvCbqLB5AUG8oWp0
status: PUBLISHED
createdAt: 2023-05-03T21:54:48.509Z
updatedAt: 2023-05-08T18:32:02.939Z
publishedAt: 2023-05-08T18:32:02.939Z
firstPublishedAt: 2023-05-03T21:54:49.041Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: checkout-has-no-clarity-about-divergences-between-the-identified-and-the-logged-in-customer
kiStatus: Backlog
internalReference: 442267
---

## Summary


While at the checkout, you need to log in to see/change personal information and, in some cases, even finish the purchase. The log-in process is disconnected from the orderForm, so you can log in as any email and be identified with some other email in the purchase flow.

The issue is that divergences between both emails won't be clearly presented at the checkout and won't allow you to do the expected action (see/edit information or finish the purchase); in this context, you'll be seen as logged out.


##

## Simulation



- Create any cart and identify yourself as a recurring customer (which will have their information automatically filled and masked);
- Try editing some information, which will require you to log in;
- Do the login process with a different email than before (especially using Google/Facebook as identity providers);
- You'll be successfully logged in for the VTEX ID context but logged out for the checkout context.


##

## Workaround


N/A




