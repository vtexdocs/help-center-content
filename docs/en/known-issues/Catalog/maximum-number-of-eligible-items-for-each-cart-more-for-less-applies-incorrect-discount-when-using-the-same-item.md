---
title: "'maximum number of eligible items for each cart' + more for less applies incorrect discount when using the same item."
id: gWIMhi9RCv9BE1RvV6GiM
status: PUBLISHED
createdAt: 2024-07-30T17:14:36.972Z
updatedAt: 2024-07-30T17:14:37.931Z
publishedAt: 2024-07-30T17:14:37.931Z
firstPublishedAt: 2024-07-30T17:14:37.931Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: maximum-number-of-eligible-items-for-each-cart-more-for-less-applies-incorrect-discount-when-using-the-same-item
locale: en
kiStatus: Backlog
internalReference: 1073080
---

## Summary


When using a more for less discount along with another promotion that uses the "maximum items per cart" for the same item, both of them accumulating, in incorrect discount is given, exceeding the initially configured setup.

This happens due to the way that the checkout splits the items.

For instance, let's say you have a more for less promotion (A) set to give a "100% discount for 1 item out of every 8 inserted in the cart".

Along that, you have another promotion (B) that, for this same SKU, gives a 50% discount, limited to a maximum of 2 items.

**What is expected**:

If 80 items are inserted on the checkout, a total of 11 items should be given for free.  10 coming from (A), 1 coming from (B).

**What actually happens**:

The items are split into 3 different quantities in the checkout

(1) those that only got the discount (A)
(2) those that only got the discount (B)
(3) those that got both discount (AB)

However, line (2), which should have only 2 items with a 50% discount, actually replicates the 100% off from line (1), essentially giving 2 extra items off, in a total of 13 items, instead of 11.




##

## Simulation


Create a promotion scenario as described above or similar to it, using the "maximum number of eligible items for each cart" and a more for less promotion, both set to accumulate.

It is important to note that this issue only happens when **all of the promotions are configured for the same SKU**.


##

## Workaround


n/a (avoid using these 2 specific setting together when operating with discounts for the same SKU).





