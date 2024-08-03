---
title: 'Omnishipping component will not fill the PickupReceiver field when the client first informs an address for delivery'
id: 0vYgYP5NTflaVEBiAchhL
status: DRAFT
createdAt: 2023-12-01T14:11:00.160Z
updatedAt: 2023-12-04T13:28:38.612Z
publishedAt: 
firstPublishedAt: 2023-12-01T14:11:00.848Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: omnishipping-component-will-not-fill-the-pickupreceiver-field-when-the-client-first-informs-an-address-for-delivery
locale: en
kiStatus: Backlog
internalReference: 945896
---

## Summary



When using the **Omnishipping** component on checkout, the **PickupReceiver** field will show blank when it should have the name the client input in the Identification step. This only happens if the client first informs an address for delivery and then clicks on the Pickup tab to select a pick-up point.


##

## Simulation



1. Install the Omnishipping component in a store without any customizations on checkout
2. Start a checkout process and fill the identification information
3. Select an address for delivery but then click in the Pickup Option
4. The PickupReceiver field will show blank



##

## Workaround


N/A





