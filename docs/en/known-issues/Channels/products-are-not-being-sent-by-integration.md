---
title: "Products are not being sent by integration when saving the registration"
id: 3iY2DwQyiIwIsMaicGAI6e
status: PUBLISHED
createdAt: 2018-05-04T17:26:27.239Z
updatedAt: 2022-12-22T15:09:45.266Z
publishedAt: 2022-12-22T15:09:45.266Z
firstPublishedAt: 2018-05-04T17:44:09.981Z
contentType: knownIssue
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
tag: Connections
slugEN: products-are-not-being-sent-by-integration
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

When saving the configuration of some marketplace integration in Bridge, the products are not being sent. Even forcing a reindexing of the base, the products keep not being sent.


## Simulation

1. Access the Bridge module or Integrations > Settings in the Admin menu and choose a marketplace to integrate.
2. Register the martketplace and save the configuration.

You will see in the Products tab that the integration did not attempt to send any products.

## Workaround

The solution at the moment is to make any changes in the product (add a space in the description, for example), or in the price (a change of a penny, for example) or in the inventory. This will cause the notification system to identify a change in the product and generate a notification to affiliates.

