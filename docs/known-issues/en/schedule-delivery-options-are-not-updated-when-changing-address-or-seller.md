---
title: 'Schedule delivery options are not updated when changing address or seller'
id: z1sjFNyZVUJAR7G95itfT
status: PUBLISHED
createdAt: 2023-06-12T12:07:06.920Z
updatedAt: 2023-06-12T12:14:23.384Z
publishedAt: 2023-06-12T12:14:23.384Z
firstPublishedAt: 2023-06-12T12:12:13.214Z
contentType: knownIssue
productTeam: Checkout
author: 3iOk6R6XYZ9O18JHFLPk43
tag: Checkout
slug: schedule-delivery-options-are-not-updated-when-changing-address-or-seller
kiStatus: Backlog
internalReference: 288574
---

## Summary

__Scenario 1:__ In an identified cart (but not logged), with a masked address in the shipping step, when changing between available addresses, the window delivery options are not recalculated in the UI. 

__Scenario 2:__ In a cart where two white-label sellers are configured with the same SLA Id, but different delivery window options. After changing the selected delivery option and the seller is changed, the delivery window options are not recalculated in the UI.

There is a request to the API, which returns with the "deliveryWindow", but the UI doesn't update the component. When selecting an invalid delivery window, going to the payment step is not possible to finish the purchase.

## Simulation

__Scenario 1:__

- Register a shopper with two addresses;
- Assemble a cart and change between the available addresses in the shipping step;
- Select the delivery window.

__Scenario 2:__

- Configure two different white-label sellers with the same SLA Id for scheduled delivery but with different delivery windows;
- Each of the white-label sellers must also have their own scheduled delivery option;
- Select the specific scheduled delivery for one of the sellers;
- Change to the scheduled delivery with the same SLA Id and select the delivery window.

## Workaround

__Scenario 1:__ N/A

__Scenario 2:__ Configure the same delivery window for all white-label sellers or change the SLA Id.

