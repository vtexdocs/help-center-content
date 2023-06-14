---
title: 'Setting up Future Inventory (Beta)'
id: UMSGjooqRfkRbeoh94kS4
status: DRAFT
createdAt: 2020-09-21T21:53:10.713Z
updatedAt: 2022-04-06T17:28:53.703Z
publishedAt: 
firstPublishedAt: 2020-09-21T22:32:34.864Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slug: setting-up-future-inventory
legacySlug: setting-up-future-inventory
subcategory: 32vrn4K2ZscjUaIBe6w5fm
---

<div class="alert alert-info">
<p>This feature is in closed beta, which means that we are working to improve it. If you have any questions, please contact <a href="https://support.vtex.com/hc/pt-br/requests">our Support</a>.</p>
</div>

For some ecommerce operations, it is useful to have the ability to sell an item that is not available for immediate delivery, but that has an estimated date of arrival at the stock. The __Future Inventory__ feature allows just that.

## How Future inventory works

<div class="alert alert-warning">
Currently the configuration of Future Inventory is available only <a target="_blank" href="https://developers.vtex.com/reference/inventory#savesupplylot">via API</a>.
</div>

The Future Inventory API allows you to register a __Supply Lot__. This lot represents future inventory and carries two main pieces of information:
- Quantity of items.
- Arrival date of items in stock.

Upon receiving a request with this information, the API records the future availability of the items. Even though they are not currently available in stock, the checkout now shows these items as available.

In such case, purchases of these SKUs will consume the items available in the supply lot. And when shipping is calculated using items from the supply lot, the deadline for receiving the lot will be added to the final delivery time.

>Final delivery time = Delivery SLA + Deadline for receiving the supply lot

<div class="alert alert-info">
If the date of receipt is earlier than the date of the shipping calculation, the additional time will be 0 (zero), since - in this case - the supply lot has already been received.</div>

Check out the documentation for the endpoint used to save Future Inventory:
[Save Supply Lot](https://developers.vtex.com/reference/inventory#savesupplylot)

## View future inventories

To view future inventories for a given SKU, you can use the [Get Supply Lots](https://developers.vtex.com/reference/inventory#getsupplylots) endpoint. The response to this request shows the list of future inventories for an SKU in a specific warehouse.

## Restrictions

When using the Future Inventory API, be aware of the following restrictions:

- We will allow the registration of up to 10 delivery lots of one item per inventory. Lots with expired supply dates - that is, prior to the current date - continue to be considered within the limit of 10 lots.
- The order of consumption of the inventory is: first the units for immediate delivery and then the lots ordered by date of supply.

## Transfer for immediate delivery

You can transfer inventory from a supply lot to immediate delivery inventories. This transfer causes the items to be considered immediately available. With that, there is no additional time in the shipping SLA.

<div class="alert alert-info">
The transfer to immediate delivery frees up space to register a new lot. That is, if your store has 10 registered lots (the limit currently allowed) and you transfer 2 of them to immediate delivery, you now have 8 registered lots and two spaces available.
</div>

Check out the documentation for the endpoint used to transfer a Future Inventory to immediate delivery:
[Transfer Supply Lot](https://developers.vtex.com/reference/inventory#transfersupplylot)

## Supply period expiration

Through the API, it is possible to define whether a lot should continue to be used in case the supply period expires and the transfer to the immediate delivery inventory is not carried out.

This configuration is done through the `keepSellingAfterExpiration` field. If the value is `true`, the lot will continue to be used. If `false`, it will no longer be used.
