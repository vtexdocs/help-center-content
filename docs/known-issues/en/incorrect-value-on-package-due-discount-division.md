---
title: 'Incorrect Value on Package due Discount division'
id: f27JxOqSf3sAKeHkQlHUa
status: PUBLISHED
createdAt: 2022-06-27T14:28:29.925Z
updatedAt: 2022-11-25T22:02:11.129Z
publishedAt: 2022-11-25T22:02:11.129Z
firstPublishedAt: 2022-06-27T14:28:30.303Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: incorrect-value-on-package-due-discount-division
locale: en
kiStatus: Backlog
internalReference: 605517
---

## Summary


The package has a different value of total order without shipping value. It happens because of the discounts does not have properly division with amount itens of order.



## Simulation


As example if the order has 4 itens and the price of each iten is 17 cents, total 68 cents. And if the discount is 3 cents, so the value should be 65 cents but is not possible give one cent to each iten as discount because the division calculate is not properly. So the UI will show 64 cents as total of package value once the correct value is 65 cents.

On UI you will see iten as 16 cents (calculatedSellingPrice) and UnitMultiplier as 4, equal 64 cents as value.

But the correct way is 1 iten as 17 cents and 3 itens as 16 cents, equal 65 cents as value.





## Workaround


There is no workaround yet.

