---
title: 'What is Order Configuration'
id: 2t6UQoFrFSSGW8CGEbA0r5
status: PUBLISHED
createdAt: 2020-08-20T16:17:38.285Z
updatedAt: 2020-09-04T16:29:27.110Z
publishedAt: 2020-09-04T16:29:27.110Z
firstPublishedAt: 2020-09-04T16:23:11.568Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: what-is-order-configuration
legacySlug: what-is-order-configuration
locale: en
subcategoryId: 1GujN7Pa7NESCz0sB8srX4
---

B2B configurations are different from those of B2C. As orders can be placed with several purposes, such as resale or personal consumption, you should have different prices for each purchase case.

The Order Configuration feature provides a more customizable experience for the B2B store. It customizes prices for each situation in which the order will be invoiced. You can define any criteria for determining consumption profiles in the store.

If you don't know which criteria to configure, we recommend using the default:

- __Order type:__ What is the consumption type of the order.
- __State:__ In Brazil, states impose different tax rates on products. This criterion allows the application of different price tables for each state.

### How does it work?

To install the Order Configuration application in your Admin, see [our VTEX IO documentation](https://vtex.io/docs/components/content-blocks/vtex.order-configuration/readme/).

Once the application has been installed, usage configurations are defined in [Price Simulations API](https://developers.vtex.com/reference/price-simulations-api-overview).

You must associate a [price table](https://help.vtex.com/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/1wAm5m3IUfIj6maBdaRJt8) with each scenario via API. This way, when users configure their purchase conditions, they will receive the prices referring to that rule.

If you configure a scenario that has no price table linked to it, it will use a default price table.

> ℹ️ Users need to be logged in to use Order Configuration and view the different prices based on their configurations.

