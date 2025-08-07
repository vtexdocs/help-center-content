---
title: ' How shipping works when delivery is done by the marketplace (FOB)'
id: EY1l6tYW3IUquwwwcQqwQ
status: PUBLISHED
createdAt: 2017-08-28T23:17:57.225Z
updatedAt: 2024-02-05T15:48:24.006Z
publishedAt: 2024-02-05T15:48:24.006Z
firstPublishedAt: 2017-08-29T20:09:40.790Z
contentType: tutorial
productTeam: Channels
author: authors_4
slugEN: how-shipping-works-when-delivery-is-done-by-the-marketplace
locale: en
legacySlug: how-the-freight-fob-works-when-mercado-envios-is-used
subcategoryId: 5m1qqfnmfYKsO0KiOQC8Ky
---

Orders made through marketplaces as FOB (Free on board, Mercado Full Envios, B2W Entrega), where the type of delivery and payment and issue of the label are all defined by the marketplace, do not select a carrier when entering in VTEX.

This procedure avoids the order being unnecessarily validated, simplifies the integration settings and avoids failure to integrate because these details are blocked. However, some doubts may arise and it may be necessary to upgrade integration with the ERP for marketplace orders.

## Inventory 

The following rules must always be applied when selecting the inventories to serve an SKU:

1. Fewest available SKU amount.
    > _So inventories with small item quantities are not blocked out._ 
2. Shortest travel time between warehouse and loading dock.
3. Lowest travel price between warehouse and loading dock.

If there is more than one warehouse available according to these criteria and priorities, the final choice will be random.

If an order has several units of an SKU, one of the warehouses must have the full number, otherwise the order will be barred by VTEX, which will indicate inventory shortage.

## OMS

Since delivery will be made by the marketplace, the OMS does not indicate delivery time or cost, since this is agreed between upon between the marketplace and the buyer of the product, at no cost to the store. The information pertaining to the deadline, found in the order, is a shipping simulation done when integrating the order, rather than what the marketplace had informed VTEX about.

Instead of carrier identification and the type of delivery, `vtex:fob_1111` is shown, with `1111` being the ID of the loading dock.

## API

As with the OMS interface, the API shows `vtex:fob_1111` in the selectedSla, deliveryCompany and courierName fields. The shippingEstimate time will be `0bd`.

It is important that the ERP is able to accept data in this format.

![](https://images.ctfassets.net/alneenqid6w5/5jPtBeUPHCUvgMco9FoKuZ/add1ce05e78a216f0aa7074c3ae4d444/slack-imgs.com.png)

## Label

The order is mailed under an agreement between Correios (national postal services) and the marketplace itself. In this case, they issue a label for the store to print and use on its packages, without the need for other procedures with the Post Office - it is only necessary to mail the packages.

The label can be accessed directly through OMS, under the order list. Just click on the link and a new window will open with the label in PDF format.

![Delivery label by Correios (BR) - Marketplace](https://images.ctfassets.net/alneenqid6w5/3Xc7eqzjetqNwScoZxkWOK/4b1c70652ae5dc8248c829527d733c65/Screen_Shot_2020-03-25_at_11.43.43.png)

If you want to make use of the label in your ERP, it is also available in the [Marketplace Protocol API](https://developers.vtex.com/docs/api-reference/marketplace-protocol-external-marketplace-orders#post-/api/order-integration/orders), more information in [New Order Integration](https://developers.vtex.com/docs/guides/external-marketplace-integration-collect-orders#scenario-12-order-with-tracking-hints).
