---
title: 'Cart Availability Data Pipeline'
id: 1TU6rsMUlwmSoVVLs6Oom0
status: PUBLISHED
createdAt: 2025-10-29T19:55:21.659Z
updatedAt: 2025-10-29T21:24:36.539Z
publishedAt: 2025-10-29T21:24:36.539Z
firstPublishedAt: 2025-10-29T21:24:36.539Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: cart-availability-data-pipeline
legacySlug: 
locale: en
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

The **Cart Availability** data model contains the latest information about how a store performs regarding their cart availability metric, evaluating what percentage of created carts are actually available to the shopper during checkout.

This section includes the following information:
- [Data characteristics](#data-characteristics)  
- [Table: cart_availability_silver_by_sku](#table-cart_availability_silver_by_sku)  
- [Table: cart_availability_silver](#table-cart_availability_silver)  
- [Analyses with cart availability](#analyses-with-cart-availability)  
- [Correlations with other data](#correlations-with-other-data)  

### Data characteristics

| Characteristic | Description |
|---|---|
| Data source | Obtained from information in the order form. |
| Availability | This metric is only available through the Data Pipeline. |
| History | The data history starts in October 2025. |
| Minimum update interval | One hour. |

### Table: cart_availability_silver_by_sku

The table fields are described below:

| Column name | Column type | Column description |
|---|---|---|
| main_account_name | varchar(50) | The main_account in which the cart was created. This is the main_account of the marketplace in which the order is being created, not of the seller fulfilling the order. |
| account_name | varchar(50) | The store_name (or subaccount) in which the cart was created. This is the store_name of the marketplace in which the `order_form` is created, not of the seller fulfilling the order. |
| order_form_id | varchar(40) | Unique identifier of the cart where the items are being added. |
| updated_at | timestamp | Timestamp of the event adding the item to the cart. Notice that: <ol> 1. If an item is removed and added again to the cart, only the first event is considered. </ol> <ol> 2. It is possible in some rare cases for multiple entries of the same item to be added to a cart (such as in promotions, gifts and kits). </ol> In these cases, only the first event for the item is considered. |
| af_session_id | varchar(127) | Session ID of the Activity Flow application related to the cart. |
| sales_channel | integer | Attribute used by the merchant to define the conditions to offer a product. Also known as trade policy. |
| sku_id | varchar(50) | Unique identifier of the SKU added to the cart. Also known as item_id. |
| quantity | double | Quantity of the sku added. |
| seller_id | varchar(50) | ID of the seller allocated for that item. |
| item_price | double | Price of the item. It is the actual price an item was offered to the shopper. |
| added_price | double | Total value of the items added to the cart. |
| postal_code | varchar(100) | Postal code provided by the shopper in the cart. |
| country | varchar(50) | Country of the shopper's address. ISO three-letter code. |
| item_availability | varchar(40) | The availability of the item. If the availability is different from 'available', the item is unavailable. The availability is measured at the moment that an item is added to the cart, as long as the cart has been provided with a postal code. If an item is added before the shopper has provided a postal code, the availability is instead calculated at the moment that the shopper provides the postal code. Possible values: <ul> available: the item is available</ul> <ul> withoutStock: no sellers have inventory for this item </ul> <ul> cannotBeDelivered: some sellers have inventories for this item, but there is no available delivery route to the postal code</ul> <ul> withoutPriceFulfillment: the allocated seller has a misconfigured price for the item </ul> <ul> maxNumberOfSellersReached: the total number of sellers in the cart is above the maxNumberOfSellers parameter </ul> <ul> unavailableItemFulfillment: the seller fulfilling the item did not return a valid response for the item </ul> |
| has_delivery_channel_delivery | boolean | Whether or not that item is available for delivery. |
| has_delivery_channel_pickup | boolean | Whether or not that item is available for pickup. |
| is_item_addition | boolean | Deprecated field. |
| is_item_unavailability | boolean | Deprecated field. |
| is_last_state | boolean | Auxiliary column used for the incremental load. |
| batch_id | varchar(13) | Auxiliary column used for the incremental load. |
| record_created_at | timestamp | Timestamp that the entry was added to the table. |

### Table: cart_availability_silver

The table fields are described below:

| Column name | Column type | Column description |
|---|---|---|
| main_account_name | varchar(50) | The main_account in which the cart was created. This is the main_account of the marketplace in which the order is being created, not of the seller fulfilling the order. |
| account_name | varchar(50) | The store_name (or subaccount) in which the cart was created. This is the store_name of the marketplace in which the `order_form` is created, not of the seller fulfilling the order. |
| order_form_id | varchar(40) | Unique identifier of the cart where the items are being added. |
| updated_at | timestamp | Timestamp of the event adding the item to the cart. Notice that: <ol> 1. If an item is removed and added again to the cart, only the first event is considered.</ol> <ol> 2. It is possible in some rare cases for multiple entries of the same item to be added to a cart. </ol> In these cases, only the first event for the item is considered. |
| af_session_id | varchar(127) | Session ID of the Activity Flow application related to the cart. |
| country | varchar(50) | Country of the shopper's address. ISO three-letter code. |
| postal_code | varchar(100) | Postal code provided by the shopper in the cart. |
| sales_channel | integer | Attribute used by the merchant to define the conditions to offer a product. Also known as trade policy. |
| added_price | double | The total value of items added to that cart. It is the sum of the value of all items, if multiple items were added. |
| cart_availability | varchar(50) | The cart is considered "available" only if all the items in it are also available. This availability is checked when an item is added to the cart, provided that the shopper has already entered a postal code. If the postal code has not yet been entered, the availability is determined at the moment the shopper provides it. If at least one item is not available, the cart itself is marked as unavailable. In that case, the cart's availability will match the availability status of the unavailable item, except when multiple different unavailability reasons exist—then the cart's status will be multipleUnavailableReasons. <br> Examples: <ol> 1. If two available items are added, the cart status is available.</ol> <ol> 2. If one available item and one withoutStock item are added, the cart status is withoutStock.</ol> <ol>3. If one withoutStock item and one cannotBeDelivered item are added, the cart status is multipleUnavailableReasons. </ol> <ul> Possible values: - available: all items are available. - withoutStock: no seller has inventory for this item. - cannotBeDelivered: some sellers have inventory for the item, but no delivery route is available for the postal code. - withoutPriceFulfillment: the allocated seller has a misconfigured price for the item.  - maxNumberOfSellersReached: the number of sellers in the cart exceeds the maximum allowed. - unavailableItemFulfillment: the seller fulfilling the item did not return a valid response. - multipleUnavailableReasons: more than one different unavailability reason applies at the same time. <br> |
| delivery_channel | varchar(33) | The available delivery channels for the cart are determined by considering the delivery options of all items in it. <br> Example: <ul>If Item 1 is available only for pickup-in-point, and Item 2 is available for both pickup-in-point and delivery, then the cart's delivery channel is set to delivery. </ul></br>  Possible options: <ul>- both-delivery-and-pickup-in-point: all items can be delivered or picked up at a pickup point.</ul> <ul>- delivery: delivery is the only option available for the cart.</ul> <ul>- not-delivered: no delivery channel is available, which means the cart is unavailable.</ul> <ul>- pickup-in-point: pickup-in-point is the only option available for the cart.</ul> <ul>- mixed-channel-only: some items can only be delivered, while others can only be picked up at a pickup point.</ul> |
| has_item_unavailability | boolean | Deprecated field. |
| has_item_addition | boolean | Deprecated field. |
| is_single_item_simulation | boolean | Boolean identifying if the cart has only one item or not. |
| batch_id | varchar(13) | Auxiliary column used for the incremental load. |
| record_created_at | timestamp | Timestamp that the entry was added to the table. |

### Analyses with cart availability

Here are some analyses you can perform using the cart availability tables:

- **Measure cart success rates**: Calculate the percentage of created carts that remain fully available through checkout, segmented by store, sales channel, or geography.  
- **Identify unavailability patterns**: Track which SKUs, categories, or sellers (including External Sellers) most frequently cause carts to become unavailable, and quantify the financial impact of those failures.  
- **Evaluate delivery constraints**: Compare how often delivery channel restrictions (e.g., only pickup-in-point available) contribute to abandonment, and analyze differences across postal codes.  
- **Monitor price and configuration errors**: Detect when misconfigured prices or fulfillment issues are systematically making products unavailable, allowing for quicker remediation.  
- **Benchmark seasonal trends**: Compare cart availability rates during peak shopping periods (e.g., Black Friday) against normal operations to anticipate pressure points.  

### Correlations with other data

Cart availability also becomes more powerful when combined with other data sources:

- **With Inventory**: Linking cart availability with live stock data allows you to pinpoint how often carts fail due to out-of-stock situations and quantify potential lost sales.  
- **With Orders**: By comparing unavailable carts with successful orders, you can estimate how much revenue is lost because carts could not be fulfilled. This also helps identify sellers or regions that underperform.  
- **With Navigation**: By correlating navigation paths with cart outcomes, you can understand if certain user journeys are more prone to end in unavailable carts, which is crucial for funnel optimization.  
