---
title: "Let me know\" email is sent even when the product is not available for the website's trade policy"
id: 577r3i32P5Yv9QIfVR5AYP
status: PUBLISHED
createdAt: 2021-02-22T20:44:52.444Z
updatedAt: 2022-12-22T20:40:56.942Z
publishedAt: 2022-12-22T20:40:56.942Z
firstPublishedAt: 2021-03-17T22:31:13.386Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: let-me-know-email-is-sent-even-when-the-product-is-not-available-for-the-websites-trade-policy
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

The __Let me know__ feature does not consider the client's trade policy when notifying the availability of an item by email.

So if the client registers in the __Let me know__ form using the trade policy 1 and the SKU is available for trade policy 2, it means that the next time the product is indexed, the system will trigger an email informing incorrectly that the item is available.

If the item is not available in any trade policy at the time of the __Let me know__ feature configuration, then nothing will happen. However, the next time the inventory number is updated, regardless of the trade policy in question, the system will send an email to the user registered in the form, indicating that the item is available when it is not.


## Simulation

1. Consider at least two trade policies (*1* and *2*).
2. Configure two loading docks (*Loading dock-A* and *Loading dock-B*). Associate *Loading dock-A* with *Trade policy 1* and *Loading dock-B* with *Trade policy 2*.
3. Configure two inventories (*Inventory-A* and *Inventory-B*). Link *Inventory-A* to *Loading dock-A* and *Inventory-B* to *Loading dock-B*.
4. Choose a SKU and activate it.
5. Add any number of this SKU to *Inventory-B*, which is connected to *Loading dock-B* and thus to *Trade policy 2*.
6. Access the website (or subaccount) using *Trade policy 1* and register in __Let me know__.
7. Force the indexing of the SKU used for the test.
8. After a few moments, the user will receive a __Let me know__ email with a link. It will redirect them to the website using *Trade policy 1*, where the item remains unavailable. In this context, the system triggers the email incorrectly because it identifies that the product is available in another trade policy.

## Workaround

There is no workaround for this scenario. If your store uses more than one trade policy in the same account or in different subaccounts, we do not recommend using the __Let me know__ feature. If your store uses trade policies and inventories that are exclusive for marketplaces, we do not recommend using this feature either.

You can develop an integration to control this process, but the difficulty level for doing that is considered moderate to high.


