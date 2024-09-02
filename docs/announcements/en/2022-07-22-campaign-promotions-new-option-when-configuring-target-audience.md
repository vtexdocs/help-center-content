---
title: 'Campaign promotions: New option when configuring target audience'
id: UJOyf1nYJ0xHXl88RytJ5
status: PUBLISHED
createdAt: 2022-07-22T14:00:40.004Z
updatedAt: 2022-07-25T13:00:56.738Z
publishedAt: 2022-07-25T13:00:56.738Z
contentType: updates
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: campaign-promotions-new-option-when-configuring-target-audience
locale: en
legacySlug: campaign-promotions-new-option-when-configuring-target-audience
announcementImageID: ''
announcementSynopsisEN: 'Use multiple target audiences in a campaign audience simultaneously, instead of applying audiences alternatively.'
---

Promotions dedicated to segments of audience are strategic actions for attracting and retaining customers. At VTEX, a [campaign promotion](https://help.vtex.com/en/tutorial/campaign-promotion--1ChYXhK2AQGuS6wAqS8Ume) allows you to reach specific target audiences within a single [campaign audience](https://help.vtex.com/en/tutorial/campaign-audiences--3o7lhpNseXY2WmjZO0gQ6m).

We have improved the campaign audience settings so that you can add up target audiences instead of using just one audience at a time. Therefore, you can combine different criteria and be even more specific when defining the audience benefiting from a promotion.

## What has changed?

In the VTEX Admin, **Products > Promotions and Taxes > Campaign Audience > New Campaign Audience**, in the settings related to the **Target Audience**, we added the "and" option, where there was previously only the "or" option. This means that now you can apply a criteria adding logic ("and") besides the pre-existent alternative logic ("or"). Please see the image below:

![publico-alvo-e-ou-en](//images.ctfassets.net/alneenqid6w5/2NrpuE4MN7q6qaHI6mkoCe/655312e51c8e30a847cb012d4382de39/en-publico-alvo.gif)

Using the new option, you can create campaign promotions flexibly combining different criteria.

In the food category, for example, when adding a campaign audience, you can create one target audience defined by purchasing an item from the **Pizza** category and a different target audience defined by purchasing an item from the **Drinks** category. When selecting the “**and**” option to apply both criteria and associate that audience to a campaign promotion, you can offer an exclusive discount or gift to customers who meet both criteria.

Besides the change in the interface for creating and editing campaign audiences, we've added the `isAndOperator` in the API routes related to Campaign Audiences. Check out the [Promotions & Taxes API](https://developers.vtex.com/vtex-rest-api/reference/setcampaignconfiguration) documentation for more details.

## Why did we make this change?

Our goals for including the new option when adding a target audience were the following:

* Have a more flexible configuration.
* Meet more campaign promotion scenarios.
* Enable more specific promotional actions to reach the desired audience.

## What needs to be done?

No action is needed. The change will be automatically implemented in all VTEX stores.

For more information on campaign promotions and campaign audiences, please refer to our documentation:

- [Creating a campaign audience](https://help.vtex.com/en/tutorial/creating-campaign-audiences--6cnuDZJzIkIeocewAQQK4K)
- [Campaign Audiences](https://help.vtex.com/en/tutorial/campaign-audiences--3o7lhpNseXY2WmjZO0gQ6m)
- [Creating a campaign promotion](https://help.vtex.com/en/tutorial/campaign-promotion--1ChYXhK2AQGuS6wAqS8Ume)
- [Promotions & Taxes API](https://developers.vtex.com/vtex-rest-api/reference/setcampaignconfiguration)

