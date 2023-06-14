---
title: Target audience settings
id: 4pSWJqg6EoI8mRjPhFNqLX
status: DRAFT
createdAt: 2020-06-29T21:25:09.623Z
updatedAt: 2022-07-21T22:00:34.537Z
publishedAt: 
firstPublishedAt: 2020-07-27T17:00:52.914Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: target-audience-settings
legacySlug: target-audience-settings
subcategory: 2cI57eZ3ZiWSeaQs26Gwys
---

After [configuring a campaign audience](https://help.vtex.com/en/tutorial/creating-campaigns--6cnuDZJzIkIeocewAQQK4K), you can create a target audience for it. 

The target audience segments the customers and conditions that are eligible for the campaign audience. If it is an ongoing and active campaign audience, the promotions associated with it will be activated when meeting the defined target audience criteria.

When all campaign audience restrictions are met and the campaign audience is activated and eligible, it doesn’t necessarily mean that the promotions associated with it are applicable. For this, the restrictions defined in the [campaign audience promotion](https://help.vtex.com/en/tutorial/creating-a-campaign-benefit--1ChYXhK2AQGuS6wAqS8Ume) must also be met.

## Define your target audience

- Name: target audience name.

## Items to use for this target audience

__Categories, Brands, Collections, and SKUs__: must meet all added conditions. Select the Categories, Brands, Collections, and SKUs that you want to include in the campaign audience.

Example: if a category and a brand are added, the campaign audience will only be activated if the product meets both conditions. 

__At least 'X' products meet the criteria above__: you can only configure it if all connectors are configured with the value "Equal to". 

### Conditions for the target audience to be applicable

- __Minimum and maximum order value__: The campaign audience will be activated if the total value of the shopping cart is within the range of the values filled in here. This total value will consider the sum of the products in the shopping cart that are contemplated in the campaign audience.
- __Use history in promotion__: If selected, choose the time period in which the history should be considered. You can add specific dates or count days from today's date.
- __Item value between__: The campaign audience will be activated if the value of the item meets the value range filled in here.
- __Campaign Restriction by BIN__: The campaign audience will be activated if the card BIN is among those filled in here.
- __Marketing Tags__: This field is used to restrict the activation of the campaign audience if the purchase is made using [VTEX’s Subscription System](https://help.vtex.com/en/tutorial/how-to-configure-subscriptions%20--1FA9dfE7vJqxBna9Nft5Sj). To configure it, enable it and enter the `vtex-recurrence` value.
- __Cluster of Customers__: The campaign audience will be activated if the customer is registered in the selected cluster.
- __Maximum number of installments__: The campaign audience will be activated if the number of installments selected by the customer is less than or equal to the maximum number added here.
- __Only on the first purchase__: The campaign audience will only be activated if it's the customer's first purchase.
- __Initial and current prices are equal__ or __Initial and current prices are different__: Only one option can be selected. It refers to the values added for the product.
- __Delivery zip code must__: The campaign audience will be activated if the zip code meets the configured rule.
- __Affiliates__: The campaign audience will be activated if the purchase is made in one of the configured affiliates. __Warning__: If the affiliate is not a VTEX store, this option does not apply.
- __utm_source__: select the desired utm_source or create a new one to link to the campaign audience.
- __utm_campaign__: select the desired utm_campaign or create a new one to link to the campaign audience.
- __Shipping type__: The campaign audience will be activated if the shipping type is the same as the one added here.
- __Apply discount only when one of the above carriers is selected by the customer__: The campaign audience will be activated only after the customer selects the shipping type. 
- __Payment method__: The campaign audience will be activated if the payment method selected by the customer is the same one added here. This campaign audience will only be activated at checkout, when the customer selects the same payment method added here. __Warning__: campaign audiences by payment method or number of installments do not meet orders paid with two cards or gift cards.
