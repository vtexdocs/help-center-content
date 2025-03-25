---
title: 'Divergence in kit weight after calculations involving decimals in weight'
id: 4wWyTmTAd2h2oxw5HtGn6V
status: PUBLISHED
createdAt: 2022-09-13T19:31:43.534Z
updatedAt: 2022-11-25T21:58:57.873Z
publishedAt: 2022-11-25T21:58:57.873Z
firstPublishedAt: 2022-09-13T19:31:44.068Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: divergence-in-kit-weight-after-calculations-involving-decimals-in-weight
locale: en
kiStatus: Backlog
internalReference: 657186
---

## Summary


In certain cases involving kits, the shipping policy may not be available, this can happen due to the logic used for the calculations that involve the weight.
Initially we divide the total weight of the kit by the quantity of the items, the result is taken as the unit weight of each item, and this value is presented with 7 decimal points after the comma. In a second moment, we do the reverse calculation, multiplying the unit weight by the quantity of items, but using only 4 decimal points, which generates a different result from the first calculation, and may lead the system to consider a different value than the real value of the kit's weight.



## Simulation


Add the SKU of a kit to the simulation,
Divide the total weight value by each item, consider using 7 decimal points here;
Now with the value resulting from the above account make the following calculation; multiply the unit weight by the quantity of items, consider here 4 decimal points;
Note that the value of the weight considered by the system will be different;



## Workaround


Has no workaround

PS.: Add images and attachments to reinforce your description

