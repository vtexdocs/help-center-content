---
title: 'How shipping calculation works'
id: tutorials_116
status: PUBLISHED
createdAt: 2017-04-27T22:18:59.694Z
updatedAt: 2023-07-25T19:55:42.137Z
publishedAt: 2023-07-25T19:55:42.137Z
firstPublishedAt: 2017-04-27T23:00:43.230Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: how-shipping-calculation-works
legacySlug: understanding-the-rule-of-priority-on-freight-calculation
locale: en
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

During the shopping experience, when the customer enters their location at checkout, the VTEX platform analyzes the [shipping strategies](/en/docs/tutorials/shipping-strategy) suitable for the order and displays the available shipping options to the customer.

> ℹ️ In the window display stage of the shopping flow, when the customer has not yet informed their address, the products displayed belong to the sellers already configured as [comprehensive sellers](/en/docs/tutorials/comprehensive-seller) or using the [Region](/en/docs/tutorials/setting-up-price-and-availability-of-skus-by-region) feature. These sellers are able to ship orders to all regions covered by the marketplace operation.

This article presents a general overview of the shipping calculation and is divided into the following sections:

- [Selecting logistics combinations](#selecting-logistics-combinations)
- [Configuring logistics priorities](#configuring-logistics-priorities)
- [Shipping time estimate](#shipping-time-estimate)

## Selecting logistics combinations

To determine which combination of logistics steps configured by the store is the best option for order fulfillment, the VTEX platform makes a selection of logistics combinations for each shipping method:

- **Delivery:** The customer receives the order at their address. 
- **Pickup:** The customer picks up the order from a [pickup point](/en/docs/tutorials/pickup-points).

> ℹ️ Both delivery and pickup have the same selection criteria. However, the pickup option has one additional criterion, described further on in this article.

The selection of logistics combinations is made according to the criteria below, applied in the following order:

1. **Logistics route validation:** The logistics route combines the [shipping policy](/en/docs/tutorials/shipping-policy), [loading dock](/en/docs/tutorials/loading-dock) and [warehouse](/en/docs/tutorials/warehouse) able to cover the order criteria, including item availability and customer location. The VTEX platform analyzes which logistics routes cover the shipping in this first validation step. The following aspects are taken into account:
<ul>
  <li>**Shipping rate template attributes:**i.e., size, weight, ZIP code range and modal. The [shipping rate template](/en/docs/tutorials/shipping-rate-template) is filled out according to the [carrier’s](/en/docs/tutorials/carriers-on-vtex) service-providing contract. The carrier must fulfill the order per item features and customer location coverage.</li>
  <li>**Inventory availability:** The stock is the physical location where items are stored, while [inventory](/en/docs/tutorials/managing-stock-items) is the list of SKUs of available stocks for sale. This criterion confirms the order items are available in a stock, and that the stock has at least one loading dock available.</li>
</ul>
<br>
  > ⚠️ In case of a [kit](/en/docs/tutorials/what-is-a-bundle) shipment, there are two conditions: <ul> <li>The kit components must have the same [loading dock](/en/docs/tutorials/loading-dock).</li> <li>The kit components must be available in the [inventory](/en/docs/tracks/inventory).</li> </ul> For more information, please see the article [How to calculate the kit shipping rate](/en/docs/tutorials/how-to-calculate-the-kit-freight).

2. **Inventory prioritization:** The previously selected logistics routes are organized with the [inventory](/en/docs/tutorials/managing-stock-items) as a priority criterion. The lower the order of SKU quantity in stock, the higher the priority of the logistics route selection. So inventories with small item quantities are not blocked out. The logistics routes are listed in order, placing the top priority item in the first place and the lowest priority item in the last place.
3. **Package grouping:** The VTEX platform calculates how the item orders may be split into packages to estimate the division into packages and [consignments](/en/docs/tutorials/setting-up-shipment).
4. **Calculating price and shipping time:** The VTEX platform calculates the package price and shipping time, reordering the priority list of logistics routes according to the criteria below, in the following order:
<ul>
  <li>Lowest price</li>
  <li>Shortest time</li>
  <li>Lowest package split</li>
  <li>[Priority loading docks](/en/docs/tutorials/managing-loading-docks#campos-de-cadastro)</li>
</ul>
<br>
  > ℹ️ When there is a tie between loading docks, the tiebreak criterion is the [overhead](/en/docs/tutorials/managing-loading-docks), which represents a value in number of days that will determine the most advantageous loading dock for a given shipment. The lower the overhead, the higher the chances for a loading dock to be selected. Please note that the overhead is not considered when calculating the shipping time.

5. **Exclusive criterion for the pickup option:** There is an additional step in the selection when analyzing [pickup points](/en/docs/tutorials/pickup-points). The VTEX platform creates a list of eligible pickup points, using as criterion the shortest distance between the pickup point and the customer's location.

The final result of the logistics configuration selection is an ordered list of eligible logistics routes. During checkout, however, the customer will be able to choose from up to two carrier options for each shipping method:

- **Delivery:** The fastest and cheapest option.
- **Pickup:** The fastest and cheapest option.

## Configuring logistics priorities

You can configure different priorities and criteria for [logistics](/en/docs/tutorials/fulfillment-logistics-vtex)-related steps in the VTEX Admin:

- **Loading docks:** Priorities are configured when [adding a new loading dock](/en/docs/tutorials/managing-loading-docks#campos-de-cadastro).
- **Shipping rates:** The shipping rate prices are configured in the [shipping rates](/en/docs/tutorials/shipping-rates), except for the [loading dock rate](/en/docs/tutorials/total-shipping-cost), which is an optional value, configured when adding a new loading dock to a warehouse.
- **Delivery time:** The shipping time is configured in the [SLA estimate](#shipping-time-estimate).
- **Package splitting:** The adopted criteria are configured in the Checkout module. Learn more in [package splitting](/en/docs/tutorials/order-split-and-delivery-split).

## Shipping time estimate

SLA stands for _Service Level Agreement_, and in [logistics](/en/docs/tutorials/fulfillment-logistics-vtex) it refers to the shipping time estimate for a customer's order, which must agree with the terms established during purchase.

The SLA is calculated using the following fields and parameters:

- [Shipping policy](/en/docs/tutorials/shipping-strategy): `Business hours`, `Weekends and Holidays`, `Scheduled delivery` and `TimeCost` ([shipping rate template](/en/docs/tutorials/shipping-rate-template)).
- [Loading dock](/en/docs/tutorials/loading-dock): `TimeCost`.

A shipping time estimate can be obtained using the [Shipping simulator](/en/docs/tutorials/shipping-simulation), which considers the VTEX store [shipping strategies](/en/docs/tutorials/shipping-strategy).

> ℹ️ The [Shipping simulator](/en/docs/tutorials/shipping-simulation) result is only an approximation since the determining factors are only provided at checkout, such as carrier availability at the time of purchase, payment confirmation time and [white label sellers' selection](/en/docs/tutorials/white-label-sellers-selection) result.

## Learn more	

- [Shipping strategy](/en/docs/tutorials/shipping-strategy)
- [Carriers on VTEX ](/en/docs/tutorials/carriers-on-vtex)
- [How the reservation works](/en/docs/tutorials/how-does-reservation-work)
- [Logistics](/en/docs/tutorials/fulfillment-logistics-vtex)
- [Managing warehouses](/en/docs/tutorials/managing-warehouses)
