---
title: "B2W integration: automate picking request with B2W Coleta"
id: 3yRXLH2Zc7dIOPwVWmYz26
status: CHANGED
createdAt: 2019-11-01T17:10:58.783Z
updatedAt: 2020-11-27T19:40:29.236Z
publishedAt: 2019-12-31T15:13:42.979Z
contentType: updates
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slug: b2w-integration-automate-picking-request-with-b2w-coleta
legacySlug: b2w-integration-automate-picking-request-with-b2w-coleta
announcementImageID: ""
announcementSynopsisEN: VTEX will provide a new automatic integration with B2W Coleta (“Pickup”) - one of the B2W logistics solutions
---

Starting November 1st, 2019, VTEX will provide a new automatic integration with B2W Coleta (“Pickup”) - one of the B2W logistics solutions.

Now, you simply have to enable the service with B2W and request items be picked up from your distribution center. No additional VTEX setup is needed, you just have to follow the orders flow in admin.

## What changes
 
B2W Coleta (“Pickup”) is B2W’s solution for the Picking stage of a logistics route. It entails the process of picking orders from a distribution center and sending those to a carrier.

When retailers integrate their store with B2W platform services, they also contract a couple of services. One of these is B2W Coleta (“Pickup”), where B2W itself is charged with Picking the orders.
 
However, this process is brokered by SkyHub - B2W’s integration platform. Previously, retailers had to access SkyHub’s panel to change the order’s status and “make each one available for pickup”, one by one.

The new integration automates this process. As soon as an order is billed, the picking request is sent out automatically by VTEX’s system. Everything is done following the default ecommerce flow: first the order is invoiced by the ERP to then, automatically, bill it in VTEX. 
 
The retailer just needs to follow up as to whether the items will be correctly delivered to the Orders Management module.
 
Bear in mind that B2W ships using Direct and Correios. This B2W Coleta call only affects Direct. 

## How it works
As stated, an order can only be picked up from the distribution center after is has been billed.

The integration works in two different scenarios:

- __Order having a single item__: when issuing the order’s invoice, VTEX’s Orders Management will search for that specific invoice’s item and will send a picking request to B2W.

- __Orders having two or more items__: in this scenario, items may be billed apart. In such cases, the system waits until the last item is invoiced to then request picking.

The retailer may therefore, if warranted, adapt some of the billing flow of its ERP.

## Main advantages

- Processes centralized into a single admin;
- Automated and integrated operation.

For more on how to configure the integration with SkyHub/B2W, access the following link: https://help.vtex.com/en/tracks/b2w-integration-set-up?locale=en
