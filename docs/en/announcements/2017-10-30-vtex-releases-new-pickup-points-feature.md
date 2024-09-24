---
title: 'VTEX releases new Pickup Points feature'
id: 3Nba5qVpEsmQKwu82Ao4s
status: PUBLISHED
createdAt: 2017-10-30T20:47:42.057Z
updatedAt: 2019-12-31T15:12:52.626Z
publishedAt: 2019-12-31T15:12:52.626Z
contentType: updates
productTeam: Post-purchase
author: authors_59
slugEN: vtex-releases-new-pickup-points-feature
locale: en
legacySlug: vtex-releases-new-pickup-points-feature
announcementImageID: ''
announcementSynopsisEN: 'Using the concept of Delivery Channels, we changed the registration and administration of order picking points.'
---

In view of the innovation needs of our customers, VTEX releases its new Pickup Points feature.

Using the concept of Delivery Channels, we changed the registration and administration of order picking points. Previously, the configuration of the pickup points was made at the Warehouse Dock. Now, we have included a new Pickup Points tab in the Logistics module, where the picking locations must be registered.

In this version, the Pickup Points must be associated with some Carrier in the Logistics module. In this way, the retailer can configure in the freight spreadsheet which CEPs will be served by the Pickup Points linked to a carrier.

## Why did we do this?

This feature was based on a new concept, which we call Delivery Channel. Previously, all deliveries were seen in our API as being "delivery", including the Pickup Points registered at the Warehouse Docks. Now, we are creating the "pick-up-point" type. In this way, there are now two Delivery Channels: "delivery", for home delivery and "pick-up-point", for picking.

We have decided to separate the delivery channel information because this gives us more flexibility, with greater opportunities to evolve our product, creating a better buying experience for the end customer, increasing sales. In addition, this organization in delivery channels creates greater ease in the administration and registration of the Pickup Points.

## Actions Required

This update does not break any current logistics configuration.

However, it should be noted that in the new criteria, the old pickup points will be considered as "delivery". The new pickup points will be created with the "pick-up-point" delivery channel. Thus, to have access to new releases that contemplate pickup points natively, the retailer must configure his pickup points in this new way.

Also, regarding the API, the difference between the new and the old version is that, in the previous version, the delivery was identified only by the variable sla\_Id. At the present one, delivery will be identified by sla\_Id and Delivery Channel.

To learn how to register the new Pickup Points, please access our [tutorial](/en/tutorial/registering-pickup-points).
