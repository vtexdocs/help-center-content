---
title: 'Creating "custom fields" for "custom data" converts the IDs to lowercase letters'
id: 6oCXPldEYkC9HG1fw3G3RL
status: PUBLISHED
createdAt: 2019-02-19T18:52:45.049Z
updatedAt: 2019-12-31T15:16:46.219Z
publishedAt: 2019-12-31T15:16:46.219Z
firstPublishedAt: 2019-02-19T21:28:51.583Z
contentType: knownIssue
productTeam: Shopping
author: authors_4
tag: Checkout
slug: creating-custom-fields-for-custom-data-converts-the-ids-to-lowercase
locale: en
kiStatus: Closed
internalReference: 
---

## Summary

By creating "custom fields" in the "custom data" section through the checkout API, the IDs of the reported apps are converted to lowercase letters.

## Simulation

1. Use the [POST Update Custom Fields](https://documenter.getpostman.com/view/18468/vtex-checkout-api/6Z2QYJM#dc90afae-a4e5-59c5-1854-fc0fa81c99ee) API;
2. Send an "app" that has an "ID" with an uppercase letter (for example, "customFieldTest");
3. Note in the response of the request that the "ID" was converted to lowercase letters (in the example above, it would be "customfieldtest").

## Workaround

Currently this is an API restriction. It's not possible to get around this scenario. Custom Data Custom Fields must be used with lowercase letters.

