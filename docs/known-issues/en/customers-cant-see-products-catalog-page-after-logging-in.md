---
title: Customers can't see products catalog page after logging in
id: 6MvR2VaPmViUeRE0ZrNCHQ
status: DRAFT
createdAt: 2022-03-25T14:30:45.456Z
updatedAt: 2022-03-25T14:49:17.043Z
publishedAt: 
firstPublishedAt: 2022-03-25T14:30:45.880Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slug: customers-cant-see-products-catalog-page-after-logging-in
kiStatus: Backlog
internalReference: 550112
---

## Summary


Customers can't see products catalog page after logging in.



## Simulation


We're having issues in bevi.myvtex.com. It's a B2B customer with a closed sales channel. We log in and can't see products. After refreshing the page, products are shown. According to **splunk**, the `vtex.intelligent-search-api@0.1.11` app returns a 401 in the first attempt, like we weren't logged in yet. They only have an oauth as a log in method.

In our Slack thread with your team, Rafael Nader suggested setting the prop `blockOAuthAutoRedirect`  as a workaround to force a popup but that didn't work as well. I have attached a HAR file with an updated workspace still throwing the same error for your reference.

We would highly appreciate you expediting this matter.



## Workaround



> An workaround is to set the prop `blockOAuthAutoRedirect` , it will force a popup and the flow will be finished properly.


**It means that the user will have to click in the "sign in with B2B". It might not be a desired behavior, but it's the workaround to this.**

