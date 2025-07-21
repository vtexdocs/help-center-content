---
title: "Exporting orders with an average of more than 200 products can give a timeout in the file generation process"
id: 3EaHTPveWNSw6CttazTTTS
status: PUBLISHED
createdAt: 2025-02-27T16:09:56.026Z
updatedAt: 2025-02-27T16:09:56.564Z
publishedAt: 2025-02-27T16:09:56.564Z
firstPublishedAt: 2025-02-27T16:09:56.564Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: exporting-orders-with-an-average-of-more-than-200-products-can-give-a-timeout-in-the-file-generation-process
locale: en
kiStatus: No Fix
internalReference: 702933
---

## Summary


The export of products is generally carried out for a series of orders based on filters determined by the storekeeper, thus generating a document with all the orders, and dividing each SKU into an independent line.

In this case, **the issue was caused by a store that has multiple orders with more than 200 SKUs per order**. In the file generation flow, these orders together generate a timeout in the processing of the information, since the object of each request is too large, and as a consequence, problems in the generation of the file.


##

## Simulation



1. Try to create a filter in the order list **that includes several orders with more than 200 SKUs**.
2. Request the export of the document
3. It is possible that the error will appear:
  1. You should open the browser inspector and look for the "**inprogress**" export processing events
  2. Search the logs with the **processing ID** of that events
  3. The error shows that the task was canceled: "`Error, "report_process", exception_message="A task was cancelled." `"



##

## Workaround


In these cases it is recommended to segment the export of orders, that is, for those orders with more than 200 SKUs, it is best to export individually.

On the other hand, it is important to validate the architecture of the catalog, since it is not common to have orders with more than 200 SKUs.





