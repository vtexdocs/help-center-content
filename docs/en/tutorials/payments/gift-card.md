---
title: 'Setting up Gift cards'
id: tutorials_995
status: PUBLISHED
createdAt: 2017-04-27T21:57:54.816Z
updatedAt: 2024-10-22T19:25:17.816Z
publishedAt: 2024-10-22T19:25:17.816Z
firstPublishedAt: 2017-04-27T23:03:42.674Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: gift-card
legacySlug: gift-card
locale: en
subcategoryId: 3qWeS7abxCyC0G0GMq42gA
---

The gift card or voucher is one of the features of the Payments module, and it works in two different ways:

- A payment method for purchases;
- A loyalty program that the retailer can connect with the VTEX system.

For more details on the second option, check our technical documentation on [integration with gift cards](/en/docs/tutorials/how-to-integrate-an-external-gift-card-provider-with-vtex).

## How to create the GiftCard (manual)

By a VTEX standard, the gift card is considered a payment method. This product has a nominal value that can be used at the moment of the purchase to reduce the order price.

To create a new gift card, follow the step by step:

1. In the VTEX Admin, go to **Promotions > Gift Cards**, or type **Gift Cards** in the search bar at the top of the page.
2. Click on the **New Gift Card** button.

> ℹ️ On the gift card creation screen, the **Gift card** field is automatically filled in by the VTEX system with the ID code of the new gift card. This is the code to be entered by the customer on the checkout screen to apply the gift card to the cart and reduce the payment value of the order.

3. Fill in the fields that will be displayed as explained below:
   - **Value**: the nominal value that will be granted for the voucher use.
   - **Currency code**: currency in which the voucher will be created. The options available for selection are presented in accordance with the commercial policies of each store.
   - **Expiration Date**: this is the effective date for using the voucher.
   - **Customer ID**: data that identifies and defines the voucher for a specific client.
   - **Collection**: identifies the product collection that defines the items to which the voucher can be applied.

> ⚠️ **Warning**: The “Value” and the “Expiration Date” fields are **mandatory**. If you do not fill them, the purchase voucher will not be saved.

> ❗ The feature that creates gift cards limited by product collections is not working. More details about this issue are provided in the article [Collection functionality doesn't work on Giftcard](https://help.vtex.com/en/known-issues/collection-functionality-doesnt-work-on-giftcard).

After filling in the fields correctly, the user can select up to three configuration options:
   - **Restricted**: only the customer associated with the CPF or CNPJ informed above can use this voucher.
   - **Reloadable**: while this voucher is available, its balance can be changed.
   - **Reusable**: it will be possible to make new purchases with this voucher until its value is fully used.

4. Finally, click on the **Save** button.

> ℹ️ There is no limit to the creation of gift cards, however only 8000 gift cards can be exported at a time.

## How to create a batch of Vouchers (manual)

To create more than one new voucher at the same time (a batch), follow the step by step:

1. In the VTEX Admin, go to **Promotions > Gift Cards**, or type **Gift Cards** in the search bar at the top of the page.
2. Click on the **New Gift Card Batch** button.
3. Fill in the fields that will be displayed as explained below:
   - **Number of gift cards**: this is the number of vouchers that you want to create as a batch. A maximum of 500 (five hundred) vouchers can be created per batch.
   - **Value**: the nominal value that will be granted for all vouchers in this batch.
   - **Currency code**: currency in which vouchers will be batched. The options available for selection are customized according to the commercial policies of each store.
   - **Expiration Date**: this is the effective date for using all vouchers of this batch.
   - **Collection**: identifies the product collection that defines the items to which the vouchers can be applied.

> ⚠️ **Warning**: The “Number of gift cards”, “Value” and the “Expiration Date” fields are **mandatory**. If you don’t fill them, the purchase vouchers will not be saved.

> ❗ The feature that creates gift cards limited by product collections is not working. More details about this issue are provided in the article [Collection functionality doesn't work on Giftcard](https://help.vtex.com/known-issues/collection-functionality-doesnt-work-on-giftcard).

   - **Reloadable**: while these vouchers are available, their balances can be changed.
   - **Reusable**: it will be possible to make new purchases with these vouchers until their values are fully used.

4. Click on the **Save** button.

A new screen will appear confirming that the requested number of vouchers has been generated and their IDs will also be shown.

5. To end, click on the **Back** button.

> ℹ️ There is no limit to the creation of gift cards, however only 8000 gift cards can be exported at a time.


## How to set a Gift Card as a payment method

After creating the Gift Card, it must be configured as a payment method. This way, your customers will be able to use it at Checkout.

Follow the steps below to set up the Gift card:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **GiftCard HUB** in the search bar and click on the name of the provider.
4. In **Refund method** and **Early settlement**, select the desired options.
5. Click `Save`.
6. Go to **Store Settings > Payment > Settings**, or type Settings in the search bar at the top of the page.
7. In the **Payment Conditions** tab, click on the `+` button.
8. Click on the **Vale** connector.
9. On the top of the page, create a **name** to this payment condition.
10. Activate the condition in the **Status** field.
11. Under **Process with provider**, select the desired giftcard provider.
12. If you want to use an anti-fraud system, select the option **Use anti-fraud solution**.
13. If you want, you can also [configure special payment conditions](https://help.vtex.com/docs/tutorials/special-conditions).
14. Click on `Save`.

## How to manage your voucher

Once the voucher has been created, it is possible to manage it in some ways through the Admin. The user can:

- Add or remove value, as long as the voucher is "Rechargeable";
- View its statement;
- Check which purchase the voucher was used for;
- Cancel the voucher.
