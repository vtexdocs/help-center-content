---
title: "Error 'Date to' must be greater than 'Date from' when creating pricing rules"
id: 6jEbSXEvjfJMGros69POZ7
status: PUBLISHED
createdAt: 2024-10-10T13:21:06.386Z
updatedAt: 2024-10-10T13:21:07.751Z
publishedAt: 2024-10-10T13:21:07.751Z
firstPublishedAt: 2024-10-10T13:21:07.751Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: error-date-to-must-be-greater-than-date-from-when-creating-pricing-rules
locale: en
kiStatus: Backlog
internalReference: 1114921
---

## Summary


When creating a new price rule at https://{accountName}.myvtex.com/admin/pricing/#/trade-policies-rules the merchant can select the date range this rule will apply.
Sometimes the error "TO value must be greater than FROM" appears when selecting an end date, even when the value is already greater.


##

## Simulation



1. Go to price rules
2. Create a new rule with a valid date range (select a week range for instance)
3. Check that the error will appear.


##

## Workaround


Selecting greater end dates usually solves the problem (like a year ahead).





