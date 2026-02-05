---
title: 'VTEX platform settings'
id: 37hdzaRUhJqRfXH1bIRXAa
status: PUBLISHED
createdAt: 2019-02-28T23:02:24.211Z
updatedAt: 2025-01-09T15:52:41.921Z
publishedAt: 2025-01-09T15:52:41.921Z
firstPublishedAt: 2019-02-28T23:11:20.994Z
contentType: trackArticle
productTeam: Channels
slugEN: vtex-platform-settings
locale: en
trackId: 6sgd4Pagy3wNsWKBvmIFrP
trackSlugEN: amazon-integration
order: 4
---

Once you have completed all the configurations on the Amazon platform, we will start the configurations on the VTEX platform.

During the entire configuration process on the VTEX platform, always have the provided credentials and identifiers at hand. The [Seller ID and the MWS authorization token](/en/docs/tracks/amazon-account-settings), for example, are essential for configuring the integration on the VTEX platform.

## Defining the trade policy in Amazon

On the VTEX platform, a [trade policy](/en/docs/tutorials/how-trade-policies-work) determines the product assortment, pricing, and shipping strategy in a sales channel. This means that the settings that will apply to your products on Amazon are defined through the trade policy.

If you use the same catalog, pricing, and shipping strategy settings in your VTEX store and on Amazon, you don't need to [create a new trade policy](/en/docs/tutorials/creating-a-trade-policy). The same trade policy can be used for different sales channels.

You will only need to [configure a specific marketplace trade policy](/en/docs/tutorials/configuring-a-marketplace-trade-policy) if you have one of the following goals:

- Offering a different selection of products on Amazon.
- Making a different stock quantity available.
- Applying different prices to Amazon.
- Sending different promotions to Amazon.
- Configuring other payment conditions.
- Defining a different shipping strategy.

To [request additional trade policies](/en/docs/tutorials/requesting-an-additional-trade-policy), simply fill out the [Trade Policy Release form](https://docs.google.com/forms/d/e/1FAIpQLSe9qCGB_KM_xsV5e9uNe06JE8tMZrWcv6EuHUOmqTiM8oRW7w/viewform). If you have any questions, please contact our Growth Operations team through *[Support](https://supporticket.vtex.com/support)* by selecting **Commercial** and `Create a trade policy`.

For each additional trade policy, a monthly fee is charged, whether it is used for integration with certified marketplaces, partners, external or VTEX.

## Defining the shipping strategy

To sell your products on Amazon you must define a shipping strategy, i.e., the logistics for delivering your products. The shipping strategy comprises three logistical steps: [Shipping policy](/en/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3?&utm_source=autocomplete), [warehouse](/en/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3?&utm_source=autocomplete) and [loading dock](/en/docs/tutorials/shipping-policy). 

The shipping policy (carrier) is associated with your store's warehouse through the loading dock. The loading dock is the intermediary between the carrier and your store's warehouse, and the place where these conditions are configured.

If you would like to use the same shipping strategy defined for your VTEX store when integrating with Amazon, you do not need to create new logistics settings. However, if you want to create a specific shipping strategy for the marketplace, you must perform the following steps:

1. [Adding the shipping policy](/en/tutorial/politica-de-envio--tutorials_140#cadastrar-uma-politica-de-envio) associated with the trade policy used in the integration.
2. [Adding the loading dock](/en/docs/tutorials/managing-loading-docks) associated with the trade policy used in the integration.
3. [Adding the inventory](/en/docs/tutorials/managing-warehouses) associated with the dock created in the previo us step.

If you want to make sure that the configuration was successful, you can use the [shipping simulator](/en/docs/tutorials/shipping-simulation). This tool allows you to check the delivery terms of a product without having to actually place an order.

> ℹ️ Amazon selects the type of shipping according to the [template](/en/docs/tutorials/shipping-rate-template) [exported](/en/docs/tutorials/importing-and-exporting-an-inventory-spreadsheet) by the seller. Therefore, the template exported by the retailer must be aligned with the template registered on the VTEX platform, thus reducing the chance of divergences.

### Processing time

Amazon has a field called *"fulfillment latency"*, which is used to configure the time to prepare the delivery of a certain product. To use it when integrating your store with Amazon, you must fill in the **Processing time** field when [registering the loading dock](/en/tutorial/como-cadastrar-doca) associated with the [trade policy](#defining-the-trade-policy-in-amazon) used for Amazon. If this field is not filled in, Amazon will use its default value (2 days). 

> ⚠️ Filling in this field is essential, because if your store delays the delivery of an order, your account may be blocked.
