---
title: 'Creating a coupon'
id: 7lMk3MmhNp2IEccyGApxU
status: PUBLISHED
createdAt: 2022-04-28T20:25:24.998Z
updatedAt: 2023-04-14T21:08:17.586Z
publishedAt: 2023-04-14T21:08:17.586Z
firstPublishedAt: 2022-04-28T20:42:45.525Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: creating-a-coupon-beta
locale: en
legacySlug: creating-a-coupon-beta
subcategory: 1TXh7VjDSIGA2eSI0CmUsi
---

A [coupon](https://help.vtex.com/en/tutorial/coupons-beta--1aAEN3ADpz19ss5JCIEBdL) consists of one promotional code composed of a sequence of letters and numbers. Coupons may be used to apply promotions to the shopping cart price: By entering a coupon code at checkout, your customers may get discounts on the order price.

To create a coupon in the VTEX Admin, follow the steps below. 

1. In the VTEX Admin, go to *Promotions > Coupons*, or type *Coupons* in the search bar at the top of the page.
2. Click `Create coupon`.
3. Fill out the form with the [coupon information](#coupon-information) starting with the [General](#general) section.
4. Click `Save`.

The coupon must be associated with at least one promotion to be valid. Please read the section [Associating a coupon with a promotion](#associating-a-coupon-with-a-promotion) to learn more about this configuration.

If you have created a [coupon batch](https://help.vtex.com/en/tutorial/coupons-beta--1aAEN3ADpz19ss5JCIEBdL#coupon-batches), the generated coupons will appear on the screen after saving it. Please read the section [Generated coupons](#generated-coupons) for more information.

If you have created a [single coupon](https://help.vtex.com/en/tutorial/coupons-beta--1aAEN3ADpz19ss5JCIEBdL#single-coupons), you will be redirected to the [coupon list](https://help.vtex.com/en/tutorial/coupons-list-beta--5z5ya3IonsC2W4B5h4JrsZ).

## Coupon information

The form for creating or editing a coupon has the following fields:

* [Coupon usage and linked promotions](#coupon-usage-and-linked-promotions)
* [General](#general)
* [Restrictions](#restrictions)

### Coupon usage and linked promotions

The top dashboard of the form for creating and editing coupons indicates the number of times a coupon has been used, the number of remaining uses of that coupon, and the number of promotions associated with the coupon, as illustrated below.

![create-coupon-1](https://images.ctfassets.net/alneenqid6w5/3HAiF63zYFGjrfOnBCl5Hb/12a3cfbee85e20584d8f110a419c6cfe/create-coupon-1.png)

By clicking on the information on the dashboard, you may access the modal **View usage details**, which displays the following details.

* **Linked promotions:** Displays the name of the promotion associated with the coupon, if any. By clicking on the promotion name, you will be redirected to the promotion editing page.

    The coupon becomes valid when associated with at least one promotion. To establish the association, you must use the same [utm_source or utm_campaign](https://help.vtex.com/en/tutorial/what-are-utm-source-utm-campaign-and-utm-medium--2wTz7QJ8KUG6skGAoAQuii) both in the coupon and the promotion fields. Please read the section [Associating a coupon with a promotion](#associating-a-coupon-with-a-promotion) to learn more about this configuration.

* **Usage**: Displays the number of times the coupon can be used and the number of remaining uses, if you have set a usage limit.

    If the coupon is a single coupon, this section presents the list of orders in which a coupon has been used and allows you to search by order number. When you click on the order number, you will be redirected to the order details page in **Orders management**.

    ![view-usage-details](https://images.ctfassets.net/alneenqid6w5/1bFOCXCpWwoXzJToacK3BM/628adb058ee54d89dc271d31abb9e26c/view-usage-details.png)

    If it is a coupon batch, this section displays the list of codes from the batch and allows you to search for a specific code. If you click on a code,  you will see the list of orders where the code has been used and allows you to search for an order number. Clicking on the order number will then take you to the order details page in __Orders management__.

![select-the-code-coupon-batch](https://images.ctfassets.net/alneenqid6w5/25yE4tmkHYDm4MISaz9upH/e30ef211427e536244083f5ad2045fba/selecione-o-codigo-grupo-en.PNG)

### General

The **General** section presents several fields you must fill in with general information about your coupon:

* **Coupon code:** The code your store's customers will have to provide at checkout to apply the coupon discount. You cannot use the code of an already existing coupon. The code can only contain letters, numbers and hyphens and have up to 300 characters. This field is required.
* **UTM source:** Allows linking the coupon to a specific `utm_source`. The `utm_source` represents the source tracking, i.e. which site, ad or post the user came from. Example: you can establish that whenever a user reaches your store by clicking on a Facebook ad, the URL will contain the parameter {f1}utm_source=fb{/f1} and the coupon will be applied. For more information, please read [What are utm_source, utm_campaign and utm_medium](https://help.vtex.com/en/tutorial/what-are-utm-source-utm-campaign-and-utm-medium--2wTz7QJ8KUG6skGAoAQuii).
* **UTM campaign:** Allows linking a coupon to a specific `utm_campaign`, i.e. the campaign which defines a specific marketing context. Examples: `christmas`, `fathersday`. For more information, please read [What are utm_source, utm_campaign, and utm_medium](https://help.vtex.com/en/tutorial/what-are-utm-source-utm-campaign-and-utm-medium--2wTz7QJ8KUG6skGAoAQuii).
* <i class="fas fa-toggle-on"></i> **Generating coupons in a batch:** Keeping this option deactivated will create a single coupon. By activating this option, you will create a [coupon batch](https://help.vtex.com/en/tutorial/coupons-beta--1aAEN3ADpz19ss5JCIEBdL#coupon-batches) and the following resources will become available. 
    * **Number of coupons:** Allows to define the number of codes generated in a coupon batch. The maximum number is 1000.
    * **Export coupons:** This button allows you to export the coupon codes within a coupon batch. This option only becomes available when editing already existing coupon batches.

>⚠️ You must define at least one UTM. This means it is required to fill in either the **UTM source** or the **UTM campaign** field. You can also fill in both fields.

### Restrictions

In this section of the form, you can configure the following coupon usage restrictions:

* <i class="fas fa-toggle-on"></i> **Limit coupon usage in my store:** When this option is enabled, you must specify the number of times the coupon can be used, either by using the buttons <i class="fas fa-minus"></i> and <i class="fas fa-plus"></i> or by typing the desired quantity. The minimum number is 1 and there is no maximum number.

  If this option remains disabled, the coupon can be used for an unlimited number of times.

  >⚠️ In case an order with a limited usage coupon applied is canceled, the limit will be recalculated. This means that orders with the **Canceled** status will not be calculated into the coupon usage limit.

## Generated coupons

If you have created a [coupon batch](https://help.vtex.com/en/tutorial/coupons-beta--1aAEN3ADpz19ss5JCIEBdL#coupon-batches), you will see the __Generated coupons__ page after saving it. This page presents two options:

* <i class="far fa-clone"></i> **Copy all:** Allows you to copy the generated codes to your clipboard. After that, you can paste them in a spreadsheet editor, such as Excel or Google Sheets. You can also copy each code individually by clicking it.
* **Export:** Allows exporting the generated coupons to a CSV file. The exported file contains a single column, with one code per row.

![cupons-gerados-en](https://images.ctfassets.net/alneenqid6w5/3Ar3vHIyynacQr9vJ5qUf3/640d534c61c09cae6bb345bbbca25173/cupons-gerados-en.gif)

## Associating a coupon with a promotion 

To enable a coupon, you must associate it with a promotion. To do this, follow the steps below: The coupon can be associated with all types of promotions, except [Campaign promotions](https://help.vtex.com/en/tutorial/campaign-promotion--1ChYXhK2AQGuS6wAqS8Ume).

1. In the VTEX Admin, go to *Promotions > Promotions*, or type *Promotions* in the search bar at the top of the page.
2. Click the promotion with which you want to associate a coupon or create a promotion by clicking the `New promotion` button.
3. If you choose to create a new promotion, select the type of promotion you wish to create.
4. In the **What are the conditions for the promotion to be valid?** section, fill in the **utm_source** or **utm_campaign** fields with the same values of the created coupon.
5. Click `Save`.

Once this is done, the coupon will be valid and available for use in your store.

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

#### Learn more

* [Coupons](https://help.vtex.com/en/tutorial/coupons-beta--1aAEN3ADpz19ss5JCIEBdL)
* [Coupons list](https://help.vtex.com/en/tutorial/coupons-list-beta--5z5ya3IonsC2W4B5h4JrsZ)
