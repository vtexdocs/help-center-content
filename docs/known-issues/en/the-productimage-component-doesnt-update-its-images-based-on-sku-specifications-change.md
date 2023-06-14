---
title: The ProductImage component doesn't update its images based on SKU specifications change
id: 3NATd5bJRoMbzepedPaIEu
status: PUBLISHED
createdAt: 2022-09-30T22:16:54.477Z
updatedAt: 2023-05-23T18:34:55.163Z
publishedAt: 2023-05-23T18:34:55.163Z
firstPublishedAt: 2022-09-30T22:16:54.836Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: the-productimage-component-doesnt-update-its-images-based-on-sku-specifications-change
kiStatus: Backlog
internalReference: 669619
---

## Summary



When a product has more than one specification, and the user changes the specification selection, the ProductImage component will not change its images based on the change of the related selection.

The SKUSelector component compares the itemId (string returned from the product.items array) with the selectedImageVariationSKU (string returned from the skuSelector that is an object returned from the context) to present the correct image after the user selection, so if the skuSelector.selectedImageVariationSKU does not update; the value will remain with the previous state and will not update the image displayed on the screen inside the ProductImage component.

This also affects the image on SKU Selector, as they use the same variables. It was noticed that after selecting an SKU and loading the page in the website URL, selectedImageVariationSKU would remain with the previous state and not update the image displayed on the screen.


##

## Simulation


Evidence: https://youtu.be/qr4-uTRFwcY


##

## Workaround


N/A

