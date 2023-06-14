---
title: 'API Shipping Estimate returns wrong info when SC is null'
id: 6bxlw1nQ27JGbiOmNbgyn2
status: PUBLISHED
createdAt: 2022-04-01T23:33:47.015Z
updatedAt: 2022-11-25T21:59:23.170Z
publishedAt: 2022-11-25T21:59:23.170Z
firstPublishedAt: 2022-05-18T18:27:53.441Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: api-shipping-estimate-returns-wrong-info-when-sc-is-null
locale: en
kiStatus: Backlog
internalReference: 554948
---

## Summary



The API is returning wrong indexed info when executed with SC as null.



## Simulation



=> Execute the API on account, with SC null on API, (this account has all docs with Sales Policy and the correct return is 200 ok empty.)
"https://.vtexcommercestable.com.br/api/logistics/pvt/shipping/estimate"

=> When you remove the Sales Policy from any Dock and execute the same API you will see returns from shipping estimate for that condition because there is now Dock whitout SC.

=> But when you reinsert the Sales Policy on Dock and execute again the API, still shows the result. Does not return to original behavior.



## Workaround


The workaround is send the API wiith SC defined.

