---
title: 'Configuring promotions for marketplaces'
id: tutorials_406
status: PUBLISHED
createdAt: 2017-04-27T22:06:28.854Z
updatedAt: 2024-11-11T16:46:25.421Z
publishedAt: 2024-11-11T16:46:25.421Z
firstPublishedAt: 2017-04-27T23:03:23.902Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: configuring-promotions-for-marketplaces
locale: en
legacySlug: configure-a-promotion-for-a-marketplace
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

The VTEX promotion module allows you to create different promotions, from the most traditional to the most innovative ones. However, there are some restrictions when choosing the type of promotion for VTEX marketplaces and external marketplaces. This tutorial explains how to define the promotions and conditions that will apply in each scenario.

## Promotions available on marketplaces

Only the following [regular promotions](https://help.vtex.com/en/tracks/promotions--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI) work on marketplaces:

- Free shipping
- Percentage shipping
- Percentage price
- Price tables

The settings available for VTEX marketplaces are different from the ones of external marketplaces. Therefore, promotions in other marketplace environments are slightly different.

### Free and percentage shipping promotions

For this type of promotion, it is important to keep the following information in mind:

- Some marketplaces use their own shipping table. This prevents a shipping promotion from being applied to an order since the marketplace does not consult the shipping rate listed on VTEX.
- For the promotion to be applied to the shipping rate, the marketplace must simulate the shipping rate using the `POST` endpoint 
`https://{accountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?sc={salesChannel}&affiliateId={affiliateId}`.
- The promotion will not apply to the product price if the marketplace uses the [List Freight Values](https://developers.vtex.com/docs/api-reference/logistics-api#get-/logistics/pvt/configuration/freights/-carrierId-/-cep-/values) endpoint of the Logistics API for checking shipping rates. This endpoint shows only the shipping rates listed on VTEX without considering promotions.
- Sellers determine the discount limits that the marketplace can apply to the shipping rate. If the discount is greater than the established limit, the order will not be placed.

### Percentage price promotions

For this type of promotion, it is important to keep the following information in mind:

- Once the seller has created and activated the promotion, it does not send any notifications to the marketplace. It is up to the marketplace to check the promotional price.
- For the promotion to be applied to the product price, the marketplace must simulate the SKU price using the [Do OrderForm Simulation](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForms/simulation) endpoint of the Checkout API.
- The promotion will not apply to the product price if the marketplace uses the [Get Price](https://developers.vtex.com/docs/api-reference/pricing-api#get-/prices/-itemId-) endpoint of the Pricing API for checking prices. This endpoint shows only the prices listed on VTEX without considering promotions.
- Sellers determine the discount limits that the marketplace can apply to the total order value. If the discount is greater than the established limit, the order will not be placed. You can change your store’s settings in the [Order authorization](https://help.vtex.com/en/tutorial/how-order-authorization-works--3MBK6CmKHAuUjMBieDU0pn#price-divergence) section.

### Available settings

There are differences between the settings available for VTEX marketplaces and external marketplaces. See in the table below the features applicable in each case.

>⚠️ In the case of external integrations, configurations are unique to each marketplace, and it’s up to them to decide which features they will use.

| Settings  | Description      | Available for VTEX marketplaces? | Available for external marketplaces? |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ------------------------------------ |
| Name| Promotion name | Yes| Yes|
| Status| Option that defines if the promotion is active or inactive.| Yes| Yes| 
| Description| The internal description of the promotion| Yes| Yes|
| Allow combined promotions   | More than one promotion can be applied simultaneously, regardless of the discount type.| Yes| Yes|
| Nominal Discount| Discount granted to the total cart price.| Yes| Yes|
| Expiration Date| The promotion’s date, start and end time| Yes| Yes|
| Percentage shipping rate| Percentage discount applied to the shipping rate.| Yes| Yes|
| Promotional price table | You can use a price from the price table as a promotion. The promotional price of each SKU will be its corresponding price in the selected price table.| Yes| Yes|
| Service Level Agreement (SLA) | Specification of all VTEX services. It includes all shipping types.| Yes| No|
| The delivery address ZIP Code must        | The discount applies if the ZIP Code follows the configured rules.| Yes| No|
| Applied to the Brand| The discount applies to the selected brands.| Yes| Yes|
| Applied to the Category    | The discount applies to the selected categories.| Yes| Yes|
| Applied to the Product| The discount applies to the selected products.| Yes| Yes|
| Applied to SKUs| The discount applies to the selected SKUs.| Yes| Yes|
| Affiliates| The marketplace’s order identifier.  The discount applies to the selected affiliates.| Yes| Yes|
| Sales channels| The discount applies to a sales channel list.| Yes| Yes|
| Item price between| Sets the trade policies applicable to the promotion.| Yes| Yes|

## Promotions unavailable for marketplaces

Check the promotions that are not available for marketplaces:

* Nominal discount
* Maximum price per item
* Nominal shipping
* Maximum shipping
* Gift
* Nominal reward amount
* Buy Together - Bundle
* More for Less
* Progressive Discount
* Buy One Get One
* Campaign Promotion

### Unavailable settings

See below the settings that are not available for marketplaces:

| Name                                                                      | Description                                                                                                                                                                                               |
| ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Customer cluster                                                          | Discount given if the customer is part of the selected [cluster](https://help.vtex.com/en/tutorial/como-criar-um-cluster-de-clientes--frequentlyAskedQuestions_1724).                                     |
| Marketing tags                                                            | Used to limit the promotion's activation if the order is placed through [the VTEX Subscriptions module](https://help.vtex.com/en/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453).     |
| UTMs                                                                      | Discount given depending on the value of a given [UTM parameter](https://help.vtex.com/en/tutorial/o-que-sao-utm-source-utm-campaign-e-utm-medium--2wTz7QJ8KUG6skGAoAQuii).                               |
| Campaign audience                                                         | Allows you to segment your store's promotions by defining [target audiences](https://help.vtex.com/en/tutorial/audiencias-de-campanhas--3o7lhpNseXY2WmjZO0gQ6m#publico-alvo) that meet specific criteria. |
| Coupons                                                                   | Code that allows promotions to be applied to the total cart amount.                                                                                                                                       |
| Cart maximum or minimum total amount                                      | Applied based on the total cart amount, regardless of other promotions or shipping.                                                                                                                       |
| Number of installments                                                    | Discount given if the number of installments selected by the customer is within the specified range.                                                                                                      |
| Restriction BIN                                                           | Discount given if the card's BIN is among the specified numbers.                                                                                                                                          |
| Payment method                                                            | Discount given if the customer selects the same payment method as the one in the promotion.                                                                                                               |
| First purchase                                                            | Discount given on the customer's first purchase.                                                                                                                                                          |
| Aggregate purchase value                                                  | Discount given if the customer's total purchase amount reaches the specified amount.                                                                                                                      |
| Apply with manual prices                                                  | Allows the promotion to be applied to products with prices manually added by telesales.                                                                                                                   |
| Price "from" and "to" are the same or Price "from" and "to" are different | Refers to the prices saved for that product.                                                                                                                                                              |
| Seller filter                                                             | Defines which sellers the promotion will be applied to.                                                                                                                                                   |
| Maximum use of promotion per customer                                     | Limits the number of times each customer can receive the promotion.                                                                                                                                       |
| Maximum use of promotion per store                                        | Limits the number of times the promotion can be applied.                                                                                                                                                  |
| Maximum use of coupon per product                                         | Limits the number of times a coupon can be applied to a product.                                                                                                                                          |

## Determining the context in which promotions will be applied

If necessary, you can segment promotions for specific marketplaces. You can obtain these results by using two selectors:

- [Trade policy](https://help.vtex.com/en/tutorial/what-is-a-sales-policy--563tbcL0TYKEKeOY4IAgAE): used when all target marketplaces share the same sales channel settings (catalog, price, and logistics).
- [Affiliate](https://help.vtex.com/en/tutorial/what-is-an-affiliate--4bN3e1YarSEammk2yOeMc0): used to select one or more specific marketplaces, even if they do not share the same sales channel settings.

### Selection by trade policy

1. Create a [regular promotion](https://help.vtex.com/en/tracks/promotions--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI).
2. In the **Sales Policy** section, select the **Equal to** and **Delivered by me (Other stores)** options.
3. Select the trade policies. 
4. Click on `Save`.

### Selection by affiliates

1. Create a [regular promotion](https://help.vtex.com/en/tracks/promotions--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI).
2. Fill in the **Affiliates** field with the name of the affiliate related to the marketplace in question.
3. In the **Sales Policy** section, select the **Equal to** and **Delivered by me (Other stores)** options.
4. Click on `Save`.

>⚠️ Please remember to <a href = "https://help.vtex.com/pt/tutorial/entendendo-a-manutencao-da-base-de-dados--34P9LGs7BCIQK6acQom802">reindex all products included in the promotion</a> after you’ve created it and at the beginning and end of the promotions. This will ensure that the prices of your products are up to date.
