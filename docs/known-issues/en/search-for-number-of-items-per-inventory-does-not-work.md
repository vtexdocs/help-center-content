---
title: 'Search for Number of Items per Inventory does not work'
id: 30XzfoV5qg8Aigo2ioqIyU
status: PUBLISHED
createdAt: 2017-08-29T17:10:42.318Z
updatedAt: 2022-12-22T20:45:59.697Z
publishedAt: 2022-12-22T20:45:59.697Z
firstPublishedAt: 2017-08-29T17:24:55.251Z
contentType: knownIssue
productTeam: Post-purchase
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: search-for-number-of-items-per-inventory-does-not-work
kiStatus: Backlog
internalReference: 
---

## Summary

In the __Inventory and shippping__ module, under the Inventory tab -> *Manage Items in Inventory*, you have the option to search by items in inventory. However, when trying this option, a message appears saying that no results were found (even when items are in stock). 

## Simulation

- In the __Inventory and shippping__ module, under the Inventory tab -> *Manage Items in Inventory*
- Insert a number that you know is in stock
- The results loads with the message "No results were found"

## Workaround

In this case, the workaround is controlling your inventory by spreadsheet:
- In the __Inventory and shippping__ module, access the *Dashboard* tab
- Download the warehouse spreadsheet, as explained in the article on how to [import and export the inventory spreadsheet](https://help.vtex.com/pt/tutorial/--tutorials_2034)
- In the spreadsheet itself, filter the number of items you wish to check

