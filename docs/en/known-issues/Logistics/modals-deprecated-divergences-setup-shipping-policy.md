---
title: 'Modals Deprecated Divergences setup - Shipping Policy'
id: TYWgIv5xOTUBWdC63FbK5
status: PUBLISHED
createdAt: 2022-05-18T18:20:55.870Z
updatedAt: 2024-02-16T20:27:05.367Z
publishedAt: 2024-02-16T20:27:05.367Z
firstPublishedAt: 2022-05-18T18:20:56.247Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: modals-deprecated-divergences-setup-shipping-policy
locale: en
kiStatus: No Fix
internalReference: 445866
---

## Summary


There is a scenario regarding used and deprecated modals unmatch.

The shipping policies does not show correct used deprecated modals and it is causing doubts on simulations because the shipping policy is not alowed to handle.

Everything looks normal on UI setup, but checking on API is possible to see the unmatch of modals.




## Simulation


The SKU has a deprecated modal configured.
At the Shipping Policy does not show as deprecated on UI.




## Workaround


There is two ways of workaround to fix that, the first one is change the Modal on SKU to one suported by Shippng Policy.

Or including the deprecated one on Shipping Policy by API.

