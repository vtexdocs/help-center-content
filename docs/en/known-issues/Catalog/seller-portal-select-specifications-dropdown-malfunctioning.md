---
title: 'Seller Portal Select Specifications Dropdown Malfunctioning'
id: 7DeU9mKh7gseN7svVPtDzb
status: PUBLISHED
createdAt: 2022-12-06T14:27:57.920Z
updatedAt: 2024-02-16T20:24:15.024Z
publishedAt: 2024-02-16T20:24:15.024Z
firstPublishedAt: 2022-12-06T14:27:58.644Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: seller-portal-select-specifications-dropdown-malfunctioning
locale: en
kiStatus: No Fix
internalReference: 711303
---

## Summary


Currently, the product specification selection box of the page accountname.myvtex.com/admin/products/new/ has a faulty behavior when attempting to select a value for a product specification.

When the user attempts to choose a value, sometimes, the input below is selected instead.

For instance, you have 2 options, color and size. Upon clicking on color, you, sometimes, have size selected instead:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)


##

## Simulation


This is an intermittent case, hence, it is quite hard to consistently replicate.

Anyhow, to do so, you must go to the aforementioned page and choose the (+) add variations function.

Upon doing so, a popup will appear with the given dropdown menu that has the faulty behavior. Trying to select a value might return the data below in its place.


##

## Workaround


Using the APIs or even simply changing the admin language will yield positive results.





