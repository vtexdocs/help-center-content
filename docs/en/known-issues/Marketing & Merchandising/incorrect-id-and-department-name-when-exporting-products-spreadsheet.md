---
title: 'Incorrect ID and department name when exporting products spreadsheet'
id: 6Nj93lJqgwGkYwaSWUu0So
status: PUBLISHED
createdAt: 2018-06-20T14:36:47.235Z
updatedAt: 2023-04-04T19:07:34.496Z
publishedAt: 2023-04-04T19:07:34.496Z
firstPublishedAt: 2018-06-20T14:45:12.020Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: incorrect-id-and-department-name-when-exporting-products-spreadsheet
locale: en
kiStatus: Backlog
internalReference: 783363
---

## Summary

When exporting a product spreadsheet, the department's name and ID are exported incorrectly, even if they belong to a different department in the product catalog or in queries through the APIs.


## Simulation

1. Access the Catalog through the Admin;
2. Navigate to Import and Export;
3. Export the product and SKUs spreadsheet.

## Workaround

There is no workaround. However, this information can be discarded. When you import a spreadsheet for product and category upgrade, this column is not taken into account. Only the `Id Categoria` column is.


