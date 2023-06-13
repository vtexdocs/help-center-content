---
title: Product Rich Snippets not using AggregateOffer format for offers with more than one seller
id: pA3jkQ7qHjWXul7ZsBLy2
status: PUBLISHED
createdAt: 2023-02-14T12:45:02.825Z
updatedAt: 2023-02-14T12:45:03.660Z
publishedAt: 2023-02-14T12:45:03.660Z
firstPublishedAt: 2023-02-14T12:45:03.660Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: product-rich-snippets-not-using-aggregateoffer-format-for-offers-with-more-than-one-seller
kiStatus: Backlog
internalReference: 753505
---

## Summary


When a single product is associated with multiple offers (for example, the same pair of shoes is offered by different merchants), then AggregateOffer can be used in order to send this info for google in a way it's crawler won't rejected the offer for wrong prices.

Currently VTEX is using only the Offer format.

This causes some offers to be rejected due to wrong prices comparing the info sent and info presented on the frontend of the store.

Doc reference: https://schema.org/AggregateOffer


##

## Simulation



1. Have an offer associated with multiple sellers;
2. Use the product rich snippets from VTEX;
3. Check that only the prices from seller 1 are being sent;
4. Check that some offers might get rejected on the account's google merchant.


##

## Workaround


No workaround.





