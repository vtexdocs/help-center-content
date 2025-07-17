---
title: "Sales App barcode scanner accepts only EAN-13"
id: 5fVgFNzYDoROFbVUyqEvcC
status: PUBLISHED
createdAt: 2025-04-15T14:42:10.413Z
updatedAt: 2025-04-15T14:42:33.580Z
publishedAt: 2025-04-15T14:42:33.580Z
firstPublishedAt: 2025-04-15T14:42:10.904Z
contentType: knownIssue
productTeam: Physical Stores
author: 2mXZkbi0oi061KicTExNjo
tag: Physical Stores
slugEN: sales-app-barcode-scanner-accepts-only-ean13
locale: en
kiStatus: Backlog
internalReference: 1211334
---

## Summary


The barcode scanner in the Sales App just accepts EAN-13.

If a product has registered a UPC-A (12 digits), the barcode scanner will add a 0 to the barcode, leading to an empty search.


##

## Simulation



- Access the Sales App native app;
- Use the barcode scanner and read a UPC-12;
- A leading zero is added, and an empty search is shown.


##

## Workaround


Add a leading zero to the barcode in the SKU registration.




