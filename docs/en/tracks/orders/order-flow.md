---
title: 'Order flow'
id: 4811ExCe3WrEiRMV3sy9n8
status: PUBLISHED
createdAt: 2019-11-14T13:46:22.682Z
updatedAt: 2023-10-24T15:32:07.852Z
publishedAt: 2023-10-24T15:32:07.852Z
firstPublishedAt: 2019-11-14T15:38:27.680Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: order-flow
locale: en
trackId: 2xkTisx4SXOWXQel8Jg8sa
trackSlugEN: orders
---

The [Order flow](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196) is the path taken by an order inside VTEX platform, from the moment the customer clicks the Checkout button until the order is invoiced or canceled.

Order changes - whether caused by the customer, the store, or external systems - generate changes to the __order status__. And with that, the order moves within the flow.

## Marketplaces and Sellers

[Marketplace and Seller](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402) concepts are critical to understanding the flow of an order at VTEX. Let's understand why:

- __Marketplace__ is the environment where the order is closed, ie, where the customer performs the checkout process.
- __Seller__ is the owner of the SKU. It is therefore responsible for the fulfillment - that is, for delivering the product to the customer.

<div class="alert alert-info">
Every store that sells products in its own environment and makes its own deliveries is a Marketplace and a Seller at the same time.
</div>

It's important to understand these concepts because the Marketplace's order flow is different from the Seller's order flow.

## Marketplace Order Flow

![screenshoot fluxo marketplace EN](//images.ctfassets.net/alneenqid6w5/6S7796dGpdWlRojJbrSgg/0ca93f3020f0393abafa75e7dd5951aa/screenshoot_fluxo_marketplace_EN.JPG)

It happens when the store acts exclusively as a Marketplace in the order. That is, when the store sells products from another store - its Seller.

In this case, the store's responsibility focuses on __approving the payment__.

After the customer completes the purchase, the store must wait for the seller's confirmation before proceeding with the order. This is because it needs confirmation from the Seller who owns the products. The Seller needs to confirm that it will be possible to fulfill the order.

Once the Seller sends this confirmation to VTEX, the order goes to the status `Payment Pending`. If the transaction completes successfully, the status becomes `Payment Approved`.

The dispatch is then authorized and the order enters the status `Window to Cancellation`. In this status, the customer can still cancel the order. By default, the Window to Cancellation period is half an hour, but this can be adjusted on the platform.

## Seller Order Flow

![screenshoot fluxo seller EN](//images.ctfassets.net/alneenqid6w5/14SsrA3HbuAxsYerakdGGf/9a50dbe872d8712670ce7a1ddbbf2e6e/screenshoot_fluxo_seller_EN.JPG)

It happens when the store acts as a Seller. That is, when it is the owner of the product.

In such case, the order was closed at another store (the Marketplace). Therefore, the Seller flow begins as soon as the payment is made and approved.

The Seller must then authorize the shipment for the order to exit the status `Waiting for order authorization` and enter the `Window to Cancellation` status.

After the Window to Cancellation period ends, the status becomes `Ready for Handling`, which means the Seller can proceed with picking and packing.

The next status is then `Handling Shipping`, when the Seller prepares the invoice and order tracking.

## Complete Order Flow

![screenshoot fluxo completo EN](//images.ctfassets.net/alneenqid6w5/5uYoEIqMJxUMFZzXKf72Sh/2cf49ed2ddd0cceac3f429e1f4492422/screenshoot_fluxo_completo_EN.JPG)

It happens when the store is both the Marketplace and the Seller. That is, it's when the order was closed in the store and the store itself is the owner of the product, being responsible for the fulfillment.

In such case, the initial order status automatically changes from `Waiting for Seller Decision` to `Payment Pending.`

Once the payment has been approved, the order goes to `Payment Approved` and then to `Window to Cancellation` and, when the Window to Cancellation is over, to `Ready for Handling` and finally to `Handling Shipping`.

That is, in this case both payment and delivery steps are the store's responsibility.

<div class="alert alert-info">
There are only two possible final statuses for every order:<br>
<ul>
  <li>Invoiced</li>
  <li>Canceled</li>
</ul>
</div>

<div class="alert alert-info">
To understand each order status in more detail, see a table with all statuses at <a href="https://help.vtex.com/en/tutorial/fluxo-de-pedido--tutorials_196#understanding-the-status">Understanding the Status</a>.
</div>
