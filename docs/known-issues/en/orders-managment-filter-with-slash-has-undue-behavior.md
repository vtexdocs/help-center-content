---
title: Orders Managment filter with slash (/) has undue behavior
id: 1Tl4fatscQ686kgGAScSAs
status: PUBLISHED
createdAt: 2018-03-27T14:16:02.940Z
updatedAt: 2022-12-22T14:53:20.003Z
publishedAt: 2022-12-22T14:53:20.003Z
firstPublishedAt: 2018-03-27T14:20:26.844Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_41
tag: Order Management
slug: orders-managment-filter-with-slash-has-undue-behavior
kiStatus: Fixed
internalReference: 
---

## Summary

When filtering by bank slip (boleto bancário) with 7 days, 28 days, 30/60, 30/60/90 and clicking on one of the orders of the listing, after returning the filter to 30/60 and 30/60/90 the orders are automatically removed.


## Simulation

- Filter by the bank slip payment method: 7 days, 28 days, 30/60, 30/60/90
- Click on one of the orders displayed in the listing.
- Go back by clicking on Sales.
- The displayed filter will be 7 days and 28 days. The 30/60 and 30/60/90 ones will be automatically removed.

## Workaround

You can work it around by removing the bar (`/`) from the filters or by using the API to get the orders list:
https://documenter.getpostman.com/view/487146/vtex-oms-api/6tjSKqi#1135fafd-f24b-4a07-b45e-7487d746d087

