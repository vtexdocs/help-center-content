---
title: 'Configuration errors in Mercado Libre accounts with multiple official stores'
id: 16PIrnBPonKv5Eb3SBdKmq
status: PUBLISHED
createdAt: 2021-08-05T20:07:28.907Z
updatedAt: 2021-09-03T22:26:40.776Z
publishedAt: 2021-09-03T22:26:40.776Z
firstPublishedAt: 2021-08-06T23:27:47.273Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: configuration-errors-in-mercado-libre-accounts-with-multiple-official-stores
locale: en
legacySlug: configuration-errors-in-mercado-libre-accounts-with-multiple-official-stores
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

>ℹ️ If you have official stores in Mercado Libre, this documentation may be relevant. Mercado Libre has its own parameters to certify sellers as official stores. For more information, please contact your Mercado Libre consultant.

When a [seller](https://help.vtex.com/en/tutorial/o-que-e-um-seller--5FkLvhZ3Few4CWWIuYOK2w) integrates their [subaccounts](https://help.vtex.com/en/tutorial/o-que-e-store-name--3gh9mTNeMgs6Qe44e8IqQK?&utm_source=autocomplete) with a Mercado Libre user’s official stores, it may cause an error in product import.

This article aims to help users solve this problem. 

This error occurs when a VTEX seller has two or more subaccounts and uses both of them to integrate with a single Mercado Libre user. 

In this scenario, if a Mercado Libre customer makes a purchase with products from two or more of the seller's official stores, the order will not be imported into any of the VTEX subaccounts. This happens because the products in the cart belong to different subaccounts, and the order would be split between the two subaccounts.

VTEX does not recommend this type of configuration because orders will not be integrated.

![cenario problemaENN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.JPG)

However, in the integration of VTEX stores with Mercado Libre, two scenarios can prevent this error. To fit within those scenarios, your store must have the following configurations:

- [Single VTEX subaccount and single Mercado Libre user](#single-vtex-subaccount-and-single-mercado-libre-user).
- [Multiple VTEX subaccounts and multiple official stores](#multiple-vtex-subaccounts-and-multiple-official-stores)

## Single VTEX subaccount and single Mercado Libre user

The seller uses a single VTEX subaccount and integrates with a single account on Mercado Libre. This Mercado Libre account can manage two or more official stores. 

In this scenario, if a user makes a purchase on Mercado Libre with products from two or more of the seller's official stores, the order will be correctly imported into VTEX. This happens because the products listed on Mercado Libre are from the catalog of a single VTEX subaccount.

![cenario singleuser](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.JPG)

## Multiple VTEX subaccounts and multiple official stores

The VTEX seller has two or more subaccounts and uses each of them to integrate with different official stores in Mercado Libre. 

In this scenario, if a user makes a purchase on Mercado Libre with two or more products from different subaccounts in the same cart, orders will be integrated normally into each VTEX subaccount. This happens because each order generated on Mercado Libre is linked to a different VTEX subaccount, so the products sold correspond to the catalogs of each subaccount.

![cenario multiplesotre](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.JPG)

