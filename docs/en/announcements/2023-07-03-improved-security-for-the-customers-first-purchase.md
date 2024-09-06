---
title: "Improved security for the customer's first purchase"
id: 3RBko0KXi8eOm4nKARgReD
status: ARCHIVED
createdAt: 2023-07-03T11:34:49.078Z
updatedAt: 2023-10-09T14:12:03.607Z
publishedAt: 
contentType: updates
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slug: improved-security-for-the-customers-first-purchase
locale: en
legacySlug: improved-security-for-the-customers-first-purchase
announcementImageID: ''
announcementSynopsisEN: 'New Checkout cookie allows increased security in your store'
---

In order to improve the security of your store information, VTEX has made improvements to the access to customer data in their first purchase. As of June 30, 2023, a new cookie is forwarded to the customer when they create a cart, preventing third parties from using external means to gain access to their personal information.

## What has changed?

During a customer's first purchase, their personal information is displayed unmasked next to the cart since they do not have a profile in the store yet.

Now, when a new cart is created, a new cookie called `CheckoutOrderFormOwnership` is forwarded along with the existing `checkout.vtex.com` cookie that contains the `orderFormId`. This will ensure that only the customer who created the cart has unrestricted access to their personal information.

In case there is an external attempt to access the cart data, the customer's personal information cannot be viewed, as the data will appear masked.

## Why did we make this change?

We made this improvement to increase the security of information access for your store and for your customers.

## What needs to be done?

The security update is automatic for all VTEX stores as of June 30, 2023. No action is required.
