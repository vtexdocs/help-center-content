---
title: 'Nominal discount based on formula not working as expected with subtraction operations'
id: 50YsRuiICJNdH2e1QqYnn0
status: DRAFT
createdAt: 2023-08-24T13:30:36.935Z
updatedAt: 2023-08-28T20:44:40.744Z
publishedAt: 
firstPublishedAt: 2023-08-24T13:30:37.863Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: nominal-discount-based-on-formula-not-working-as-expected-with-subtraction-operations
locale: en
kiStatus: Backlog
internalReference: 886980
---

## Summary


When creating a promotion using Nominal discount based on formula, the merchant can use the follow operations according to this documentation: https://help.vtex.com/en/tutorial/promocao-regular-com-desconto-nominal-baseado-em-formula--2Pwrq6THyGViNedQG381jV
 ![](https://vtexhelp.zendesk.com/attachments/token/1EhryrRZDsiXZ31kaSV2VcegW/?name=image.png)

However, when using subtraction operation, the discount value is replaced by the total value of the order.


##

## Simulation


Create a promotion using the nominal discount based on formula and use a subtraction operation, like this:
 ![](https://vtexhelp.zendesk.com/attachments/token/3wIEiPGtF9oX2daeQ3F3AZqCk/?name=image.png)

Check on checkout that the discount is replaced by what should be the total value of the order:
 ![](https://vtexhelp.zendesk.com/attachments/token/r2bWktL4reNcVnnhSqr4hT0FC/?name=image.png)



##

## Workaround


N/A





