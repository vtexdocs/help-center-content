---
title: "Kit created by integration doesn't receive a table of values"
id: 1IhCGsM5a48Ai6IESYCeGQ
status: PUBLISHED
createdAt: 2017-03-29T23:46:50.768Z
updatedAt: 2022-12-22T20:56:06.125Z
publishedAt: 2022-12-22T20:56:06.125Z
firstPublishedAt: 2017-03-29T23:48:14.222Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_35
tag: Catalog
slug: kit-created-by-integration-doesnt-receive-a-table-of-values
kiStatus: Backlog
internalReference: 
---

## Summary

The kit created by integration is not creating a values table even after a price component is added. 

This behavior is partly due to the fact that the feature does not accept a default value in kit creation. For one of the characteristics of a kit is that the shopkeeper can practice a price different from that of the component.

## Simulation

Create a kit via Web Service (Soap) (Only possible via Web Service)

**Step 1**:
[Download the integration manual](https://help.vtex.com/en/tutorial/manual-of-classes-and-methods-used-on-webservice)

**Step 2**:
Run kit creation route: `StockKeepingUnitKitInsertUpdate`

## Workaround

To work around this problem, the path is quite simple. Looking at the kit, follow the path described below:

Blue Arrow > SKU > Grey Arrou (edit) > Kit > Change > Save

The component must have a price already registered. Here we're just saving the form again to force indexing. To verify it, just see the table of values associated with the SKU Kit.

To solve this problem through API, simply add a value table creation route for SKU (after you've created the kit): https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT#06450a0e-a7b4-360c-7058-3095cd03ef08

