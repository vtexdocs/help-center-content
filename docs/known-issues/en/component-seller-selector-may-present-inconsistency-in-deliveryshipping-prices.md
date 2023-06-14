---
title: 'Component Seller Selector may present inconsistency in delivery/shipping prices'
id: 2agLvjXgT76ngdu3YsA6uh
status: PUBLISHED
createdAt: 2022-09-14T22:26:22.177Z
updatedAt: 2022-11-25T22:13:07.124Z
publishedAt: 2022-11-25T22:13:07.124Z
firstPublishedAt: 2022-09-14T22:26:22.762Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: component-seller-selector-may-present-inconsistency-in-deliveryshipping-prices
locale: en
kiStatus: Backlog
internalReference: 658452
---

## Summary


The Seller Selector component presents inconsistency in delivery/shipping prices based on the order amount.

Example:
Regular Promotion:
When the customer places an order above the X value, the shipping value will be free.

Based on a scenario with the configuration above, when performing a shipping simulation using the Seller Selector, the component will use a GraphQL shipping query, equivalent to a request of the Simulation API, however, for each seller that the product is available, based on the postal code of the customer, the query will receive an item as a parameter, thus setting up a "cart with multiple items", therefore, depending on the value of the order, exceeding the limit value of the promotion and applying free shipping.



## Simulation


Based on the example above:
Create a promotion where the type and the amount of the discount will be "Free shipping";
Test the Seller Selector component in a PDP with a product that it's related to the promotion above and available in several different sellers.



## Workaround


N/A

