---
title: "Divergent order value between marketplace and seller while using price override and promotions"
id: 4OsDOEqVDpDTen3BFyHSYf
status: PUBLISHED
createdAt: 2023-02-17T18:37:04.409Z
updatedAt: 2023-02-17T18:37:05.327Z
publishedAt: 2023-02-17T18:37:05.327Z
firstPublishedAt: 2023-02-17T18:37:05.327Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: divergent-order-value-between-marketplace-and-seller-while-using-price-override-and-promotions
locale: en
kiStatus: Backlog
internalReference: 756629
---

## Summary


When the seller item price _minus_ marketplace discounts has a negative value, it can't be applied to the item (they can't have a negative price), so it'll be considered as zero and will mess with other calculations. It happens when the marketplace is using the seller price override feature, generating higher values than the own seller account, and then combining with a promotion.


##

## Simulation



- In the marketplace, configure to overwrite the seller's price and define a higher price;
- Create a promotion in the marketplace with higher value than seller's price;
- Place an order;
- You will see the difference in the order's value between marketplace and seller.


##

## Workaround


Define the seller price equal or higher than the marketplace discounts value.



