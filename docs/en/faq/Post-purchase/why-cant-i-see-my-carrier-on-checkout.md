---
title: "Why can't I see my carrier on checkout?"
id: frequentlyAskedQuestions_165
status: PUBLISHED
createdAt: 2017-04-27T22:39:09.470Z
updatedAt: 2023-08-25T15:13:42.026Z
publishedAt: 2023-08-25T15:13:42.026Z
firstPublishedAt: 2017-04-27T23:01:43.444Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_84
slug: why-cant-i-see-my-carrier-on-checkout
locale: en
legacySlug: why-cant-i-see-my-carrier-on-checkout
---

Selecting a carrier for delivery is a mandatory step during checkout when placing an order on the VTEX platform.

However, sometimes a carrier might not be displayed at checkout. We have separated six scenarios in which this situation can occur, along with their respective solutions.

It's worth pointing out that before reading this article, you must ensure that all [carriers are registered](https://help.vtex.com/en/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE) on the platform. In addition, all solutions are performed in the [Shipping](https://help.vtex.com/pt/tutorial/visao-geral-logistics--tutorials_143) module.

## Carrier type conflict 

Carriers should be grouped into categories upon registration, including the [type of delivery](https://help.vtex.com/en/tutorial/como-funciona-o-tipo-de-entrega/) associated with each carrier. During checkout, the _delivery types_ are displayed rather than the name of each carrier. 

Checkout will always highlight the cheapest/fastest carrier from the options of the same type of delivery. Thus, a carrier will not appear at checkout when another of the same type has a better cost/delivery option registered. 

>⚠️ When there is a tie between carriers, the tiebreaker criterion is to have the lowest shipping cost.

### Solution

If you want all carriers to be displayed, you should register these in the **Store Settings > Shipping > Settings** as carriers of _different delivery types_.

## Carrier does not serve address

When registering a new carrier, the client should insert the ZIP code range or geolocation polygon that this carrier can serve in the [shipping spreadsheet](https://help.vtex.com/en/tutorial/--45I9m2rknucSmYigA2AE0G "shipping spreadsheet"). The spreadsheet fields related to location are `country`, `ZIPCodeStart`, `ZIPCodeEnd` and `PolygonName`.

If the address given by the user does not fall into a zip code range which a carrier serves, that particular carrier will not be shown as a possible option.

### Solution

You should check the [shipping spreadsheet](https://help.vtex.com/en/tutorial/--45I9m2rknucSmYigA2AE0G "shipping spreadsheet") to see if the configured zip code range or geolocation polygon encompasses the desired delivery address.

## Volume exceeds maximum allowed limit 

If an item exceeds the _maximum limit_ registered in the shipping spreadsheet, the order is not taken into account by the carrier.

### Solution

In this case, you should check carrier settings in **Store Settings > Shipping > Settings** to see if the configured max volume matches that of the carrier.

To do this, you should download the shipping spreadsheet, change the values of the MaxVolume column and import the spreadsheet again. 

## Shipment weight exceeds max allowed

If an item exceeds the _maximum weight limit_ registered in the shipping spreadsheet, the order is not taken into account by the carrier.

### Solution

The way to do this is similar to the previous setting: access the carrier setting in **Store Settings > Shipping > Settings** and check whether the max set weight matches the limit of the carrier.

This time however, change the values for the fields marked `weightStart` and `weightEnd` in the shipping spreadsheet. Afterwards, import the document again.

## Shipment splitting not allowed

An order may be split into two shipments, for example: if the order has 40kg, but the carrier only allows 30kg per shipment, two 20kg shipments may be authorized in this case. If your store doesn't have shipment splitting activated and the order exceeds the carrier limit, that carrier will not be shown as an option during checkout.

#### Solution

To do this, enable the [split my shipment](https://help.vtex.com/en/tutorial/--tutorials_109) option, located in **Store Settings > Shipping > Settings**.

## Optimization of shipping options at Checkout

To improve the customer's shopping experience, the**Optimization of shipping options** functionality, also known as **Lean Shipping**, allows the most expensive and longer shipping options not to be shown to the customer on the Checkout screen. As a result, some carriers may be omitted in certain ordering scenarios.

#### Solution

Disable the function [Optimization of delivery options at Checkout](https://help.vtex.com/en/tutorial/optimization-of-shipping-options-at-checkout--6DeGO9eBSFWe4XkoS0SxAB) in your store.

>⚠️ By disabling this function in Admin VTEX, all available shipping options will be displayed in the Checkout process. However, if the [Multiple Deliveries](https://help.vtex.com/en/tutorial/order-split-and-delivery-split--jQvzA6QgSd51e2p6bthoV#) functionality is enabled in the store and there are different delivery options between the selected items in the cart, the **Optimized Delivery Options** will continue to be displayed. That is, delivery optimization will be needed to handle multiple packages (items with different delivery options).
