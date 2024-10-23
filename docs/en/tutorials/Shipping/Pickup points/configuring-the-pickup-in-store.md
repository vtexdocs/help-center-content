---
title: 'How to configure Store Pickup'
id: frequentlyAskedQuestions_153
status: DRAFT
createdAt: 2019-01-24T20:45:50.866Z
updatedAt: 2020-12-03T15:23:21.852Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:01:24.853Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: configuring-the-pickup-in-store
locale: en
legacySlug: configuring-the-pickup-in-store
subcategoryId: 1c5Btie9ou2Gg2iUo0ggqM
---

>❗ This article is obsolete. To set up the pickup point correctly, go to the article [Registering Pickup Points](https://help.vtex.com/en/tutorial/adding-pickup-points--2R5ClQiwe4KoSQgsuiOw4E)


The store pickup configuration enables the customer to opt not to receive the product at home, but to collect it at a store. The following steps show how to give the customer the option of selecting a store for pickup at checkout, during the purchase flow. The configuration is made on 3 different modules of the platform, as described below.

## Logistics

1. In logistics, register a carrier for each physical store from which customers can collect purchases.
2. In the freight plan for these carriers, remember to include all the postal codes of customers who can collect products from the store. They may not necessarily be served by deliveries, but they can collect orders.
3. For these carriers, it is recommended not to charge for freight.
4. After creating all the carriers, you must create a carrier with the generic name _Retirada no local _to be used in programming the store front-end (in the freight selection option).

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Shipping/Pickup points/configuring-the-pickup-in-store_1.jpg)

## Visual Customization (Front-end)

A _JavaScript_ file must be included in the store checkout, as shown below.

1. The user makes a normal purchase of products up to the checkout page.
2. After completing personal details, the user reaches the carrier selection area. The tool will normally show all the available methods of delivery configured. However after configuring them, the _JavaScript_ must “conceal” the options for stores available and show only the generic transporter, created in step 4 above, called **Retirada no local** (or Retirada en Sucursal – in Spanish).![OpcoesdeEnvio](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Shipping/Pickup points/configuring-the-pickup-in-store_2.png)
3. When the user selects the store pickup _(_retirada no local or retirada en sucursal) option, the JavaScript opens a lightbox on the screen with a list of stores for the user to select. The options appearing here are the transporters registered with admin in steps 1 and 2. The image below shows how the store chose to present visually the selection of stores for pickup.![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Shipping/Pickup points/configuring-the-pickup-in-store_3.jpg)
4. When the user selects an option, the _JavaScript _closes the _Lightbox_ and returns to the freight selection option, indicating that the selection has been successfully saved.![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Shipping/Pickup points/configuring-the-pickup-in-store_4.bmp)
5. After returning to the selection, the _JavaScript _must alter the generic delivery option to the real option of the store registered, which up to that moment was not visible in the front-end.![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Shipping/Pickup points/configuring-the-pickup-in-store_5.jpg)
6. After leaving this selection area, the customer follows the normal purchase flow.

_Insert a caption indicating how soon the order will be available for pickup at the physical store._

## Orders

On the OMS it will be possible to view the customer’s order, showing which store was selected for the pickup. You can find this information in the area where the products are shown.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Shipping/Pickup points/configuring-the-pickup-in-store_6.jpg)

Don’t forget! The JavaScript required for this situation must be developed by the store development team or by one of our [accredited partners](http://store.vtex.com "accredited partners").
