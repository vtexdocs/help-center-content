---
title: 'No delivery window can be created due to inconsistence in estimateDate and lastDeliveryDay for high timecost'
id: 3E5ZPyrjSOPD68vH4SXunM
status: PUBLISHED
createdAt: 2024-03-06T19:38:26.954Z
updatedAt: 2024-03-06T19:38:27.765Z
publishedAt: 2024-03-06T19:38:27.765Z
firstPublishedAt: 2024-03-06T19:38:27.765Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: no-delivery-window-can-be-created-due-to-inconsistence-in-estimatedate-and-lastdeliveryday-for-high-timecost
locale: en
kiStatus: Backlog
internalReference: 995491
---

## Summary



The `estimateDate` takes into account the total delivery time but only considering the days that the carrier delivers, so in the case of this example it does not consider weekends.
But the `lastDeliveryDay` is calculated as calendar days (consecutive days), which is `today date + delivery time + maximum number of days` configured for scheduled delivery, as it count consecutive days, it will consider the weekends.

For the system to assemble the available delivery window, it will compare if:

    lastDeliveryDay > estimateDate : TRUE


And only if meets this condition it will create the delivery window.

But with a total transit `timecost` excessive high, there is an inconsistence with the variable `estimateDate` and `lastDeliveryDay`, the condition will return `false`, and therefore no delivery window will be created.



##

## Simulation



Change the shipping configuration to the following:

- Processing days and hours of warehouse with 100 days;
- Timecost in the spreadsheet rate file with 1 day;
- Remove weekends and holidays for the shipping policy configuration;
- Schedule delivery for Monday to Friday from 0h to 23:59h;
- Maximum delivery time in Schedule delivery configuration for 5 days;

For this configuration will lead to `lastDeliveryDay=10/05/2024` and the `estimateDate=14/06/2024`;
And thus the condition will be false:

    10/05/2024 > 14/06/2024 : FALSE


and no delivery window will be created;



##

## Workaround


There is no workaround available.





