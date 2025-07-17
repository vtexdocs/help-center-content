---
title: "Deactivated payment methods continue to be displayed."
id: eZNUFri2GvTOjzoxBXyXf
status: PUBLISHED
createdAt: 2025-05-30T11:58:40.599Z
updatedAt: 2025-05-30T18:27:02.037Z
publishedAt: 2025-05-30T18:27:02.037Z
firstPublishedAt: 2025-05-30T11:58:41.232Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: deactivated-payment-methods-continue-to-be-displayed
locale: en
kiStatus: Backlog
internalReference: 1235817
---

## Summary


Changes made to the payment rules of subaccounts are not reflected for the shopper. This results in payment methods that should no longer appear at checkout continuing to be displayed, which ultimately leads to a poor shopping experience, as shoppers will not be able to complete their purchase. 


##

## Simulation



1. Set up a VTEX environment with a main account (e.g., **myAccount**) and a subaccount that shares the same suffix as the main account (e.g., sub**myAccount**), both active and recognized by the system.
2. Ensure both accounts have at least one configured salesChannel (e.g., salesChannel 4). Both accounts should have active and configurable payment rules.
3. Modify or deactivate/activate relevant payment methods for the subaccount.
4. Simulate a purchase at the checkout of the subaccount (submyAccount) and observe that the change made to the subaccount's payment rule does not take effect at checkout; the shopper sees the previous configuration, not the updated one.


##

## Workaround


Open a ticket for the product support team.





