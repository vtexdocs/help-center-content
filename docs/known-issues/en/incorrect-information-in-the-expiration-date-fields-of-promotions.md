---
title: 'Incorrect information in the Expiration Date fields of promotions'
id: 1iyo8L4y8A4ygwUI9f8tHA
status: PUBLISHED
createdAt: 2022-07-05T17:19:07.753Z
updatedAt: 2022-11-25T22:12:13.810Z
publishedAt: 2022-11-25T22:12:13.810Z
firstPublishedAt: 2022-07-05T17:19:08.406Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: incorrect-information-in-the-expiration-date-fields-of-promotions
locale: en
kiStatus: Backlog
internalReference: 611284
---

## Summary


Intermittently, when we open a promotion, the Start Date and End Date fields display the current date, and the Start Hour and End Hour fields display 12:00 AM. Despite the incorrect information in the UI, the dates set in the promotion are not affected.



## Simulation


This scenario can happen randomly, however, we find it most often in the Safari browser. To reproduce:
1. Open a promotion
2. Check the Expiration Date form



## Workaround


Reloading the page is enough to correct the information on the UI

