---
title: 'Checkout UI loops when not receiving correct SLA values from logistics system'
id: 4tACwwmorLZ7NAt3zWldWL
status: PUBLISHED
createdAt: 2022-05-04T19:28:24.852Z
updatedAt: 2024-02-16T20:28:53.645Z
publishedAt: 2024-02-16T20:28:53.645Z
firstPublishedAt: 2022-05-04T19:28:25.322Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: checkout-ui-loops-when-not-receiving-correct-sla-values-from-logistics-system
locale: en
kiStatus: No Fix
internalReference: 485016
---

## Summary


We've identified a scenario where the checkout UI loops when it doesn't receive the SLA for one of the items;

Step 1 Checkout UI simulates shipping to optimize delivery and choose a shipping option beforehand, this simulation is initially done individually and with that it receives the same SLA (Normal) for both items;

However, when checkout tries to post again by sending both options as selectedSla: "Normal" logistics returns that it is not possible to honor the same SLA for both items; the UI sends again a new post with selectedSla: null for the second item leaving it unavailable, and the UI goes back to step 1.

The loop occurs because the checkout UI continues to validate and understand that there is a way to send both items through the same SLA , however during the pipeline the logistics response does not deliver Sla for the second item.




## Simulation


There is no way to easily replicate the scenario because the scenario is linked to the logistical configuration



## Workaround


N/A

