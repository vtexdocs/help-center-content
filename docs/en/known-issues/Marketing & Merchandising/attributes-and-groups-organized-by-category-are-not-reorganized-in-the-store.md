---
title: "Attributes and groups organized by category are not reorganized in the store"
id: 1oWkNKBfrWMmKSWOeeGikO
status: PUBLISHED
createdAt: 2017-12-18T17:08:46.708Z
updatedAt: 2022-12-22T20:45:03.406Z
publishedAt: 2022-12-22T20:45:03.406Z
firstPublishedAt: 2017-12-19T13:06:06.107Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: attributes-and-groups-organized-by-category-are-not-reorganized-in-the-store
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

When trying to organize attributes in each category by changing the order number of each attribute and clicking on __Order__, the system does not adhere to the set order.

In some instances where the attributes are reorganized, after saving the set order, the same group is divided into various other groups bearing the same name.

## Simulation

1. In your store's admin, access __Catalog__, followed by __Categories__.
2. Search for or choose a __Category__, then select the __Actions__ dropdown menu next to the name of the selected Category and click on __Field (Product)__.
3. Edit the order number of the attributes.
4. Click on __Order__
5. You will see that the order is not respected and that, sometimes, the group is divided into various other groups.

## Workaround

You can extend the native feature that provisions the filter sidebar, by creating a custom filter component. Afterwards, you can independently reorganize any one of the filters, using API Search to create a tailored new structure.

All of our certified partners and any of our clients have access to the above-mentioned tools, by accessing VTEX dev docs.

