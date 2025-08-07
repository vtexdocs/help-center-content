---
title: "Timeout when approving products manually"
id: 7JfgNTNNPiKnpuSZZcRvx9
status: PUBLISHED
createdAt: 2021-08-31T18:29:22.514Z
updatedAt: 2022-12-22T20:41:19.464Z
publishedAt: 2022-12-22T20:41:19.464Z
firstPublishedAt: 2021-08-31T18:36:01.637Z
contentType: knownIssue
productTeam: Channels
author: 2mXZkbi0oi061KicTExNjo
tag: Suggestions
slugEN: timeout-when-approving-products-manually
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

When trying to [approve products](https://help.vtex.com/en/tutorial/manual-sku-cataloging--tutorials_396) on the Received SKUs page manually, marketplaces get the error message: "Error not specified. Try again." One reason why this error occurs is Timeout, which indicates that the command took longer than expected to complete the requested action. 

## Simulation

You can reproduce this error by accessing the following pages in the VTEX Admin:

1. Go to the *MARKETPLACE* section and click on the __Sellers__ module.  
2. Click on the __Received SKUs page__.   
3. On the *Pending* tab, select a __SKU__ from the list by clicking on its checkbox.  
4. Click on `APPROVE AS NEW PRODUCT`.  
5. Fill in the following fields: __Category__ and __Brand__.   
6. Click on `APPROVE`.    

If the error message "Error not specified. Try again." appears, the Timeout error has occurred. 


## Workaround

To avoid this issue, refresh the page and try to approve the SKU manually again.


