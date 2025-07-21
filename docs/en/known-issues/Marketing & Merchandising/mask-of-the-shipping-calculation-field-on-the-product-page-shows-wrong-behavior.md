---
title: "Mask of the shipping calculation field on the product page shows wrong behavior"
id: 3e3i6QgalWSKyIw6KsYwGa
status: PUBLISHED
createdAt: 2017-08-11T17:33:43.752Z
updatedAt: 2022-12-22T20:46:02.879Z
publishedAt: 2022-12-22T20:46:02.879Z
firstPublishedAt: 2017-08-11T19:54:51.166Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: mask-of-the-shipping-calculation-field-on-the-product-page-shows-wrong-behavior
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

The field rendered by the `<vtex.cmc:shippingValue/>` control on the product page displays a mask with improper behavior.

This scenario occurs only on mobile devices with Android operating system and Chrome browser.

## Simulation

1. Access a product page using a mobile device with __Android__ operating system and __Chrome__ browser;
2. Enter numbers in the field __Shipping calculation__;
3. Some numbers may be shown twice in the field.

## Workaround

Insert a javascript code on the page that overwrites the native mask.

