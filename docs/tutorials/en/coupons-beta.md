---
title: 'Coupons'
id: 1aAEN3ADpz19ss5JCIEBdL
status: PUBLISHED
createdAt: 2022-04-28T20:08:46.916Z
updatedAt: 2023-04-20T19:06:44.916Z
publishedAt: 2023-04-20T19:06:44.916Z
firstPublishedAt: 2022-04-28T20:24:24.046Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: coupons-beta
locale: en
legacySlug: coupons-beta
subcategory: 1TXh7VjDSIGA2eSI0CmUsi
---

A coupon consists of a promotional code composed of a sequence of letters and numbers. Coupons may be used to apply promotions to the shopping cart price. By entering a coupon code at checkout, your customers may get discounts on the order price.

## How to create coupons

You can create and edit coupons in the VTEX Admin, in **Promotions** > [Coupons](https://help.vtex.com/en/tutorial/coupons-list-beta--5z5ya3IonsC2W4B5h4JrsZ) or via the [Promotions & Taxes API v2](https://developers.vtex.com/vtex-rest-api/reference/promotions-taxes-api-v2).

>⚠️ To be valid, the coupon must be associated with at least one promotion. The coupon can be associated with all types of promotions, except [Campaign promotions](https://help.vtex.com/en/tutorial/campaign-promotion--1ChYXhK2AQGuS6wAqS8Ume). Learn more in [Creating a coupon (Beta)](https://help.vtex.com/en/tutorial/creating-a-coupon-beta--7lMk3MmhNp2IEccyGApxU).

## Coupon types

VTEX provides single coupons and coupon batches. See the description below and learn more on how to use each type of coupon.

### Single coupons

Single coupons provide a single promotional code.

The single coupons are not necessarily limited to one use. "Single" means the coupon has one promotional code assigned. You can configure the number of times each coupon can be used in **Restrictions** when creating the coupon.

A single coupon can be useful in the following scenarios:

* Promotions related to commemorative dates, where different customers can apply the same promotional code, with or without limitations of use. For example: `CHRISTMAS22`.
* Promotions which apply to the first purchase a customer makes in your store, where different customers can use the same promotional code, restricted to a single use. For example: `WELCOME10`.

### Coupon batches

Coupon batches are code groupers, which means they provide more than one promotional code with the same effect.

A coupon batch can be useful in the following scenarios:

* Promotions involving digital influencers, where each influencer can share a different code, attached to the same coupon, with their followers. 
* Loyalty programs which provide each participating customer with a different code, attached to the same coupon.
* Mass dissemination of coupons, which can be configured for a single use.

The platform automatically generates codes based on the prefix, followed by a dash and a random 15-character code, including letters and numbers. For example, if you create a coupon batch using the code `PROMO`, the platform will generate codes in the following format: `PROMO-99n0xjzfum1o6tk`.

You can generate up to 1000 codes associated with a batch. To generate more than one code attached to a coupon, you must enable the **Generating coupons in a batch** option during setup and specify the desired quantity of codes. Please refer to [Creating a coupon](https://help.vtex.com/en/tutorial/creating-a-coupon-beta--7lMk3MmhNp2IEccyGApxU) for more information on this configuration.

You can configure the number of times each code can be used in **Restrictions** when creating the coupon.

## Learn more

* [Coupon list](https://help.vtex.com/en/tutorial/coupons-list-beta--5z5ya3IonsC2W4B5h4JrsZ)
* [Creating a coupon](https://help.vtex.com/en/tutorial/creating-a-coupon-beta--7lMk3MmhNp2IEccyGApxU)
