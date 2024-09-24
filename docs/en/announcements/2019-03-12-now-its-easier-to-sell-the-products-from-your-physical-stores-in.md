---
title: 'Now it’s easier to sell the products from your physical stores in marketplaces'
id: 2rOEBV0tOAoZIgow7CODyj
status: PUBLISHED
createdAt: 2019-03-12T21:54:26.822Z
updatedAt: 2021-09-28T10:10:28.471Z
publishedAt: 2021-09-28T10:10:28.471Z
contentType: updates
productTeam: Channels
author: 6AcGyun1hSWewU8YcaQiO
slugEN: now-its-easier-to-sell-the-products-from-your-physical-stores-in
locale: en
legacySlug: now-it's-easier-to-sell-the-products-from-your-physical-stores-in
announcementImageID: ''
announcementSynopsisEN: 'When integrating the main account with a marketplace, franchise accounts inventories are now automatically considered.'
---

You can now easily sell products from your entire network of physical stores in __external marketplaces__. Through the __Multilevel Omnichannel Inventory__, the [franchise accounts](/tutorial/what-are-franchise-account-and-seller-white-label?locale=en) are fully integrated with the main account immediately after being created. This means that when the main account sets up an integration with an external marketplace, the franchise accounts' inventory will also be considered in the process, ie, it will no longer be necessary to manage each franchise account individually in order to integrate it into the marketplace.

## Main benefits

- Setup of the integration with an external marketplace in one account only, the main one.
- Omnichannel power in your business; you can use the franchise accounts for pickup points, for example.
- Simplification of Checkout APIs.

## What you need to do

The only necessary setting is the integration of the main account with the external marketplace. Once this is done, the inventories of all franchise accounts linked to the main one will also be sent to the marketplace. This is a new franchise account feature, which is active and ready to make your life easier whenever you need to integrate your operation with marketplaces.

>⚠️ ** For now, automatic integration of the franchise accounts inventory is only available when the marketplace is not a VTEX one**.

## What has changed

The Multilevel Omnichannel Inventory brought a new ally for omnichannel operations. However, to be used, the store that will be exclusively a __marketplace__ in the order flow (the link closest to the customer), must adjust its __Checkout APIs__ according to the changes below:

- `AffiliateId`, `marketplacePaymentValue`, `marketplaceOrderGroup` and `marketplaceServicesEndpoint` are the 4 new required Checkout PlaceOrder fields. The `paymentData` field is no longer required.
- New route for progressing the order after marketplace approval (Marketplace Order Authorization).
- The Marketplace needs to support the new route so it can be notified of a seller (or an intermediate agent) cancellation and to receive the invoice from the seller (or the intermediate agent).

To learn more about Multilevel Omnichannel Inventory and changes to the Checkout APIs, visit [this Help article](https://help.vtex.com/en/business-guides/offer-the-products-from-your-physical-stores-in-external-marketplaces--6s64bV8Dqb5QN6sqIfPzcA).

>❗ <body>
>   <li>The Recursive Marketplace is now called **Multilevel Omnichannel Inventory.**</li>
> <li>
> The feature does not allow you to [change seller.](https://help.vtex.com/en/tutorial/how-to-use-the-change-seller-feature--5TBAwO2kOAMw44uyaaQMQO)</li>
> <li>This solution is aimed at integrating with external marketplaces, not those that are [natively integrated with VTEX.](https://help.vtex.com/en/tutorial/marketplace-strategies-at-vtex--tutorials_402).</li> 
> <li>Learn more about usage restrictions in the article [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) e confira as restrições de uso detalhadamente.</li>
>    </body>
