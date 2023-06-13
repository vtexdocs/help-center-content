---
title: How to create a coupon
id: tutorials_319
status: PUBLISHED
createdAt: 2017-04-27T22:09:06.076Z
updatedAt: 2023-03-31T19:41:21.767Z
publishedAt: 2023-03-31T19:41:21.767Z
firstPublishedAt: 2017-04-27T23:03:14.329Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: creating-a-coupon
legacySlug: creating-a-coupon
subcategory: 1TXh7VjDSIGA2eSI0CmUsi
---

A coupon is a code that allows customers to apply a promotion to their shopping cart. To be valid, the coupon has to be associated with a promotion.

This article will cover the following topics:

- [Creating a coupon](#creating-a-coupon)
  - [Filling in the coupon fields](#filling-in-coupon-fields).
    1. [Coupon](#coupon)
    2. [Restrictions and limitations of use](#restrictions-and-limitations-of-use)
- [Associating a coupon with a promotion](#associating-a-coupon-with-a-promotion)
- [Archiving a coupon](#archiving-a-coupon)
- [Application-scenario](#application-scenario)
- [Using multiple coupons](#using-multiple-coupons)

## Creating a coupon

<div class="alert alert-warning">
  <p>There is a limit to the amount of active coupons you can have in your store. We recommend reusing coupons, as having a high number of coupons can compromise the performance of the <b>Promotions & Taxes</b> module.</p>
</div>

To create a coupon, follow the steps below:

1. In the VTEX Admin, go to *Promotions > Coupons*, or type *Coupons* in the search bar at the top of the page.
2. Click on `New coupon`.
3. Fill in the [coupon fields](#filling-in-coupon-fields).
4. Click on `Save`.

<div class="alert alert-info">
  <p>You can only create one coupon at a time. To create coupons in bulk, read the article <a href="https://developers.vtex.com/vtex-rest-api/docs/creating-and-managing-coupons-with-promotions-api">Creating and managing coupons with the Promotions API</a>.</p>
</div>

### Filling in the coupon fields

#### 1. Coupon

In this section, you must fill in the coupon’s general information:

- **Coupon Code**: the coupon’s activation code. This is a required field, and there is no character limit.

<div class="alert alert-warning">
  <p>You cannot use special characters, only letters, numbers and dashes.</p>
</div>

- **utm_source**: the UTM source parameter.
- **utm_campaign**: the UTM campaign parameter.

#### 2. Restrictions and limitations of use

In this section, you can add restrictions on the use of a coupon.

- **The customer may purchase up to X product(s), using this coupon in one or more purchases**: enter the number of products that can be purchased using this coupon, regardless of how many purchases are made to reach this number.
- **Renew each coupon usage after X day(s)**: the coupon will be valid again after the number of days determined in this field.

<div class="alert alert-info">
  <p>To create single-use coupons, you need to <a href="https://help.vtex.com/pt/tutorial/promocao-regular--tutorials_327#4-restricoes-e-limitacoes-de-uso">restrict the number of promotion apps in your store and per customer</a>.</p>
</div>

When customers apply a coupon for a limited promotion and their purchase is canceled, the coupon becomes valid again.

## Associating a coupon with a promotion

The coupon can be associated with all types of promotion except **Campaign promotion**. A single coupon can be associated with one or more promotions.

To enable a coupon and associate it with a promotion, follow the steps below:

1. In the VTEX Admin, go to *Promotions > Promotions*, or type *Promotions* in the search bar at the top of the page.
2. Click on the promotion you want to associate a coupon or create a promotion by clicking on the `Create Promotion` button.
3. In the **What are the conditions for the promotion to be valid?** section, fill in the **utm_source** or **utm_campaign** fields with the information of the coupon you have previously created.
4. Click on `Save`.

## Archiving a coupon

To disable a coupon, you must archive it. Follow the steps below:

1. In the VTEX Admin, go to *Promotions > Coupons*, or type *Coupons* in the search bar at the top of the page.
2. Click on the coupon you want to archive.
3. On the editing screen, click on the `Archive` button.

<div class="alert alert-warning">
  <p>Coupons cannot be deleted, only archived. Note that you can only archive one coupon at a time. You can edit and reuse a coupon, but the <b>coupon code</b> cannot be modified.</p>
</div>

## Application scenario

You need to create a promotion and publish it in a newsletter. However, we recommend enabling the promotion only through the code sent by email. To create an application scenario, follow the instructions below:

1. [Create a coupon](#creating-a-coupon)
2. [Create a promotion](https://help.vtex.com/en/tutorial/creating-promotions-2--tutorials_320).
3. Use the same `utm_source` or `utm_campaign` for the coupon and the promotion.
4. Include the coupon code in the newsletter.
5. The promotion will be enabled in the shopping cart only when customers enter the coupon code in the **Coupon Code** field and add it.

<div class="alert alert-info">
  <p>You can also configure the newsletter links directly using <b>utm_source</b> and <b>utm_campaign</b>, instead of using a coupon.</p>
</div>

## Using multiple coupons

You can allow your customers to use multiple coupons in a purchase. You will need to use one of the following endpoints to enable this feature, which is only available via API and there is a 20 coupon limit per purchase.

Both endpoints fill in the `marketingData` field of the response body without any difference in activation usage. Follow the steps below to enable the feature:

1. Use one of the endpoints to enable this feature:
   - [POST Add coupons to the cart](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForm/-orderFormId-/coupons)
   - [POST Add marketing data](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForm/-orderFormId-/attachments/marketingData)
2. [Customize](https://developers.vtex.com/docs/guides/checkout-customization-guide#customizing-checkout-ui-admin-vtex) your storefront to allow multiple coupons.
   - If your store uses Checkout v5, use `checkout5-custom.js checkout5-custom.css`.
   - If your store uses Checkout v6, use `checkout6-custom.js checkout6-custom.css`.
3. After customization, you will need to request the enablement of the feature by [opening a ticket with VTEX Support](https://help.vtex.com/en/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM).
4. Check the <i class="fas fa-check-square"></i> **Apply with other promotions** option in the [settings of the promotions](https://help.vtex.com/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#4-restrictions-and-limitations-of-use) associated with the coupons to allow more than one promotion to be activated by different coupons in the same purchase. Thus, the discounts granted by different promotions will be applied [together](https://help.vtex.com/en/tutorial/entendendo-a-concorrencia-de-promocoes--tutorials_2270#accumulation).
